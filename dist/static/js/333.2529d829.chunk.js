"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[333],{687:function(e,n,t){var a=t(9310),s=t(9271),c=t(184);n.Z=function(){var e=(0,s.k6)();return(0,c.jsx)(a.e$,{axis:"xy",magnetic:"x",className:"goHome",style:{"--initial-position-top":"50px","--initial-position-left":"20px","--edge-distance":"10px"},children:(0,c.jsx)(a.zx,{className:"homeBtn",onClick:function(){e.push({pathname:"/"})},children:(0,c.jsxs)(a.T,{children:[(0,c.jsx)("svg",{t:"1677682941120",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5590",width:"24",height:"24",children:(0,c.jsx)("path",{d:"M913.706667 512.128c23.552 26.197333 23.893333 60.288 4.48 79.530667-21.034667 20.864-53.973333 18.602667-71.466667 1.834666-17.493333-16.725333-265.301333-279.552-288.128-302.549333-36.053333-36.266667-70.741333-34.133333-104.661333 0-34.133333 34.389333-271.530667 282.88-288.768 297.898667-17.237333 15.104-49.792 18.346667-70.144-1.962667-22.869333-22.869333-19.754667-60.202667-2.048-78.933333 21.461333-22.698667 325.546667-338.133333 343.296-357.376 43.008-46.634667 98.688-45.653333 133.546666-8.192 25.984 27.904 317.013333 339.797333 343.893334 369.749333zM453.418667 375.765333c28.458667-29.696 73.130667-33.664 105.088-0.128 13.781333 14.506667 264.917333 273.706667 264.917333 273.706667v180.138667c-0.085333 27.349333-20.565333 52.992-52.053333 53.376h-160.853334V736.853333c0-20.096-7.125333-31.658667-26.026666-31.488-13.994667 0.128-139.52-0.554667-162.517334-0.384-19.413333 0.128-25.344 15.104-25.429333 31.829334 0 13.397333-0.469333 146.048-0.469333 146.048H239.701333c-32.469333 0.170667-52.992-16.554667-53.205333-47.488-0.085333-15.573333-0.128-187.690667-0.128-187.690667s248.32-252.373333 267.050667-271.914667z",fill:"#ffffff","p-id":"5591"})}),(0,c.jsx)("span",{style:{verticalAlign:"middle"},children:"Home"})]})})})}},395:function(e,n,t){var a=t(4165),s=t(2982),c=t(5861),r=t(885),i=t(9310),o=t(763),l=t(2791),m=t(84),d=t(4289),u=t(184);n.Z=function(e){var n=window.Games.otherGames,t=e.goDetailPage,h=e.title,g=(0,l.useState)(n.slice(0,16)),p=(0,r.Z)(g,2),f=p[0],x=p[1],j=(0,l.useState)(!0),v=(0,r.Z)(j,2),N=v[0],k=v[1],w=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,o.cloneDeep)(f),console.log(n.length),c=new Array(16).fill("").map((function(){var e=Math.round(Math.random()*n.length-1);return n[e]?n[e]:{id:"finn-on-the-platform-game",name:"Finn on the platform",openUrl:"https://html5.gamemonetize.co/ja2nxpbbex0v160y8ysp47adf0p0tfmt/",description:'"Finn on the platform" is a very fun adventure game! Complete the tracks and pass the levels! Start the great fun with your character named Finn!'}})),e.next=5,(0,d._)(2e3);case 5:t=[].concat((0,s.Z)(t),(0,s.Z)(c)),x(t),k(f.length>0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){var n=e.hasMore;return(0,u.jsx)(u.Fragment,{children:n?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{children:"Loading"}),(0,u.jsx)(i.k_,{})]}):(0,u.jsx)("span",{children:"--- end ---"})})};return(0,u.jsxs)("div",{className:"block-categories",children:[(0,u.jsx)("div",{className:"title",children:h}),(0,u.jsxs)("div",{className:"block-categories-games",children:[f.map((function(e){return(0,u.jsx)("img",{alt:"游戏",onClick:function(){return t(e,"otherGames")},className:"gameImg",src:"".concat(m.L,"/otherGames/").concat(e.id,".jpg")})})),(0,u.jsx)(i.v_,{loadMore:w,hasMore:N,children:(0,u.jsx)(I,{hasMore:N})})]})]})}},2315:function(e,n,t){t.r(n);var a=t(885),s=t(2791),c=t(9310),r=t(9271),i=t(395),o=t(687),l=t(84),m=t(184);n.default=function(){var e=window.Games,n=e.bannerItems,t=e.recommendedGames,d=(0,s.useState)([]),u=(0,a.Z)(d,2),h=u[0],g=u[1],p=(0,r.k6)();(0,s.useEffect)((function(){var e;e=n.map((function(e,n){return(0,m.jsx)(c.tq.Item,{onClick:function(){return f(e,"bannerItems")},children:(0,m.jsx)("div",{children:(0,m.jsx)("img",{alt:"11",className:"swiperImage",src:"".concat(l.L,"/bannerItems/").concat(e.id,".jpg")})})},e.id)})),g(e)}),[]);var f=function(e,n){p.push({pathname:"/detail",search:"?id=".concat(e.id,"&type=").concat(n)})};return(0,m.jsxs)("div",{className:"gameListBox",children:[(0,m.jsx)(o.Z,{}),(0,m.jsx)(c.tq,{style:{height:250},loop:!0,autoplay:!0,allowTouchMove:!0,autoplayInterval:"3000",indicator:function(e,t){return(0,m.jsx)("div",{className:"customIndicator",children:n.map((function(e,n){return(0,m.jsx)("div",{className:t===n?"customIndicatorItem currentItem":"customIndicatorItem",children:(0,m.jsx)("img",{alt:"",src:"".concat(l.L,"/bannerItems/").concat(e.id,"-small.jpg")})},n)}))})},children:h}),(0,m.jsxs)("div",{className:"floor-game",children:[(0,m.jsx)("div",{className:"block-gradient"}),(0,m.jsxs)("div",{className:"block-recomended",children:[(0,m.jsx)("div",{className:"title",children:" Editor's Picks"}),(0,m.jsxs)("div",{className:"gamePart",children:[(0,m.jsx)("div",{className:"top",children:t.slice(0,4).map((function(e,n){return(0,m.jsx)("img",{alt:"11",onClick:function(){return f(e,"recommendedGames")},className:"gameImg",src:"".concat(l.L,"/recommendedGames/").concat(e.id,".jpg")},n)}))}),(0,m.jsxs)("div",{className:"bottom",children:[(0,m.jsx)("img",{alt:"11",onClick:function(){return f(t[4],"recommendedGames")},className:"gameImg bigImg",src:"".concat(l.L,"/recommendedGames/").concat(t[4].id,".jpg")}),(0,m.jsx)("div",{className:"right",children:t.slice(5).map((function(e,n){return(0,m.jsx)("img",{alt:"11",onClick:function(){return f(e,"recommendedGames")},className:"gameImg",src:"".concat(l.L,"/recommendedGames/").concat(e.id,".jpg")},n)}))})]})]})]}),(0,m.jsx)(i.Z,{title:"Hot Games",goDetailPage:f})]})]})}},84:function(e,n,t){t.d(n,{L:function(){return c},a:function(){return r}});var a=t(9271),s=t(8352),c="https://d3cdeza28ixtol.cloudfront.net",r=function(){var e=(0,a.TH)().search;return s.Z.parse(e)}}}]);