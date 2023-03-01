import { useLocation } from "react-router-dom";
import "./index.less";
import Gohome from "../components/goHome";
import { useHistory } from "react-router-dom";

const Game = () => {
  const history = useHistory();
  const { state } = useLocation;
  let url = "";
  if (state && state.url) {
    url = state.url;
  } else {
    history.push({
      pathname: "/",
    });
  }
  return (
    <div className="playBox">
      <Gohome />
      <iframe
        title="游戏盒子"
        src={url}
        height="100%"
        width="100%"
        scrolling="none"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Game;
