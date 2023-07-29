import { Button, Space, Rate, Mask, SpinLoading, Ellipsis } from "antd-mobile";
import { PlayOutline } from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
import "./index.less";
import { useState, useRef, useEffect } from "react";
import { sleep } from "antd-mobile/es/utils/sleep";
import OtherGames from "../main/bottom-others";
import { useQuery, cdnUrl } from "../../util";
import Footer from "../components/footer";

const Detail = () => {
  const history = useHistory();
  const query = useQuery();
  const { id, type, cam = null, home = null, more = null, clean = null, scroll = null, sec = 10 } = query;
  const pageView = useRef(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null)
  if (!id) {
    history.push({
      pathname: "/",
    });
  }

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    window.addEventListener("hashchange", () => {
      if (window.location.hash.includes("google_vignette")) {
        console.log('vignette_show')
        window.gtag('event', 'vignette_show')
      }
    })
  }, []);

  useEffect(() => {
    if (Number(clean) === 1) {
      localStorage.removeItem('__lsv__')
    }
    const dom = Array.from(document.getElementsByClassName('adsbygoogle-noablate'))
    dom.forEach(item => {
      if (item.getAttribute('data-vignette-loaded') && !item.getAttribute('aria-hidden')) {
        window.ttq.track('AddToWishlist')
        window.gtag('event', 'insert_impresion')
      }
    })
    if (Number(scroll) === 1) {
      window.addEventListener('scroll', scrollEvent, true)
    }
    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  const scrollEvent = () => {
    if (!document.getElementById('aswift_2') && !ref.current) return
    ref.current.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  }

  useEffect(() => {
    const fetch = async () => {
      pageView.current.scrollTop = "0";
      setVisible(true);
      await sleep(500);
      setVisible(false);
    };
    fetch();
  }, [id]);

  const goDetailPage = (item) => {
    window.gtag('event', 'game_icon_click')
    window.gtag('event', 'game_icon_user_click')
  };
  const gameDetail = window.Games[type].find((item) => item.id === id);

  const goPlay = () => {
    window.ttq.track('AddToCart')
    window.gtag('event', 'play_button_click')
    history.push({
      pathname: "/game",
      search: `?url=${gameDetail.openUrl}&cam=${cam}&home=${home}&more=${more}&clean=${clean}&sec=${sec}`,
    });
  };

  useEffect(() => {
    window.addEventListener('blur', () => {
      if(document.querySelector(".ggpart iframe") === document.activeElement){
        console.log('detail')
        window.gtag('event', 'details_native_ad_click')
        setTimeout(function() {
          window.focus()
      }, 0)
      }
    })
  }, [])
  var IframeOnClick = {
    resolution: 200,
    iframes: [],
    interval: null,
    Iframe: function () {
      this.element = arguments[0];
      this.cb = arguments[1];
      this.hasTracked = false;
    },
    track: function (element, cb) {
      this.iframes.push(new this.Iframe(element, cb));
      if (!this.interval) {
        var _this = this;
        this.interval = setInterval(function () {
          _this.checkClick();
        }, this.resolution);
      }
    },
    checkClick: function () {
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
    <div className="detail" ref={pageView}>
      <Mask
        className="mask"
        visible={visible}
        color="white"
        onMaskClick={() => setVisible(false)}
      >
        <SpinLoading color="primary" style={{ margin: "0 0" }}></SpinLoading>
      </Mask>
      <div
        className="headerTitle"
        onClick={() => {
          history.push({
            pathname: "/",
          });
        }}
      >
        Hot Free Games
      </div>
      <div className="gameBaseInfo">
        <img
          alt="111"
          className="bg"
          src={`${cdnUrl}/${type}/${gameDetail.id}.jpg`}
        ></img>
        <div className="gameBox">
          <div className="gamePic">
            <img alt="" src={`${cdnUrl}/${type}/${gameDetail.id}.jpg`}></img>
          </div>
          <div className="gameInfo">
            <div className="title">{gameDetail.name}</div>
            <div className="star">
              <Rate
                readOnly
                value={5}
                style={{
                  "--star-size": ".5rem",
                }}
              />
            </div>
            <Button
              className="playNow"
              block
              color="primary"
              size="large"
              onClick={goPlay}
            >
              <Space>
                <PlayOutline />
                <span>Play Now</span>
              </Space>
            </Button>
          </div>
        </div>
      </div>
      <div className="ggpart" >
        <div ref={ref}>
          {
            window.location.hostname.split('.').slice(-2).join('.').indexOf('hotfreegaming.com') > -1 &&
            <ins class="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-9569142697355861"
              data-ad-slot="7535788516"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          }
          {
            window.location.hostname.split('.').slice(-2).join('.').indexOf('hotfreegaming.com') === -1 &&
            <ins
              class="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6659704105417760"
              data-ad-slot="1691217936"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          }
        </div>

      </div>
      <div className="gameDes">
        <div className="title">{gameDetail.name}</div>
        <div className="content">
          <Ellipsis
            direction="end"
            rows={4}
            content={gameDetail.description}
            expandText={<div className="moreBtn">Read More</div>}
            collapseText={<div className="moreBtn">Show less</div>}
          ></Ellipsis>
        </div>
      </div>
      <OtherGames
        imgUrl="otherGames"
        gamelist={window.Games.detailsGames}
        title="Remcommend For You"
        goDetailPage={goDetailPage}
      />
      <Footer></Footer>
    </div>
  );
};

export default Detail;
