"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[315],{6088:function(e,t,n){var a=n(184);t.Z=function(){var e=function(e){window.location.href=1===e?"/aboutus":2===e?"/termofuse":"/privacy"};return(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsx)("span",{onClick:function(){return e(1)},children:"About Us"})," |"," ",(0,a.jsx)("span",{onClick:function(){return e(2)},children:" Trems of Use"})," |"," ",(0,a.jsx)("span",{onClick:function(){return e(3)},children:"Privacy Policy"})]})}},395:function(e,t,n){var a=n(885),c=(n(870),n(763),n(2791)),i=n(84),o=n(184);t.Z=function(e){var t=e.goDetailPage,n=e.title,s=e.gamelist,r=e.imgUrl,d=(0,c.useState)(!0),l=(0,a.Z)(d,2);return l[0],l[1],(0,c.useEffect)((function(){Array.from(document.getElementsByClassName("adsbygoogle-noablate")).forEach((function(e){e.getAttribute("data-vignette-loaded")&&!e.getAttribute("aria-hidden")&&(window.ttq.track("AddToWishlist"),window.gtag("event","insert_impresion"))}))}),[]),(0,o.jsxs)("div",{className:"block-categories",children:[(0,o.jsx)("div",{className:"title",children:n}),(0,o.jsx)("div",{className:"block-categories-games",children:s.map((function(e){return(0,o.jsx)("img",{alt:"game",onClick:function(){window.gtag("event","recommend_click"),t(e,"otherGames")},className:"gameImg",src:"".concat(i.L,"/").concat(r,"/").concat(e.id,".jpg")})}))})]})}},2315:function(e,t,n){n.r(t);var a=n(885),c=n(2791),i=n(870),o=n(395),s=n(84),r=n(6088),d=n(184);t.default=function(){var e=window.Games,t=e.bannerItems,n=e.recommendedGames,l=(0,c.useState)([]),m=(0,a.Z)(l,2),u=m[0],g=m[1],f=(0,c.useState)(!1),h=(0,a.Z)(f,2),v=(h[0],h[1],(0,c.useRef)(),(0,c.useState)()),p=(0,a.Z)(v,2),w=p[0],j=p[1],x=(0,s.a)(),b=x.cam,k=void 0===b?null:b,N=x.home,y=void 0===N?null:N,I=x.more,G=void 0===I?null:I;(0,c.useEffect)((function(){Array.from(document.getElementsByClassName("adsbygoogle-noablate")).forEach((function(e){e.getAttribute("data-vignette-loaded")&&!e.getAttribute("aria-hidden")&&(window.ttq.track("AddToWishlist"),window.gtag("event","insert_impresion"))}))}),[]),(0,c.useEffect)((function(){!function(){window.gtag("event","home_load_start");var e=t.map((function(e,t){return(0,d.jsx)(i.tq.Item,{onClick:function(){return C(e,"bannerItems")},children:(0,d.jsx)("div",{children:(0,d.jsx)("img",{alt:"11",className:"swiperImage",src:"".concat(s.L,"/bannerItems/").concat(e.id,".jpg")})})},e.id)}));g(e)}(),1===Number(y)&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]);var C=function(e,t){window.gtag("event","game_icon_user_click"),window.gtag("event","game_icon_click"),j({id:e.id,type:t}),_(e.id,t)},_=function(e,t){window.ttq.track("ClickButton"),e&&t||(w&&w.id?(e=w.id,t=w.type):(e=window.Games.otherGames[0].id,t="otherGames")),clearTimeout(null),window.location.href="https://play.hpip.work/detail?id=".concat(e,"&type=").concat(t,"&cam=").concat(k,"&home=").concat(y,"&more=").concat(G)};return(0,c.useEffect)((function(){document.getElementById("ggpart")&&document.getElementById("ggpart").addEventListener("click",(function(){console.log("触发1"),window.ttq.track("Search"),window.gtag("event","home_native_ad_click")}),!0)}),[]),(0,d.jsxs)("div",{className:"gameListBox",children:[(0,d.jsx)(i.tq,{style:{height:250},loop:!0,autoplay:!0,allowTouchMove:!0,autoplayInterval:"3000",indicator:function(e,n){return(0,d.jsx)("div",{className:"customIndicator",children:t.map((function(e,t){return(0,d.jsx)("div",{className:n===t?"customIndicatorItem currentItem":"customIndicatorItem",children:(0,d.jsx)("img",{alt:"",src:"".concat(s.L,"/bannerItems/").concat(e.id,"-small.jpg")})},t)}))})},children:u}),(0,d.jsxs)("div",{className:"floor-game",children:[(0,d.jsx)("div",{className:"block-gradient"}),(0,d.jsxs)("div",{className:"block-recomended",children:[(0,d.jsx)("div",{className:"title",children:" Editor's Picks"}),(0,d.jsxs)("div",{className:"gamePart",children:[(0,d.jsx)("div",{className:"top",children:n.slice(0,4).map((function(e,t){return(0,d.jsx)("img",{alt:"11",onClick:function(){return C(e,"recommendedGames")},className:"gameImg",src:"".concat(s.L,"/recommendedGames/").concat(e.id,".jpg")},t)}))}),(0,d.jsxs)("div",{className:"bottom",children:[(0,d.jsx)("img",{alt:"11",onClick:function(){return C(n[4],"recommendedGames")},className:"gameImg bigImg",src:"".concat(s.L,"/recommendedGames/").concat(n[4].id,".jpg")}),(0,d.jsx)("div",{className:"right",children:n.slice(5).map((function(e,t){return(0,d.jsx)("img",{alt:"11",onClick:function(){return C(e,"recommendedGames")},className:"gameImg",src:"".concat(s.L,"/recommendedGames/").concat(e.id,".jpg")},t)}))})]})]})]}),1===Number(y)&&(0,d.jsx)("div",{className:"ggpart",id:"ggpart",children:(0,d.jsx)("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-6659704105417760","data-ad-slot":"2344742486","data-full-width-responsive":"true"})}),(0,d.jsx)(o.Z,{title:"Hot Games",imgUrl:"otherGames",gamelist:window.Games.otherGames,goDetailPage:C})]}),(0,d.jsx)(r.Z,{})]})}},84:function(e,t,n){n.d(t,{L:function(){return i},a:function(){return o}});var a=n(9271),c=n(8352),i="https://d3cdeza28ixtol.cloudfront.net",o=function(){var e=(0,a.TH)().search;return c.Z.parse(e)}}}]);