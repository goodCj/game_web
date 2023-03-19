import "./index.less";
import { useState, useEffect } from "react";
import { Swiper, Modal } from "antd-mobile";
import { useHistory } from "react-router-dom";
import OtherGames from "./bottom-others";
import { cdnUrl } from "../../util";
import Footer from "../components/footer";

const Main = () => {
  const { bannerItems, recommendedGames } = window.Games;
  const [banner, setBanner] = useState([]);
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(true);

  const init = () => {
    const bannerArr = bannerItems.map((item, index) => {
      return (
        <Swiper.Item
          key={item.id}
          onClick={() => goDetailPage(item, "bannerItems")}
        >
          <div>
            <img
              alt="11"
              className="swiperImage"
              src={`${cdnUrl}/bannerItems/${item.id}.jpg`}
            ></img>
          </div>
        </Swiper.Item>
      );
    });
    setBanner(bannerArr);
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  const goDetailPage = (item, type) => {
    history.push({
      pathname: "/detail",
      search: `?id=${item.id}&type=${type}`,
    });
  };

  return (
    <div className="gameListBox">
      {/* 轮播图 */}
      <Modal
        visible={modalVisible}
        style={{}}
        showCloseButton
        content={
          <div>
            <ins
              class="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6659704105417760"
              data-ad-slot="2164693363"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        }
        closeOnAction
        onClose={() => {
          setModalVisible(false);
        }}
      ></Modal>

      <Swiper
        style={{ height: 250 }}
        loop
        autoplay
        allowTouchMove
        autoplayInterval="3000"
        indicator={(total, current) => (
          <div className="customIndicator">
            {bannerItems.map((item, index) => (
              <div
                key={index}
                className={
                  current === index
                    ? "customIndicatorItem currentItem"
                    : "customIndicatorItem"
                }
              >
                <img
                  alt=""
                  src={`${cdnUrl}/bannerItems/${item.id}-small.jpg`}
                ></img>
              </div>
            ))}
          </div>
        )}
      >
        {banner}
      </Swiper>
      <div className="floor-game">
        <div className="block-gradient"></div>
        <div className="block-recomended">
          <div className="title"> Editor's Picks</div>
          <div className="gamePart">
            <div className="top">
              {recommendedGames.slice(0, 4).map((item, index) => (
                <img
                  key={index}
                  alt="11"
                  onClick={() => goDetailPage(item, "recommendedGames")}
                  className="gameImg"
                  src={`${cdnUrl}/recommendedGames/${item.id}.jpg`}
                ></img>
              ))}
            </div>
            <div className="bottom">
              <img
                alt="11"
                onClick={() =>
                  goDetailPage(recommendedGames[4], "recommendedGames")
                }
                className="gameImg bigImg"
                src={`${cdnUrl}/recommendedGames/${recommendedGames[4].id}.jpg`}
              ></img>
              <div className="right">
                {recommendedGames.slice(5).map((item, index) => (
                  <img
                    key={index}
                    alt="11"
                    onClick={() => goDetailPage(item, "recommendedGames")}
                    className="gameImg"
                    src={`${cdnUrl}/recommendedGames/${item.id}.jpg`}
                  ></img>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ggpart">
          <ins
            class="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6659704105417760"
            data-ad-slot="2344742486"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>

        <OtherGames
          title="Hot Games"
          imgUrl="otherGames"
          gamelist={window.Games.otherGames}
          goDetailPage={goDetailPage}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
