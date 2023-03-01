import Games from "../../json/game";
import "./bottom-others.less";
import { InfiniteScroll } from "antd-mobile";
import { cloneDeep } from "lodash";
import { useState } from "react";
import { sleep } from "antd-mobile/es/utils/sleep";

const OtherGames = (props) => {
  const { otherGames } = Games;
  const { goDetailPage, title } = props;
  const [list, setList] = useState(otherGames);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    let newList = cloneDeep(list);
    await sleep(2000);
    newList = [...newList, ...otherGames];
    setList(newList);
    setHasMore(list.length > 0);
  };

  return (
    <div className="block-categories">
      <div className="title">{title}</div>
      <div className="block-categories-games">
        {list.map((item) => (
          <img
            alt="游戏"
            onClick={() => goDetailPage(item, "otherGames")}
            className="gameImg"
            src={require(`~static/otherGames/${item.id}.jpg`)}
          ></img>
        ))}
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore}></InfiniteScroll>
      </div>
    </div>
  );
};

export default OtherGames;
