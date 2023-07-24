import "./index.less";
import { useState, useEffect, useRef } from "react";
import { Swiper, Modal, Mask } from "antd-mobile";
import OtherGames from "./bottom-others";
import { cdnUrl, useQuery } from "../../util";
import Footer from "../components/footer";
import { CloseCircleFill } from "antd-mobile-icons";
let timeout = null
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
    console.log(element,  !this.interval)
      this.iframes.push(new this.Iframe(element, cb));  
      if (!this.interval) {  
          var _this = this;  
          this.interval = setInterval(function() { _this.checkClick(); }, this.resolution);  
      }  
  },  
  checkClick: function() {  
      if (document.activeElement) {
          var activeElement = document.activeElement;
          for (var i in this.iframes) {  
              if (activeElement === this.iframes[i].element) { 
                  document.activeElement.blur();
                  // 如果点击的是这个iframe 这个iframe处于未被点击的状态
                  if (this.iframes[i].hasTracked == false) {   
                      // 标记为被点击并等待下一次点击
                      this.iframes[i].hasTracked = true;  
                      // 如果200毫秒内没有被在此点击重置次状态
                      this.iframes[i].setTimeout = setTimeout(function(iframe) {
                          iframe.hasTracked = false;
                      }, 500, this.iframes[i] );
                  } else {
                      // 如果判断这个已经是被点击的状态了
                      // 清除掉等待事件
                      clearTimeout(this.iframes[i].setTimeout);
                      // 修改为未选择状态
                      this.iframes[i].hasTracked = false;
                      // 触发事件
                      this.iframes[i].cb.apply(window, []);   
                  }
              } else {  
                  this.iframes[i].hasTracked = false;  
              }  
          }  
      }
  }
};  
const Main = () => {
  const { bannerItems, recommendedGames } = window.Games;
  const [banner, setBanner] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const moreRef = useRef();
  const [game, setGame] = useState();
  const query = useQuery();
  const { cam = null, more = null, clean = null, scroll = null, sec = 10 } = query;
  const ref = useRef(null)
  useEffect(() => {
    const dom = Array.from(document.getElementsByClassName('adsbygoogle-noablate'))
    dom.forEach(item => {
      if (item.getAttribute('data-vignette-loaded') && !item.getAttribute('aria-hidden')) {
        window.ttq.track('AddToWishlist')
        window.gtag('event', 'insert_impresion')
      }
    })

    const id = window.Games.otherGames[0].id;
    const type = "otherGames";
    clearTimeout(timeout);
    const aA = document.createElement('a')
    aA.href = `https://play.${window.location.hostname.split('.').slice(-2).join('.')}/detail?id=${id}&type=${type}&cam=${cam}&more=${more}&clean=${clean}&sec=${sec}`;
    aA.target = '_self'
    aA.text = '222'
    aA.setAttribute('id', 'clickBox')
    aA.style.visibility = 'hidden'
    const gameListBox = document.getElementById('gameListBox')
    gameListBox.appendChild(aA)
  }, [])

  const init = () => {
    window.gtag('event', 'home_load_start')
    const bannerArr = bannerItems.map((item, index) => {
      return (
        <Swiper.Item
          key={item.id}
        >
          <div>
            <a onClick={goDetailPage} href={`https://play.${window.location.hostname.split('.').slice(-2).join('.')}/detail?id=${item.id}&type=bannerItems&cam=${cam}&more=${more}&clean=${clean}&sec=${sec}`}>
              <img
                alt="11"
                className="swiperImage"
                src={`${cdnUrl}/bannerItems/${item.id}.jpg`}
              ></img>
            </a>

          </div>
        </Swiper.Item>
      );
    });
    setBanner(bannerArr);
    if (Number(more) === 1) {
      timeout = setTimeout(() => {
        window.gtag('event', 'game_icon_click')
        goPage();
      }, Number(sec) * 1000);
    }

  };
  useEffect(() => {
    if (Number(clean) === 1) {
      localStorage.removeItem('__lsv__')
    }
    init();
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    if (Number(scroll) === 1) {
      window.addEventListener('scroll', scrollEvent, true)
    }
    window.gtag('event', 'home_load_finish')
    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }


  }, []);

  const scrollEvent = () => {
    if (!document.getElementById('aswift_1') && !ref.current) return
    // setTimeout(() => {
    //   ref.current.click()
    // }, 2000)

  }

  const goDetailPage = () => {
    clearTimeout(timeout);
    window.gtag('event', 'game_icon_click')
    window.gtag('event', 'game_icon_user_click')
    window.ttq.track('ClickButton')
  };

  const goPage = (id, type) => {
    window.ttq.track('ClickButton')
    clearTimeout(timeout);
    const clickBox = document.getElementById('clickBox')
    clickBox && clickBox.click()
  };

  useEffect(() => {
    window.addEventListener('blur', () => {
      if(document.querySelector(".ggpart iframe") === document.activeElement){
        console.log('main')
        window.ttq.track('Search')
        window.gtag('event', 'home_native_ad_click')
      }
    })
  }, [])
  

  return (
    <div className="gameListBox" id="gameListBox">
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
                <a onClick={goDetailPage} className="gameImg" href={`https://play.${window.location.hostname.split('.').slice(-2).join('.')}/detail?id=${item.id}&type=recommendedGames&cam=${cam}&more=${more}&clean=${clean}&sec=${sec}`}>
                  <img
                    key={index}
                    alt="11"

                    src={`${cdnUrl}/recommendedGames/${item.id}.jpg`}
                  />
                </a>
              ))}
            </div>
            <div className="bottom">
              <a onClick={goDetailPage} className="gameImg  bigImg" href={`https://play.${window.location.hostname.split('.').slice(-2).join('.')}/detail?id=${recommendedGames[4].id}&type=recommendedGames&cam=${cam}&more=${more}&clean=${clean}&sec=${sec}`}>
                <img
                  alt="11"
                  src={`${cdnUrl}/recommendedGames/${recommendedGames[4].id}.jpg`}
                ></img>
              </a>

              <div className="right">
                {recommendedGames.slice(5).map((item, index) => (
                  <a onClick={goDetailPage} className="gameImg" href={`https://play.${window.location.hostname.split('.').slice(-2).join('.')}/detail?id=${item.id}&type=recommendedGames&cam=${cam}&more=${more}&clean=${clean}&sec=${sec}`}>
                    <img
                      key={index}
                      alt="11"

                      src={`${cdnUrl}/recommendedGames/${item.id}.jpg`}
                    ></img>
                  </a>

                ))}
              </div>
            </div>
          </div>
        </div>
        <div >

          <div className="ggpart" >
            <div ref={ref}>
              {
                window.location.hostname.split('.').slice(-2).join('.').indexOf('hotfreegaming.com') > -1 &&
                <ins class="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-9569142697355861"
                  data-ad-slot="2475033521"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
              }
              {
                window.location.hostname.split('.').slice(-2).join('.').indexOf('hotfreegaming.com') === -1 &&
                <ins
                  class="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-6659704105417760"
                  data-ad-slot="2344742486"
                  data-full-width-responsive="true"
                ></ins>
              }
            </div>

          </div>
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
