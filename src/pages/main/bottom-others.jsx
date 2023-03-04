import "./bottom-others.less";
import { InfiniteScroll, DotLoading } from "antd-mobile";
import { cloneDeep } from "lodash";
import { useState } from "react";
import { cdnUrl } from "../../util";
import { sleep } from "antd-mobile/es/utils/sleep";

const OtherGames = (props) => {
  const { otherGames } = window.Games;
  const { goDetailPage, title } = props;
  const [list, setList] = useState(otherGames.slice(0, 16));
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    let newList = cloneDeep(list);
    console.log(otherGames.length);
    const ll = new Array(16).fill("").map(() => {
      const index = Math.round(Math.random() * otherGames.length - 1);
      return otherGames[index]
        ? otherGames[index]
        : {
            id: "finn-on-the-platform-game",
            name: "Finn on the platform",
            openUrl:
              "https://html5.gamemonetize.co/ja2nxpbbex0v160y8ysp47adf0p0tfmt/",
            description: `"Finn on the platform" is a very fun adventure game! Complete the tracks and pass the levels! Start the great fun with your character named Finn!`,
          };
    });
    await sleep(2000);
    newList = [...newList, ...ll];
    setList(newList);
    setHasMore(list.length > 0);
  };

  const InfiniteScrollContent = ({ hasMore }) => {
    return (
      <>
        {hasMore ? (
          <>
            <span>Loading</span>
            <DotLoading />
          </>
        ) : (
          <span>--- end ---</span>
        )}
      </>
    );
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
            src={`${cdnUrl}/otherGames/${item.id}.jpg`}
          ></img>
        ))}
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
          <InfiniteScrollContent hasMore={hasMore} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default OtherGames;
