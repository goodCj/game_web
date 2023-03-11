import { useHistory } from "react-router-dom";
import "./index.less";
import { useQuery } from "../../util";

const Game = () => {
  const history = useHistory();
  const query = useQuery();
  const { url } = query;
  if (!url) {
    history.push({
      pathname: "/",
    });
  }
  return (
    <div className="playBox">
      <iframe
        title="game"
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
