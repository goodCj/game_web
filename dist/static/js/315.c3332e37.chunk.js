"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[315],{6088:function(e,t,n){var a=n(184);t.Z=function(){var e=function(e){window.location.href=1===e?"/aboutus":2===e?"/termofuse":"/privacy"};return(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsx)("span",{onClick:function(){return e(1)},children:"About Us"})," |"," ",(0,a.jsx)("span",{onClick:function(){return e(2)},children:" Trems of Use"})," |"," ",(0,a.jsx)("span",{onClick:function(){return e(3)},children:"Privacy Policy"})]})}},395:function(e,t,n){var a=n(4165),c=n(5861),o=n(885),i=n(9310),s=(n(763),n(2791)),r=n(84),l=n(4289),d=n(184);t.Z=function(e){var t=(0,r.a)(),n=t.cam,m=void 0===n?null:n,u=t.home,h=void 0===u?null:u,f=t.more,g=void 0===f?null:f,w=t.clean,p=void 0===w?null:w,v=(t.scroll,e.goDetailPage),j=e.title,x=(e.gamelist,e.imgUrl),k=(0,s.useState)([]),b=(0,o.Z)(k,2),y=b[0],N=b[1],_=(0,s.useState)(!0),I=(0,o.Z)(_,2),G=I[0],E=I[1],C=(0,s.useState)(1),Z=(0,o.Z)(C,2),L=Z[0],T=Z[1];(0,s.useEffect)((function(){Array.from(document.getElementsByClassName("adsbygoogle-noablate")).forEach((function(e){e.getAttribute("data-vignette-loaded")&&!e.getAttribute("aria-hidden")&&(window.ttq.track("AddToWishlist"),window.gtag("event","insert_impresion"))}))}),[]);var A=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(L>10)){e.next=2;break}return e.abrupt("return");case 2:return a=void 0,(a=document.createElement("script")).src="".concat(r.L,"/moreGames/game").concat(L,".js"),a.async=!0,document.head.appendChild(a),e.next=5,(0,l._)(2e3);case 5:t=window.Games.moreGames,N(t),T(n=L+1),E(n<=10);case 10:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(e){var t=e.hasMore;return(0,d.jsx)(d.Fragment,{children:t?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:"Loading"}),(0,d.jsx)(i.k_,{})]}):(0,d.jsx)("span",{children:"--- end ---"})})};return(0,d.jsxs)("div",{className:"block-categories",children:[(0,d.jsx)("div",{className:"title",children:j}),(0,d.jsxs)("div",{className:"block-categories-games",children:[y.map((function(e){var t,n,a,c=(t=e.id,a="",(n=window.location.origin).indexOf("home.")>-1?a="https://".concat(window.location.hostname.split(".").slice(-2).join(".")):n.indexOf("play.")>-1?a="https://home.".concat(window.location.hostname.split(".").slice(-2).join(".")):n.indexOf("https://".concat(window.location.hostname.split(".").slice(-2).join(".")))>-1&&(a="https://play.".concat(window.location.hostname.split(".").slice(-2).join("."))),"".concat(a,"/detail?id=").concat(t,"&type=otherGames&cam=").concat(m,"&home=").concat(h,"&more=").concat(g,"&clean=").concat(p));return(0,d.jsx)("a",{onClick:function(){window.gtag("event","recommend_click"),v(e,"otherGames")},href:c,children:(0,d.jsx)("img",{alt:"game",className:"gameImg",src:"".concat(r.L,"/").concat(x,"/").concat(e.id,".jpg")})})})),(0,d.jsx)(i.v_,{loadMore:A,hasMore:G,children:(0,d.jsx)(B,{hasMore:G})})]})]})}},2315:function(e,t,n){n.r(t);var a=n(885),c=n(2791),o=n(9310),i=n(395),s=n(84),r=n(6088),l=n(184),d=null;t.default=function(){var e=window.Games,t=e.bannerItems,n=e.recommendedGames,m=(0,c.useState)([]),u=(0,a.Z)(m,2),h=u[0],f=u[1],g=(0,c.useState)(!1),w=(0,a.Z)(g,2),p=(w[0],w[1],(0,c.useRef)(),(0,c.useState)()),v=(0,a.Z)(p,2),j=(v[0],v[1],(0,s.a)()),x=j.cam,k=void 0===x?null:x,b=j.home,y=void 0===b?null:b,N=j.more,_=void 0===N?null:N,I=j.clean,G=void 0===I?null:I,E=j.scroll,C=void 0===E?null:E,Z=(0,c.useRef)(null);(0,c.useEffect)((function(){Array.from(document.getElementsByClassName("adsbygoogle-noablate")).forEach((function(e){e.getAttribute("data-vignette-loaded")&&!e.getAttribute("aria-hidden")&&(window.ttq.track("AddToWishlist"),window.gtag("event","insert_impresion"))}))}),[]),(0,c.useEffect)((function(){return 1===Number(G)&&localStorage.removeItem("__lsv__"),function(){window.gtag("event","home_load_start");var e=t.map((function(e,t){return(0,l.jsx)(o.tq.Item,{children:(0,l.jsx)("div",{children:(0,l.jsx)("a",{onClick:T,href:"https://play.".concat(window.location.hostname.split(".").slice(-2).join("."),"/detail?id=").concat(e.id,"&type=bannerItems&cam=").concat(k,"&home=").concat(y,"&more=").concat(_,"&clean=").concat(G),children:(0,l.jsx)("img",{alt:"11",className:"swiperImage",src:"".concat(s.L,"/bannerItems/").concat(e.id,".jpg")})})})},e.id)}));f(e),d=setTimeout((function(){1===Number(_)&&(window.gtag("event","game_icon_click"),A())}),1e4)}(),1===Number(y)&&(window.adsbygoogle=window.adsbygoogle||[]).push({}),1===Number(C)&&window.addEventListener("scroll",L,!0),window.gtag("event","home_load_finish"),function(){window.removeEventListener("scroll",L)}}),[]);var L=function(){(document.getElementById("aswift_1")||Z.current)&&Z.current.dispatchEvent(new MouseEvent("click",{bubbles:!0}))},T=function(){window.gtag("event","game_icon_click"),window.gtag("event","game_icon_user_click"),window.ttq.track("ClickButton")},A=function(e,t){window.ttq.track("ClickButton"),e=window.Games.otherGames[0].id,clearTimeout(d),window.location.href="https://play.".concat(window.location.hostname.split(".").slice(-2).join("."),"/detail?id=").concat(e,"&type=").concat("otherGames","&cam=").concat(k,"&home=").concat(y,"&more=").concat(_,"&clean=").concat(G)};(0,c.useEffect)((function(){document.getElementById("aswift_1")&&B.track(document.getElementById("aswift_1"),(function(){window.ttq.track("Search"),window.gtag("event","home_native_ad_click")}))}),[Z.current]);var B={resolution:200,iframes:[],interval:null,Iframe:function(){this.element=arguments[0],this.cb=arguments[1],this.hasTracked=!1},track:function(e,t){if(this.iframes.push(new this.Iframe(e,t)),!this.interval){var n=this;this.interval=setInterval((function(){n.checkClick()}),this.resolution)}},checkClick:function(){if(document.activeElement){var e=document.activeElement;for(var t in this.iframes)e===this.iframes[t].element?0==this.iframes[t].hasTracked&&(this.iframes[t].cb.apply(window,[]),this.iframes[t].hasTracked=!0):this.iframes[t].hasTracked=!1}}};return(0,l.jsxs)("div",{className:"gameListBox",children:[(0,l.jsx)(o.tq,{style:{height:250},loop:!0,autoplay:!0,allowTouchMove:!0,autoplayInterval:"3000",indicator:function(e,n){return(0,l.jsx)("div",{className:"customIndicator",children:t.map((function(e,t){return(0,l.jsx)("div",{className:n===t?"customIndicatorItem currentItem":"customIndicatorItem",children:(0,l.jsx)("img",{alt:"",src:"".concat(s.L,"/bannerItems/").concat(e.id,"-small.jpg")})},t)}))})},children:h}),(0,l.jsxs)("div",{className:"floor-game",children:[(0,l.jsx)("div",{className:"block-gradient"}),(0,l.jsxs)("div",{className:"block-recomended",children:[(0,l.jsx)("div",{className:"title",children:" Editor's Picks"}),(0,l.jsxs)("div",{className:"gamePart",children:[(0,l.jsx)("div",{className:"top",children:n.slice(0,4).map((function(e,t){return(0,l.jsx)("a",{onClick:T,className:"gameImg",href:"https://play.".concat(window.location.hostname.split(".").slice(-2).join("."),"/detail?id=").concat(e.id,"&type=recommendedGames&cam=").concat(k,"&home=").concat(y,"&more=").concat(_,"&clean=").concat(G),children:(0,l.jsx)("img",{alt:"11",src:"".concat(s.L,"/recommendedGames/").concat(e.id,".jpg")},t)})}))}),(0,l.jsxs)("div",{className:"bottom",children:[(0,l.jsx)("a",{onClick:T,className:"gameImg  bigImg",href:"https://play.".concat(window.location.hostname.split(".").slice(-2).join("."),"/detail?id=").concat(n[4].id,"&type=recommendedGames&cam=").concat(k,"&home=").concat(y,"&more=").concat(_,"&clean=").concat(G),children:(0,l.jsx)("img",{alt:"11",src:"".concat(s.L,"/recommendedGames/").concat(n[4].id,".jpg")})}),(0,l.jsx)("div",{className:"right",children:n.slice(5).map((function(e,t){return(0,l.jsx)("a",{onClick:T,className:"gameImg",href:"https://play.".concat(window.location.hostname.split(".").slice(-2).join("."),"/detail?id=").concat(e.id,"&type=recommendedGames&cam=").concat(k,"&home=").concat(y,"&more=").concat(_,"&clean=").concat(G),children:(0,l.jsx)("img",{alt:"11",src:"".concat(s.L,"/recommendedGames/").concat(e.id,".jpg")},t)})}))})]})]})]}),1===Number(y)&&(0,l.jsxs)("div",{className:"ggpart",ref:Z,children:[window.location.hostname.split(".").slice(-2).join(".").indexOf("hotfreegaming.com")>-1&&(0,l.jsx)("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-9569142697355861","data-ad-slot":"2475033521","data-ad-format":"auto","data-full-width-responsive":"true"}),-1===window.location.hostname.split(".").slice(-2).join(".").indexOf("hotfreegaming.com")&&(0,l.jsx)("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-6659704105417760","data-ad-slot":"2344742486","data-full-width-responsive":"true"})]}),(0,l.jsx)(i.Z,{title:"Hot Games",imgUrl:"otherGames",gamelist:window.Games.otherGames,goDetailPage:T})]}),(0,l.jsx)(r.Z,{})]})}},84:function(e,t,n){n.d(t,{L:function(){return o},a:function(){return i}});var a=n(9271),c=n(8352),o="https://d3cdeza28ixtol.cloudfront.net",i=function(){var e=(0,a.TH)().search;return c.Z.parse(e)}}}]);