!function(){"use strict";var e,n,t,r={6501:function(e,n,t){var r=t(2791),o=t(1250),i=[{path:"/",component:(0,r.lazy)((function(){return Promise.all([t.e(338),t.e(315)]).then(t.bind(t,2315))}))},{path:"/detail",component:(0,r.lazy)((function(){return Promise.all([t.e(338),t.e(127)]).then(t.bind(t,5127))}))},{path:"/game",component:(0,r.lazy)((function(){return t.e(683).then(t.bind(t,9683))}))},{path:"/privacy",component:(0,r.lazy)((function(){return t.e(129).then(t.bind(t,129))}))},{path:"/termofuse",component:(0,r.lazy)((function(){return t.e(859).then(t.bind(t,1859))}))},{path:"/aboutus",component:(0,r.lazy)((function(){return t.e(238).then(t.bind(t,1238))}))}],a=t(1523),c=t(9271),u=t(184),l=function(){return(0,u.jsx)(a.VK,{children:(0,u.jsx)(c.rs,{children:(0,u.jsx)(r.Suspense,{fallback:"",children:i.map((function(e){return(0,u.jsx)(c.AW,{exact:!0,path:e.path,component:e.component},String(e.path))}))})})})},s=t(687),f=(t(6084),function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Z,{}),(0,u.jsx)(l,{})]})});o.createRoot(document.getElementById("root")).render((0,u.jsx)(f,{}))},687:function(e,n,t){var r=t(9310),o=t(8352),i=t(184);n.Z=function(){var e=o.Z.parse(window.location.search),n=e.cam,t=void 0===n?null:n,a=e.home,c=void 0===a?null:a,u=e.more,l=void 0===u?null:u;return console.log(t),(0,i.jsx)(r.e$,{axis:"xy",magnetic:"x",className:"goHome",style:{"--initial-position-top":"50px","--initial-position-left":"20px","--edge-distance":"10px"},children:(0,i.jsx)(r.zx,{className:"homeBtn",onClick:function(){window.gtag("event","home_button_click"),window.location.href="https://".concat(window.location.hostname.split(".").slice(-2).join("."),"?cam=").concat(t,"&home=").concat(c,"&more=").concat(l)},children:(0,i.jsxs)(r.T,{children:[(0,i.jsx)("svg",{t:"1677682941120",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5590",width:"24",height:"24",children:(0,i.jsx)("path",{d:"M913.706667 512.128c23.552 26.197333 23.893333 60.288 4.48 79.530667-21.034667 20.864-53.973333 18.602667-71.466667 1.834666-17.493333-16.725333-265.301333-279.552-288.128-302.549333-36.053333-36.266667-70.741333-34.133333-104.661333 0-34.133333 34.389333-271.530667 282.88-288.768 297.898667-17.237333 15.104-49.792 18.346667-70.144-1.962667-22.869333-22.869333-19.754667-60.202667-2.048-78.933333 21.461333-22.698667 325.546667-338.133333 343.296-357.376 43.008-46.634667 98.688-45.653333 133.546666-8.192 25.984 27.904 317.013333 339.797333 343.893334 369.749333zM453.418667 375.765333c28.458667-29.696 73.130667-33.664 105.088-0.128 13.781333 14.506667 264.917333 273.706667 264.917333 273.706667v180.138667c-0.085333 27.349333-20.565333 52.992-52.053333 53.376h-160.853334V736.853333c0-20.096-7.125333-31.658667-26.026666-31.488-13.994667 0.128-139.52-0.554667-162.517334-0.384-19.413333 0.128-25.344 15.104-25.429333 31.829334 0 13.397333-0.469333 146.048-0.469333 146.048H239.701333c-32.469333 0.170667-52.992-16.554667-53.205333-47.488-0.085333-15.573333-0.128-187.690667-0.128-187.690667s248.32-252.373333 267.050667-271.914667z",fill:"#ffffff","p-id":"5591"})}),(0,i.jsx)("span",{style:{verticalAlign:"middle"},children:"Home"})]})})})}}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=r,e=[],i.O=function(n,t,r,o){if(!t){var a=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],o=e[s][2];for(var c=!0,u=0;u<t.length;u++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](t[u])}))?t.splice(u--,1):(c=!1,o<a&&(a=o));if(c){e.splice(s--,1);var l=r();void 0!==l&&(n=l)}}return n}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,r,o]},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,{a:n}),n},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(n,t){return i.f[t](e,n),n}),[]))},i.u=function(e){return"static/js/"+e+"."+{127:"a084200b",129:"5d0df408",238:"b9f08c14",315:"7bf861e4",338:"759ee4ed",683:"282fdb49",859:"c2b2b526"}[e]+".chunk.js"},i.miniCssF=function(e){return"static/css/"+e+"."+{127:"d0a3c168",129:"435b7353",238:"b091af61",315:"9912834a",683:"8a2f15bf",859:"435b7353"}[e]+".chunk.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},t="game:",i.l=function(e,r,o,a){if(n[e])n[e].push(r);else{var c,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==t+o){c=f;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",t+o),c.src=e),n[e]=[r];var d=function(t,r){c.onerror=c.onload=null,clearTimeout(h);var o=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.p="./",function(){if("undefined"!=typeof document){var e={179:0};i.f.miniCss=function(n,t){e[n]?t.push(e[n]):0!==e[n]&&{127:1,129:1,238:1,315:1,683:1,859:1}[n]&&t.push(e[n]=function(e){return new Promise((function(n,t){var r=i.miniCssF(e),o=i.p+r;if(function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(a=t[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===n)return a}}(r,o))return n();!function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode.removeChild(i),o(u)}},i.href=n,document.head.appendChild(i)}(e,o,0,n,t)}))}(n).then((function(){e[n]=0}),(function(t){throw delete e[n],t})))}}}(),function(){var e={179:0};i.f.j=function(n,t){var r=i.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var a=i.p+i.u(n),c=new Error;i.l(a,(function(t){if(i.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+n,n)}},i.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,a=t[0],c=t[1],u=t[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(u)var s=u(i)}for(n&&n(t);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(s)},t=self.webpackChunkgame=self.webpackChunkgame||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var a=i.O(void 0,[676],(function(){return i(6501)}));a=i.O(a)}();