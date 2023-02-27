import { useLocation } from "react-router-dom";
import Games from "../../json/game/index";
import { Button, Space, Rate } from "antd-mobile";
import { FireFill, PlayOutline } from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
import "./index.less";
import { useState } from "react";
import OtherGames from "../main/bottom-others";
import Gohome from "../components/goHome";
const Detail = () => {
  const location = useLocation();
  const history = useHistory();
  const {
    state: { id, type },
  } = location;
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
  const isMore = gameDetail.description.length >= 210;
  const [moreBtn, setMoreBtn] = useState(!isMore);
  const goPlay = () => {
    history.push({
      pathname: "/game",
      state: {
        url: gameDetail.openUrl,
      },
    });
  };
  return (
    <div className="detail">
      <Gohome />
      <div className="headerTitle">HotFreeGames</div>
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
          {isMore && (
            <div
              className="moreBtn"
              onClick={() => {
                setMoreBtn(!moreBtn);
              }}
            >
              {!moreBtn ? "Read More" : "Show less"}
            </div>
          )}
          <div>{gameDetail.description.substr(0, 210)}</div>
          {moreBtn && <div>{gameDetail.description.substr(210)}</div>}
        </div>
      </div>
      <OtherGames title="Remcommend For You" goDetailPage={goDetailPage} />
    </div>
  );
};

export default Detail;
