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
  const { id, type, cam=null, home=null, more=null } = query;
  const pageView = useRef(null);
  const [visible, setVisible] = useState(false);
  if (!id) {
    history.push({
      pathname: "/",
    });
  }

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  useEffect(() => {
    const dom = Array.from(document.getElementsByClassName('adsbygoogle-noablate'))
    dom.forEach(item  => {
      if(item.getAttribute('data-vignette-loaded') && !item.getAttribute('aria-hidden')){
        window.ttq.track('AddToWishlist')
        window.gtag('event', 'insert_impresion')
      }
    })
  }, [])

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
    const origin = window.location.origin;
    let url = "";
    if (origin.indexOf("home.") > -1) {
      url = `https://hpip.work`;
    } else if (origin.indexOf("play.") > -1) {
      url = `https://home.hpip.work`;
    } else if (origin.indexOf("https://hpip") > -1) {
      url = `https://play.hpip.work`;
    }
    window.location.href = `${url}/detail?id=${item.id}&type=detailsGames&cam=${cam}&home=${home}&more=${more}`;
  };
  const gameDetail = window.Games[type].find((item) => item.id === id);

  const goPlay = () => {
    window.ttq.track('AddToCart')
    window.gtag('event', 'play_button_click')
    history.push({
      pathname: "/game",
      search: `?url=${gameDetail.openUrl}&cam=${cam}&home=${home}&more=${more}`,
    });
  };
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
      <div className="ggpart" onClick={() => window.gtag('event', 'details_native_ad_click')}>
        <ins
          class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6659704105417760"
          data-ad-slot="1691217936"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
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
        imgUrl="detailsGames"
        gamelist={window.Games.detailsGames}
        title="Remcommend For You"
        goDetailPage={goDetailPage}
      />
      <Footer></Footer>
    </div>
  );
};

export default Detail;
