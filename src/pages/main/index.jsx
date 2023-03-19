import "./index.less";
import { useState, useEffect, useRef } from "react";
import { Swiper, Modal, Mask } from "antd-mobile";
import { useHistory } from "react-router-dom";
import OtherGames from "./bottom-others";
import { cdnUrl, useQuery } from "../../util";
import Footer from "../components/footer";
import { CloseCircleFill } from "antd-mobile-icons";
let timeout = null;
const Main = () => {
  const { bannerItems, recommendedGames } = window.Games;
  const [banner, setBanner] = useState([]);
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(true);
  const moreRef = useRef();
  const [game, setGame] = useState();
  const query = useQuery();
  const { home, more } = query;

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
    setTimeout(() => {
      if (Number(more) === 1) {
        const status = moreRef.current.getAttribute("data-ad-status");
        if (status === "filled") {
          setModalVisible(true);
        } else {
          goPage();
        }
      }
    }, 10000);
  };

  useEffect(() => {
    init();
    if (Number(home) === 1) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    if (Number(more) === 1) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  const goDetailPage = (item, type) => {
    setGame({ id: item.id, type: type });

    if (Number(more) === 1) {
      const status = moreRef.current.getAttribute("data-ad-status");
      if (status === "filled") {
        setModalVisible(true);
      } else {
        goPage(item.id, type);
      }
    } else {
      goPage(item.id, type);
    }
  };

  const goPage = (id, type) => {
    if (!(id && type)) {
      if (game && game.id) {
        id = game.id;
        type = game.type;
      } else {
        id = window.Games.otherGames[0].id;
        type = "otherGames";
      }
    }
    clearTimeout(timeout);
    console.log(id);
    history.push({
      pathname: "/detail",
      search: `?id=${id}&type=${type}`,
    });
  };

  return (
    <div className="gameListBox">
      {/* 轮播图 */}
      {Number(more) === 1 && (
        <div
          className="fixedGG"
          style={{ display: modalVisible ? "block" : "none" }}
        >
          <Mask visible={true} />
          <div className="modal">
            <CloseCircleFill className="closeIcon" onClick={() => goPage} />
            <ins
              class="adsbygoogle"
              ref={moreRef}
              style={{ display: "block" }}
              data-ad-client="ca-pub-6659704105417760"
              data-ad-slot="2164693363"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
      )}

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
        {Number(home) === 1 && (
          <div className="ggpart">
            <ins
              class="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6659704105417760"
              data-ad-slot="2344742486"
              data-full-width-responsive="true"
            ></ins>
          </div>
        )}

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
