"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[315],{6088:function(e,a,s){var n=s(184);a.Z=function(){var e=function(e){window.location.href=1===e?"/aboutus":2===e?"/termofuse":"/privacy"};return(0,n.jsxs)("div",{className:"footer",children:[(0,n.jsx)("span",{onClick:function(){return e(1)},children:"About Us"})," |"," ",(0,n.jsx)("span",{onClick:function(){return e(2)},children:" Trems of Use"})," |"," ",(0,n.jsx)("span",{onClick:function(){return e(3)},children:"Privacy Policy"})]})}},395:function(e,a,s){var n=s(885),t=(s(679),s(763),s(2791)),c=s(84),i=s(184);a.Z=function(e){var a=e.goDetailPage,s=e.title,o=e.gamelist,r=e.imgUrl,l=(0,t.useState)(!0),d=(0,n.Z)(l,2);return d[0],d[1],(0,i.jsxs)("div",{className:"block-categories",children:[(0,i.jsx)("div",{className:"title",children:s}),(0,i.jsx)("div",{className:"block-categories-games",children:o.map((function(e){return(0,i.jsx)("img",{alt:"game",onClick:function(){return a(e,"otherGames")},className:"gameImg",src:"".concat(c.L,"/").concat(r,"/").concat(e.id,".jpg")})}))})]})}},2315:function(e,a,s){s.r(a);var n=s(885),t=s(2791),c=s(679),i=s(9271),o=s(395),r=s(84),l=s(6088),d=s(184);a.default=function(){var e=window.Games,a=e.bannerItems,s=e.recommendedGames,m=(0,t.useState)([]),u=(0,n.Z)(m,2),g=u[0],f=u[1],h=(0,i.k6)(),j=(0,t.useState)(!0),p=(0,n.Z)(j,2),x=p[0],v=p[1];(0,t.useEffect)((function(){var e;e=a.map((function(e,a){return(0,d.jsx)(c.tq.Item,{onClick:function(){return b(e,"bannerItems")},children:(0,d.jsx)("div",{children:(0,d.jsx)("img",{alt:"11",className:"swiperImage",src:"".concat(r.L,"/bannerItems/").concat(e.id,".jpg")})})},e.id)})),f(e),(window.adsbygoogle=window.adsbygoogle||[]).push({}),(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]);var b=function(e,a){h.push({pathname:"/detail",search:"?id=".concat(e.id,"&type=").concat(a)})};return(0,d.jsxs)("div",{className:"gameListBox",children:[(0,d.jsx)(c.u_,{visible:x,style:{},showCloseButton:!0,content:(0,d.jsx)("div",{children:(0,d.jsx)("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-6659704105417760","data-ad-slot":"2164693363","data-ad-format":"auto","data-full-width-responsive":"true"})}),closeOnAction:!0,onClose:function(){v(!1)}}),(0,d.jsx)(c.tq,{style:{height:250},loop:!0,autoplay:!0,allowTouchMove:!0,autoplayInterval:"3000",indicator:function(e,s){return(0,d.jsx)("div",{className:"customIndicator",children:a.map((function(e,a){return(0,d.jsx)("div",{className:s===a?"customIndicatorItem currentItem":"customIndicatorItem",children:(0,d.jsx)("img",{alt:"",src:"".concat(r.L,"/bannerItems/").concat(e.id,"-small.jpg")})},a)}))})},children:g}),(0,d.jsxs)("div",{className:"floor-game",children:[(0,d.jsx)("div",{className:"block-gradient"}),(0,d.jsxs)("div",{className:"block-recomended",children:[(0,d.jsx)("div",{className:"title",children:" Editor's Picks"}),(0,d.jsxs)("div",{className:"gamePart",children:[(0,d.jsx)("div",{className:"top",children:s.slice(0,4).map((function(e,a){return(0,d.jsx)("img",{alt:"11",onClick:function(){return b(e,"recommendedGames")},className:"gameImg",src:"".concat(r.L,"/recommendedGames/").concat(e.id,".jpg")},a)}))}),(0,d.jsxs)("div",{className:"bottom",children:[(0,d.jsx)("img",{alt:"11",onClick:function(){return b(s[4],"recommendedGames")},className:"gameImg bigImg",src:"".concat(r.L,"/recommendedGames/").concat(s[4].id,".jpg")}),(0,d.jsx)("div",{className:"right",children:s.slice(5).map((function(e,a){return(0,d.jsx)("img",{alt:"11",onClick:function(){return b(e,"recommendedGames")},className:"gameImg",src:"".concat(r.L,"/recommendedGames/").concat(e.id,".jpg")},a)}))})]})]})]}),(0,d.jsx)("div",{className:"ggpart",children:(0,d.jsx)("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-6659704105417760","data-ad-slot":"2344742486","data-ad-format":"auto","data-full-width-responsive":"true"})}),(0,d.jsx)(o.Z,{title:"Hot Games",imgUrl:"otherGames",gamelist:window.Games.otherGames,goDetailPage:b})]}),(0,d.jsx)(l.Z,{})]})}},84:function(e,a,s){s.d(a,{L:function(){return c},a:function(){return i}});var n=s(9271),t=s(8352),c="https://d3cdeza28ixtol.cloudfront.net",i=function(){var e=(0,n.TH)().search;return t.Z.parse(e)}}}]);