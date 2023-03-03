const { override, addLessLoader, addWebpackAlias } = require("customize-cra");
const path = require("path");
const px2rem = require("postcss-px2rem-exclude");
const rewirePostcss = require("react-app-rewire-postcss");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const isEnvProduction = process.env.NODE_ENV === "production";

const addCompression = () => (config) => {
  config.plugins.push(
    // gzip压缩
    new CompressionWebpackPlugin({
      test: /\.(css|js)$/,
      // 只处理比1kb大的资源
      threshold: 1024,
      // 只处理压缩率低于90%的文件
      minRatio: 0.9,
    })
  );

  return config;
};

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
      },
    }),
    addWebpackAlias({
      "~static": path.resolve(__dirname, "./src/static"),
      "~json": path.resolve(__dirname, "./src/json"),
    }),
    addCompression(),
    (config, env) => {
      if (isEnvProduction) config.devtool = false;
      config.output.path = path.join(path.dirname(config.output.path), "dist");
      // 重写postcss
      rewirePostcss(config, {
        plugins: () => [
          //关键:设置px2rem
          px2rem({
            remUnit: 37.5,
            exclude: /node-modules/i,
          }),
        ],
      });
      return config;
    }
  ),
};
