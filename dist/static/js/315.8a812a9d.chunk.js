"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[315],{6088:function(e,n,a){var s=a(184);n.Z=function(){var e=function(e){window.location.href=1===e?"/aboutus":2===e?"/termofuse":"/privacy"};return(0,s.jsxs)("div",{className:"footer",children:[(0,s.jsx)("span",{onClick:function(){return e(1)},children:"About Us"})," |"," ",(0,s.jsx)("span",{onClick:function(){return e(2)},children:" Trems of Use"})," |"," ",(0,s.jsx)("span",{onClick:function(){return e(3)},children:"Privacy Policy"})]})}},395:function(e,n,a){var s=a(885),t=(a(679),a(763),a(2791)),c=a(84),i=a(184);n.Z=function(e){var n=e.goDetailPage,a=e.title,o=e.gamelist,r=e.imgUrl,l=(0,t.useState)(!0),d=(0,s.Z)(l,2);return d[0],d[1],(0,i.jsxs)("div",{className:"block-categories",children:[(0,i.jsx)("div",{className:"title",children:a}),(0,i.jsx)("div",{className:"block-categories-games",children:o.map((function(e){return(0,i.jsx)("img",{alt:"game",onClick:function(){return n(e,"otherGames")},className:"gameImg",src:"".concat(c.L,"/").concat(r,"/").concat(e.id,".jpg")})}))})]})}},2315:function(e,n,a){a.r(n);var s=a(885),t=a(2791),c=a(679),i=a(9271),o=a(395),r=a(84),l=a(6088),d=a(184);n.default=function(){var e=window.Games,n=e.bannerItems,a=e.recommendedGames,m=(0,t.useState)([]),u=(0,s.Z)(m,2),g=u[0],f=u[1],h=(0,i.k6)(),p=(0,t.useState)(!0),j=(0,s.Z)(p,2),v=j[0],x=j[1];(0,t.useEffect)((function(){var e;e=n.map((function(e,n){return(0,d.jsx)(c.tq.Item,{onClick:function(){return b(e,"bannerItems")},children:(0,d.jsx)("div",{children:(0,d.jsx)("img",{alt:"11",className:"swiperImage",src:"".concat(r.L,"/bannerItems/").concat(e.id,".jpg")})})},e.id)})),f(e)}),[]);var b=function(e,n){h.push({pathname:"/detail",search:"?id=".concat(e.id,"&type=").concat(n)})};return(0,d.jsxs)("div",{className:"gameListBox",children:[(0,d.jsx)(c.u_,{visible:v,style:{},showCloseButton:!0,content:(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:'<ins\n    class="adsbygoogle"\n    style="display:block"\n    data-ad-client="ca-pub-6659704105417760"\n    data-ad-slot="2164693363"\n    data-ad-format="auto"\n    data-full-width-responsive="true"\n  ></ins>\n          <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>'}}),closeOnAction:!0,onClose:function(){x(!1)}}),(0,d.jsx)(c.tq,{style:{height:250},loop:!0,autoplay:!0,allowTouchMove:!0,autoplayInterval:"3000",indicator:function(e,a){return(0,d.jsx)("div",{className:"customIndicator",children:n.map((function(e,n){return(0,d.jsx)("div",{className:a===n?"customIndicatorItem currentItem":"customIndicatorItem",children:(0,d.jsx)("img",{alt:"",src:"".concat(r.L,"/bannerItems/").concat(e.id,"-small.jpg")})},n)}))})},children:g}),(0,d.jsxs)("div",{className:"floor-game",children:[(0,d.jsx)("div",{className:"block-gradient"}),(0,d.jsxs)("div",{className:"block-recomended",children:[(0,d.jsx)("div",{className:"title",children:" Editor's Picks"}),(0,d.jsxs)("div",{className:"gamePart",children:[(0,d.jsx)("div",{className:"top",children:a.slice(0,4).map((function(e,n){return(0,d.jsx)("img",{alt:"11",onClick:function(){return b(e,"recommendedGames")},className:"gameImg",src:"".concat(r.L,"/recommendedGames/").concat(e.id,".jpg")},n)}))}),(0,d.jsxs)("div",{className:"bottom",children:[(0,d.jsx)("img",{alt:"11",onClick:function(){return b(a[4],"recommendedGames")},className:"gameImg bigImg",src:"".concat(r.L,"/recommendedGames/").concat(a[4].id,".jpg")}),(0,d.jsx)("div",{className:"right",children:a.slice(5).map((function(e,n){return(0,d.jsx)("img",{alt:"11",onClick:function(){return b(e,"recommendedGames")},className:"gameImg",src:"".concat(r.L,"/recommendedGames/").concat(e.id,".jpg")},n)}))})]})]})]}),(0,d.jsx)("div",{className:"ggpart",dangerouslySetInnerHTML:{__html:'<ins\n    class="adsbygoogle"\n    style="display:block"\n    data-ad-client="ca-pub-6659704105417760"\n    data-ad-slot="2344742486"\n    data-ad-format="auto"\n    data-full-width-responsive="true"\n  ></ins>\n          <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>'}}),(0,d.jsx)(o.Z,{title:"Hot Games",imgUrl:"otherGames",gamelist:window.Games.otherGames,goDetailPage:b})]}),(0,d.jsx)(l.Z,{})]})}},84:function(e,n,a){a.d(n,{L:function(){return c},a:function(){return i}});var s=a(9271),t=a(8352),c="https://d3cdeza28ixtol.cloudfront.net",i=function(){var e=(0,s.TH)().search;return t.Z.parse(e)}}}]);