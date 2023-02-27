import { useLocation } from "react-router-dom";
import "./index.less";
import Gohome from "../components/goHome";

const Game = () => {
  const {
    state: { url },
  } = useLocation();
  return (
    <div className="playBox">
      <Gohome />
      <iframe
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
