"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[315],{6088:function(e,t,n){var a=n(184);t.Z=function(){var e=function(e){window.location.href=1===e?"/aboutus":2===e?"/termofuse":"/privacy"};return(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsx)("span",{onClick:function(){return e(1)},children:"About Us"})," |"," ",(0,a.jsx)("span",{onClick:function(){return e(2)},children:" Trems of Use"})," |"," ",(0,a.jsx)("span",{onClick:function(){return e(3)},children:"Privacy Policy"})]})}},395:function(e,t,n){var a=n(885),i=(n(870),n(763),n(2791)),c=n(84),s=n(184);t.Z=function(e){var t=e.goDetailPage,n=e.title,o=e.gamelist,r=e.imgUrl,l=(0,i.useState)(!0),m=(0,a.Z)(l,2);return m[0],m[1],(0,i.useEffect)((function(){Array.from(document.getElementsByClassName("adsbygoogle-noablate")).forEach((function(e){e.getAttribute("data-vignette-loaded")&&!e.getAttribute("aria-hidden")&&(window.ttq.track("AddToWishlist"),window.gtag("event","insert_impresion"))}))}),[]),(0,s.jsxs)("div",{className:"block-categories",children:[(0,s.jsx)("div",{className:"title",children:n}),(0,s.jsx)("div",{className:"block-categories-games",children:o.map((function(e){return(0,s.jsx)("img",{alt:"game",onClick:function(){window.gtag("event","recommend_click"),t(e,"otherGames")},className:"gameImg",src:"".concat(c.L,"/").concat(r,"/").concat(e.id,".jpg")})}))})]})}},2315:function(e,t,n){n.r(t);var a=n(885),i=n(2791),c=n(870),s=n(395),o=n(84),r=n(6088),l=n(184),m=null;t.default=function(){var e=window.Games,t=e.bannerItems,n=e.recommendedGames,d=(0,i.useState)([]),u=(0,a.Z)(d,2),g=u[0],f=u[1],h=(0,i.useState)(!1),v=(0,a.Z)(h,2),w=(v[0],v[1],(0,i.useRef)(),(0,i.useState)()),p=(0,a.Z)(w,2),k=p[0],j=p[1],x=(0,o.a)(),b=x.cam,N=void 0===b?null:b,y=x.home,I=void 0===y?null:y,_=x.more,G=void 0===_?null:_;(0,i.useEffect)((function(){Array.from(document.getElementsByClassName("adsbygoogle-noablate")).forEach((function(e){e.getAttribute("data-vignette-loaded")&&!e.getAttribute("aria-hidden")&&(window.ttq.track("AddToWishlist"),window.gtag("event","insert_impresion"))}))}),[]),(0,i.useEffect)((function(){!function(){window.gtag("event","home_load_start");var e=t.map((function(e,t){return(0,l.jsx)(c.tq.Item,{onClick:function(){return C(e,"bannerItems")},children:(0,l.jsx)("div",{children:(0,l.jsx)("img",{alt:"11",className:"swiperImage",src:"".concat(o.L,"/bannerItems/").concat(e.id,".jpg")})})},e.id)}));f(e),m=setTimeout((function(){1===Number(G)&&(window.gtag("event","game_icon_click"),E())}),1e4)}(),1===Number(I)&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]);var C=function(e,t){window.gtag("event","game_icon_user_click"),window.gtag("event","game_icon_click"),j({id:e.id,type:t}),E(e.id,t)},E=function(e,t){window.ttq.track("ClickButton"),e&&t||(k&&k.id?(e=k.id,t=k.type):(e=window.Games.otherGames[0].id,t="otherGames")),clearTimeout(m),window.location.href="https://play.hpip.work/detail?id=".concat(e,"&type=").concat(t,"&cam=").concat(N,"&home=").concat(I,"&more=").concat(G)},T=(0,i.useRef)(null);(0,i.useEffect)((function(){document.getElementById("aswift_1")&&A.track(document.getElementById("aswift_1"),(function(){window.ttq.track("Search"),window.gtag("event","home_native_ad_click")}))}),[T.current]);var A={resolution:200,iframes:[],interval:null,Iframe:function(){this.element=arguments[0],this.cb=arguments[1],this.hasTracked=!1},track:function(e,t){if(this.iframes.push(new this.Iframe(e,t)),!this.interval){var n=this;this.interval=setInterval((function(){n.checkClick()}),this.resolution)}},checkClick:function(){if(document.activeElement){var e=document.activeElement;for(var t in this.iframes)e===this.iframes[t].element?0==this.iframes[t].hasTracked&&(this.iframes[t].cb.apply(window,[]),this.iframes[t].hasTracked=!0):this.iframes[t].hasTracked=!1}}};return(0,l.jsxs)("div",{className:"gameListBox",children:[(0,l.jsx)(c.tq,{style:{height:250},loop:!0,autoplay:!0,allowTouchMove:!0,autoplayInterval:"3000",indicator:function(e,n){return(0,l.jsx)("div",{className:"customIndicator",children:t.map((function(e,t){return(0,l.jsx)("div",{className:n===t?"customIndicatorItem currentItem":"customIndicatorItem",children:(0,l.jsx)("img",{alt:"",src:"".concat(o.L,"/bannerItems/").concat(e.id,"-small.jpg")})},t)}))})},children:g}),(0,l.jsxs)("div",{className:"floor-game",children:[(0,l.jsx)("div",{className:"block-gradient"}),(0,l.jsxs)("div",{className:"block-recomended",children:[(0,l.jsx)("div",{className:"title",children:" Editor's Picks"}),(0,l.jsxs)("div",{className:"gamePart",children:[(0,l.jsx)("div",{className:"top",children:n.slice(0,4).map((function(e,t){return(0,l.jsx)("img",{alt:"11",onClick:function(){return C(e,"recommendedGames")},className:"gameImg",src:"".concat(o.L,"/recommendedGames/").concat(e.id,".jpg")},t)}))}),(0,l.jsxs)("div",{className:"bottom",children:[(0,l.jsx)("img",{alt:"11",onClick:function(){return C(n[4],"recommendedGames")},className:"gameImg bigImg",src:"".concat(o.L,"/recommendedGames/").concat(n[4].id,".jpg")}),(0,l.jsx)("div",{className:"right",children:n.slice(5).map((function(e,t){return(0,l.jsx)("img",{alt:"11",onClick:function(){return C(e,"recommendedGames")},className:"gameImg",src:"".concat(o.L,"/recommendedGames/").concat(e.id,".jpg")},t)}))})]})]})]}),1===Number(I)&&(0,l.jsx)("div",{className:"ggpart",ref:T,children:(0,l.jsx)("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-6659704105417760","data-ad-slot":"2344742486","data-full-width-responsive":"true"})}),(0,l.jsx)(s.Z,{title:"Hot Games",imgUrl:"otherGames",gamelist:window.Games.otherGames,goDetailPage:C})]}),(0,l.jsx)(r.Z,{})]})}},84:function(e,t,n){n.d(t,{L:function(){return c},a:function(){return s}});var a=n(9271),i=n(8352),c="https://d3cdeza28ixtol.cloudfront.net",s=function(){var e=(0,a.TH)().search;return i.Z.parse(e)}}}]);