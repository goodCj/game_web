import { useLocation } from "react-router-dom";
import Games from "../../json/game/index";
import { Button, Space, Rate, Mask, SpinLoading, Ellipsis } from "antd-mobile";
import { PlayOutline } from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
import "./index.less";
import { useState, useRef, useEffect } from "react";
import { sleep } from "antd-mobile/es/utils/sleep";
import OtherGames from "../main/bottom-others";
import Gohome from "../components/goHome";
const Detail = () => {
  const location = useLocation();
  const history = useHistory();
  const { state } = location;
  const pageView = useRef(null);
  const [visible, setVisible] = useState(false);
  let id = "";
  let type = "";
  if (state && state.id) {
    id = state.id;
    type = state.type;
  } else {
    history.push({
      pathname: "/",
    });
  }

  useEffect(() => {
    const fetch = async () => {
      setVisible(true);
      await sleep(500);
      setVisible(false);
      pageView.current.scrollTop = "0";
    };
    fetch();
  }, [state.id]);

  const goDetailPage = (item, type) => {
    history.push({
      pathname: "/detail",
      state: {
        id: item.id,
        type,
      },
    });
  };
  const gameDetail = Games[type].find((item) => item.id === id);
  const goPlay = () => {
    history.push({
      pathname: "/game",
      state: {
        url: gameDetail.openUrl,
      },
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
      <Gohome />
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
          className="bg"
          src={require(`../../static/${type}/${gameDetail.id}.jpg`)}
        ></img>
        <div className="gameBox">
          <div className="gamePic">
            <img
              src={require(`../../static/${type}/${gameDetail.id}.jpg`)}
            ></img>
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
      <OtherGames title="Remcommend For You" goDetailPage={goDetailPage} />
    </div>
  );
};

export default Detail;
