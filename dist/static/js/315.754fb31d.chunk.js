"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[315],{6088:function(e,t,n){var a=n(184);t.Z=function(){var e=function(e){window.location.href=1===e?"/aboutus":2===e?"/termofuse":"/privacy"};return(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsx)("span",{onClick:function(){return e(1)},children:"About Us"})," |"," ",(0,a.jsx)("span",{onClick:function(){return e(2)},children:" Trems of Use"})," |"," ",(0,a.jsx)("span",{onClick:function(){return e(3)},children:"Privacy Policy"})]})}},395:function(e,t,n){var a=n(885),i=(n(870),n(763),n(2791)),c=n(84),s=n(184);t.Z=function(e){var t=e.goDetailPage,n=e.title,o=e.gamelist,r=e.imgUrl,l=(0,i.useState)(!0),d=(0,a.Z)(l,2);return d[0],d[1],(0,i.useEffect)((function(){Array.from(document.getElementsByClassName("adsbygoogle-noablate")).forEach((function(e){e.getAttribute("data-vignette-loaded")&&!e.getAttribute("aria-hidden")&&(window.ttq.track("AddToWishlist"),window.gtag("event","insert_impresion"))}))}),[]),(0,s.jsxs)("div",{className:"block-categories",children:[(0,s.jsx)("div",{className:"title",children:n}),(0,s.jsx)("div",{className:"block-categories-games",children:o.map((function(e){return(0,s.jsx)("img",{alt:"game",onClick:function(){window.gtag("event","recommend_click"),t(e,"otherGames")},className:"gameImg",src:"".concat(c.L,"/").concat(r,"/").concat(e.id,".jpg")})}))})]})}},2315:function(e,t,n){n.r(t);var a=n(885),i=n(2791),c=n(870),s=n(395),o=n(84),r=n(6088),l=n(184),d=null;t.default=function(){var e=window.Games,t=e.bannerItems,n=e.recommendedGames,m=(0,i.useState)([]),u=(0,a.Z)(m,2),g=u[0],f=u[1],h=(0,i.useState)(!1),v=(0,a.Z)(h,2),w=(v[0],v[1],(0,i.useRef)(),(0,i.useState)()),p=(0,a.Z)(w,2),j=p[0],b=p[1],k=(0,o.a)(),x=k.cam,y=void 0===x?null:x,N=k.home,I=void 0===N?null:N,_=k.more,E=void 0===_?null:_,G=k.clean,C=void 0===G?null:G,T=k.scroll,L=void 0===T?null:T,A=(0,i.useRef)(null);(0,i.useEffect)((function(){Array.from(document.getElementsByClassName("adsbygoogle-noablate")).forEach((function(e){e.getAttribute("data-vignette-loaded")&&!e.getAttribute("aria-hidden")&&(window.ttq.track("AddToWishlist"),window.gtag("event","insert_impresion"))}))}),[]),(0,i.useEffect)((function(){return 1===Number(C)&&localStorage.removeItem("__lsv__"),function(){window.gtag("event","home_load_start");var e=t.map((function(e,t){return(0,l.jsx)(c.tq.Item,{onClick:function(){return B(e,"bannerItems")},children:(0,l.jsx)("div",{children:(0,l.jsx)("img",{alt:"11",className:"swiperImage",src:"".concat(o.L,"/bannerItems/").concat(e.id,".jpg")})})},e.id)}));f(e),d=setTimeout((function(){1===Number(E)&&(window.gtag("event","game_icon_click"),q())}),1e4)}(),1===Number(I)&&(window.adsbygoogle=window.adsbygoogle||[]).push({}),1===Number(L)&&window.addEventListener("scroll",Z,!0),window.gtag("event","home_load_finish"),function(){window.removeEventListener("scroll",Z)}}),[]);var Z=function(){(document.getElementById("aswift_1")||A.current)&&A.current.dispatchEvent(new MouseEvent("click",{bubbles:!0}))},B=function(e,t){window.gtag("event","game_icon_click"),window.gtag("event","game_icon_user_click"),b({id:e.id,type:t}),q(e.id,t)},q=function(e,t){window.ttq.track("ClickButton"),e&&t||(j&&j.id?(e=j.id,t=j.type):(e=window.Games.otherGames[0].id,t="otherGames")),clearTimeout(d),window.location.href="https://play.".concat(window.location.hostname.split(".").slice(-2).join("."),"/detail?id=").concat(e,"&type=").concat(t,"&cam=").concat(y,"&home=").concat(I,"&more=").concat(E)};(0,i.useEffect)((function(){document.getElementById("aswift_1")&&P.track(document.getElementById("aswift_1"),(function(){window.ttq.track("Search"),window.gtag("event","home_native_ad_click")}))}),[A.current]);var P={resolution:200,iframes:[],interval:null,Iframe:function(){this.element=arguments[0],this.cb=arguments[1],this.hasTracked=!1},track:function(e,t){if(this.iframes.push(new this.Iframe(e,t)),!this.interval){var n=this;this.interval=setInterval((function(){n.checkClick()}),this.resolution)}},checkClick:function(){if(document.activeElement){var e=document.activeElement;for(var t in this.iframes)e===this.iframes[t].element?0==this.iframes[t].hasTracked&&(this.iframes[t].cb.apply(window,[]),this.iframes[t].hasTracked=!0):this.iframes[t].hasTracked=!1}}};return(0,l.jsxs)("div",{className:"gameListBox",children:[(0,l.jsx)(c.tq,{style:{height:250},loop:!0,autoplay:!0,allowTouchMove:!0,autoplayInterval:"3000",indicator:function(e,n){return(0,l.jsx)("div",{className:"customIndicator",children:t.map((function(e,t){return(0,l.jsx)("div",{className:n===t?"customIndicatorItem currentItem":"customIndicatorItem",children:(0,l.jsx)("img",{alt:"",src:"".concat(o.L,"/bannerItems/").concat(e.id,"-small.jpg")})},t)}))})},children:g}),(0,l.jsxs)("div",{className:"floor-game",children:[(0,l.jsx)("div",{className:"block-gradient"}),(0,l.jsxs)("div",{className:"block-recomended",children:[(0,l.jsx)("div",{className:"title",children:" Editor's Picks"}),(0,l.jsxs)("div",{className:"gamePart",children:[(0,l.jsx)("div",{className:"top",children:n.slice(0,4).map((function(e,t){return(0,l.jsx)("img",{alt:"11",onClick:function(){return B(e,"recommendedGames")},className:"gameImg",src:"".concat(o.L,"/recommendedGames/").concat(e.id,".jpg")},t)}))}),(0,l.jsxs)("div",{className:"bottom",children:[(0,l.jsx)("img",{alt:"11",onClick:function(){return B(n[4],"recommendedGames")},className:"gameImg bigImg",src:"".concat(o.L,"/recommendedGames/").concat(n[4].id,".jpg")}),(0,l.jsx)("div",{className:"right",children:n.slice(5).map((function(e,t){return(0,l.jsx)("img",{alt:"11",onClick:function(){return B(e,"recommendedGames")},className:"gameImg",src:"".concat(o.L,"/recommendedGames/").concat(e.id,".jpg")},t)}))})]})]})]}),1===Number(I)&&(0,l.jsxs)("div",{className:"ggpart",ref:A,children:[window.location.hostname.split(".").slice(-2).join(".").indexOf("hotfreegaming.com")>-1&&(0,l.jsx)("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-9569142697355861","data-ad-slot":"2475033521","data-ad-format":"auto","data-full-width-responsive":"true"}),-1===window.location.hostname.split(".").slice(-2).join(".").indexOf("hotfreegaming.com")&&(0,l.jsx)("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-6659704105417760","data-ad-slot":"2344742486","data-full-width-responsive":"true"})]}),(0,l.jsx)(s.Z,{title:"Hot Games",imgUrl:"otherGames",gamelist:window.Games.otherGames,goDetailPage:B})]}),(0,l.jsx)(r.Z,{})]})}},84:function(e,t,n){n.d(t,{L:function(){return c},a:function(){return s}});var a=n(9271),i=n(8352),c="https://d3cdeza28ixtol.cloudfront.net",s=function(){var e=(0,a.TH)().search;return i.Z.parse(e)}}}]);