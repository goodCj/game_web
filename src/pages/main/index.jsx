import "./index.less";
import { useState, useEffect, useRef } from "react";
import { Swiper, Modal, Mask } from "antd-mobile";
import OtherGames from "./bottom-others";
import { cdnUrl, useQuery } from "../../util";
import Footer from "../components/footer";
import { CloseCircleFill } from "antd-mobile-icons";
let timeout = null
const Main = () => {
  const { bannerItems, recommendedGames } = window.Games;
  const [banner, setBanner] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const moreRef = useRef();
  const [game, setGame] = useState();
  const query = useQuery();
  const { cam=null, home=null, more=null } = query;

  useEffect(() => {
    const dom = Array.from(document.getElementsByClassName('adsbygoogle-noablate'))
    dom.forEach(item  => {
      if(item.getAttribute('data-vignette-loaded') && !item.getAttribute('aria-hidden')){
        window.ttq.track('AddToWishlist')
        window.gtag('event', 'insert_impresion')
      }
    })
  }, [])

  const init = () => {
    window.gtag('event', 'home_load_start')
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
    // timeout = setTimeout(() => {
    //   if (Number(more) === 1) {
    //     // const status = moreRef.current.getAttribute("data-ad-status");
    //     // if (status === "filled") {
    //     //   setModalVisible(true);
    //     // } else {
    //       window.gtag('event', 'game_icon_click')
    //       goPage();
    //     // }
    //   }
    // }, 10000);
  };

  useEffect(() => {
    init();
    if (Number(home) === 1) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    // if (Number(more) === 1) {
    //   (window.adsbygoogle = window.adsbygoogle || []).push({});
    // }
  }, []);

  const goDetailPage = (item, type) => {
    window.gtag('event', 'game_icon_user_click')
    window.gtag('event', 'game_icon_click')
    setGame({ id: item.id, type: type });
    goPage(item.id, type);
    // if (Number(more) === 1) {
    //   const status = moreRef.current.getAttribute("data-ad-status");
    //   if (status === "filled") {
    //     // setModalVisible(true);
    //   } else {
    //     goPage(item.id, type);
    //   }
    // } else {
      
    // }
  };

  const goPage = (id, type) => {
    window.ttq.track('ClickButton')
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
    window.location.href = `https://play.hpip.work/detail?id=${id}&type=${type}&cam=${cam}&home=${home}&more=${more}`;
  };
  const ref  = useRef(null)
  useEffect(()  => {
    if(!document.getElementById('aswift_1')) return
    IframeOnClick.track(document.getElementById('aswift_1'), function() {
      console.log(1111)
  });
    document.getElementById('ggpart') && document.getElementById('ggpart').addEventListener('click',  () => {
      window.ttq.track('Search')
      window.gtag('event', 'home_native_ad_click')
    }, true)
  },  [ref.current])
  var IframeOnClick = {
    resolution: 200,
    iframes: [],
    interval: null,
    Iframe: function() {
        this.element = arguments[0];
        this.cb = arguments[1];
        this.hasTracked = false;
    },
    track: function(element, cb) {
        this.iframes.push(new this.Iframe(element, cb));
        if (!this.interval) {
            var _this = this;
            this.interval = setInterval(function() {
                _this.checkClick();
            }, this.resolution);
        }
    },
    checkClick: function() {
        if (document.activeElement) {
            var activeElement = document.activeElement;
            for (var i in this.iframes) {
                if (activeElement === this.iframes[i].element) { // user is in this Iframe  
                    if (this.iframes[i].hasTracked == false) {
                        this.iframes[i].cb.apply(window, []);
                        this.iframes[i].hasTracked = true;
                    }
                } else {
                    this.iframes[i].hasTracked = false;
                }
            }
        }
    }
}

  return (
    <div className="gameListBox">
      {/* 轮播图 */}
      {/* {Number(more) === 1 && (
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
      )} */}

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
        { Number(home) === 1 && (
          <div className="ggpart" ref={ref} >
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
