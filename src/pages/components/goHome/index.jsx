import { Button, Space, FloatingBubble } from "antd-mobile";
import "./index.less";
import qs from "query-string";
const Gohome = () => {
  const { cam = null, home = null, more = null, clean = null, scroll = null, sec = 10} = qs.parse(window.location.search)
  console.log(cam)
  return (
    <FloatingBubble
      axis="xy"
      magnetic="x"
      className="goHome"
      style={{
        "--initial-position-top": "50px",
        "--initial-position-left": "20px",
        "--edge-distance": "10px",
      }}
    >
      <a onClick={() => {
          window.gtag('event', 'home_button_click')
        }} className="homeBtn" href={`https://${window.location.hostname.split('.').slice(-2).join('.')}?cam=${cam}&home=${home}&more=${more}&clean=${clean}&sec=${sec}`}>
      <Space>
          <svg
            t="1677682941120"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5590"
            width="24"
            height="24"
          >
            <path
              d="M913.706667 512.128c23.552 26.197333 23.893333 60.288 4.48 79.530667-21.034667 20.864-53.973333 18.602667-71.466667 1.834666-17.493333-16.725333-265.301333-279.552-288.128-302.549333-36.053333-36.266667-70.741333-34.133333-104.661333 0-34.133333 34.389333-271.530667 282.88-288.768 297.898667-17.237333 15.104-49.792 18.346667-70.144-1.962667-22.869333-22.869333-19.754667-60.202667-2.048-78.933333 21.461333-22.698667 325.546667-338.133333 343.296-357.376 43.008-46.634667 98.688-45.653333 133.546666-8.192 25.984 27.904 317.013333 339.797333 343.893334 369.749333zM453.418667 375.765333c28.458667-29.696 73.130667-33.664 105.088-0.128 13.781333 14.506667 264.917333 273.706667 264.917333 273.706667v180.138667c-0.085333 27.349333-20.565333 52.992-52.053333 53.376h-160.853334V736.853333c0-20.096-7.125333-31.658667-26.026666-31.488-13.994667 0.128-139.52-0.554667-162.517334-0.384-19.413333 0.128-25.344 15.104-25.429333 31.829334 0 13.397333-0.469333 146.048-0.469333 146.048H239.701333c-32.469333 0.170667-52.992-16.554667-53.205333-47.488-0.085333-15.573333-0.128-187.690667-0.128-187.690667s248.32-252.373333 267.050667-271.914667z"
              fill="#ffffff"
              p-id="5591"
            ></path>
          </svg>
          <span style={{ verticalAlign: "middle" }}>Home</span>
        </Space>
      </a>
    </FloatingBubble>
  );
};

export default Gohome;
