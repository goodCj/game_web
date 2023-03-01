import "./index.less";
import { useState, useEffect } from "react";
import { Swiper } from "antd-mobile";
import { useHistory } from "react-router-dom";
import Games from "../../json/game/index";
import OtherGames from "./bottom-others";
const Main = () => {
  const { bannerItems, recommendedGames, otherGames } = Games;
  const [banner, setBanner] = useState([]);
  const history = useHistory();
  const init = () => {
    console.log(bannerItems);
    const bannerArr = bannerItems.map((item, index) => {
      return (
        <Swiper.Item
          key={item.id}
          onClick={() => goDetailPage(item, "bannerItems")}
        >
          <div>
            <img
              className="swiperImage"
              src={require(`~static/bannerItems/${item.id}.jpg`)}
            ></img>
          </div>
        </Swiper.Item>
      );
    });
    setBanner(bannerArr);
  };

  useEffect(() => {
    init();
  }, []);

  const goDetailPage = (item, type) => {
    history.push({
      pathname: "/detail",
      state: {
        id: item.id,
        type,
      },
    });
  };

  return (
    <div className="gameListBox">
      {/* 轮播图 */}
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
                className={
                  current === index
                    ? "customIndicatorItem currentItem"
                    : "customIndicatorItem"
                }
              >
                <img
                  src={require(`~static/bannerItems/${item.id}-small.jpg`)}
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
              {recommendedGames.slice(0, 4).map((item) => (
                <img
                  onClick={() => goDetailPage(item, "recommendedGames")}
                  className="gameImg"
                  src={require(`~static/recommendedGames/${item.id}.jpg`)}
                ></img>
              ))}
            </div>
            <div className="bottom">
              <img
                onClick={() =>
                  goDetailPage(recommendedGames[4], "recommendedGames")
                }
                className="gameImg bigImg"
                src={require(`~static/recommendedGames/${recommendedGames[4].id}.jpg`)}
              ></img>
              <div className="right">
                {recommendedGames.slice(5).map((item) => (
                  <img
                    onClick={() => goDetailPage(item, "recommendedGames")}
                    className="gameImg"
                    src={require(`~static/recommendedGames/${item.id}.jpg`)}
                  ></img>
                ))}
              </div>
            </div>
          </div>
        </div>
        <OtherGames title="Hot Games" goDetailPage={goDetailPage} />
      </div>
    </div>
  );
};

export default Main;
