import "./bottom-others.less";
import { InfiniteScroll, DotLoading } from "antd-mobile";
import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { cdnUrl } from "../../util";
import { sleep } from "antd-mobile/es/utils/sleep";

const OtherGames = (props) => {
  const { goDetailPage, title, gamelist, imgUrl } = props;
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [num, setNum]   = useState(1)

  useEffect(() => {
    const dom = Array.from(document.getElementsByClassName('adsbygoogle-noablate'))
    dom.forEach(item  => {
      if(item.getAttribute('data-vignette-loaded') && !item.getAttribute('aria-hidden')){
        window.ttq.track('AddToWishlist')
        window.gtag('event', 'insert_impresion')
      }
    })
  }, [])

  const createJs = () => {
    const script = document.createElement('script');
    script.src = `${cdnUrl}/moreGames/game${num}.js`
    script.async = true
    document.head.appendChild(script)
  }

  const loadMore = async () => {
    let newList = cloneDeep(list);
    if(num > 10) return;
    createJs()
    // const ll = new Array(16).fill("").map(() => {
    //   const index = Math.round(Math.random() * gamelist.length - 1);
    //   return gamelist[index]
    //     ? gamelist[index]
    //     : {
    //         id: "finn-on-the-platform-game",
    //         name: "Finn on the platform",
    //         openUrl:
    //           "https://html5.gamemonetize.co/ja2nxpbbex0v160y8ysp47adf0p0tfmt/",
    //         description: `"Finn on the platform" is a very fun adventure game! Complete the tracks and pass the levels! Start the great fun with your character named Finn!`,
    //       };
    // });
    await sleep(2000);
    const newll = window.moreGames.game
    console.log(num,window.moreGames, newll)
    newList = [...newList, ...newll];
    setList(newList);
    const  newNum = num + 1
    setNum(newNum)
    setHasMore(newNum<=10);
    
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
            alt="game"
            onClick={() => {
              
              window.gtag('event', 'recommend_click')
              goDetailPage(item, "otherGames")
            }}
            className="gameImg"
            src={`${cdnUrl}/${imgUrl}/${item.id}.jpg`}
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
