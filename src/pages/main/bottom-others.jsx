import Games from "../../json/game";
import "./bottom-others.less";
const OtherGames = (props) => {
  const { otherGames } = Games;
  const { goDetailPage, title } = props;

  return (
    <div className="block-categories">
      <div className="title">{title}</div>
      <div className="block-categories-games">
        {otherGames.map((item) => (
          <img
            onClick={() => goDetailPage(item, "otherGames")}
            className="gameImg"
            src={require(`~static/otherGames/${item.id}.jpg`)}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default OtherGames;
