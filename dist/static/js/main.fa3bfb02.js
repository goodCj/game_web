!function(){"use strict";var e,t,n,r={6501:function(e,t,n){var r=n(2791),o=n(1250),i=(0,r.lazy)((function(){return Promise.all([n.e(310),n.e(673),n.e(333)]).then(n.bind(n,2315))})),u=[{path:"/",component:i},{path:"/detail",component:(0,r.lazy)((function(){return Promise.all([n.e(310),n.e(673),n.e(425)]).then(n.bind(n,5127))}))},{path:"/game",component:(0,r.lazy)((function(){return Promise.all([n.e(310),n.e(53)]).then(n.bind(n,9683))}))},{path:"/privacy",component:i},{path:"/termofuse",component:(0,r.lazy)((function(){return Promise.all([n.e(310),n.e(494),n.e(229)]).then(n.bind(n,1859))}))}],a=n(1523),c=n(9271),f=n(184),l=function(){return(0,f.jsx)(a.VK,{children:(0,f.jsx)(c.rs,{children:(0,f.jsx)(r.Suspense,{fallback:"",children:u.map((function(e){return(0,f.jsx)(c.AW,{exact:!0,path:e.path,component:e.component},String(e.path))}))})})})};n(6084),o.createRoot(document.getElementById("root")).render((0,f.jsx)(l,{}))}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=r,e=[],i.O=function(t,n,r,o){if(!n){var u=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||u>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<u&&(u=o));if(a){e.splice(l--,1);var f=r();void 0!==f&&(t=f)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"static/js/"+e+"."+{53:"63145935",229:"1fcb1f1b",310:"cc0b8a57",333:"2529d829",425:"ffda163c",494:"9a81e98d",673:"e35e210a",682:"daf37508"}[e]+".chunk.js"},i.miniCssF=function(e){return"static/css/"+e+"."+{53:"9e4199d3",229:"3d145764",333:"c0aecd87",425:"5bda2de0",682:"3d145764"}[e]+".chunk.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="game:",i.l=function(e,r,o,u){if(t[e])t[e].push(r);else{var a,c;if(void 0!==o)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",n+o),a.src=e),t[e]=[r];var s=function(n,r){a.onerror=a.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.p="./",function(){if("undefined"!=typeof document){var e={179:0};i.f.miniCss=function(t,n){e[t]?n.push(e[t]):0!==e[t]&&{53:1,229:1,333:1,425:1,682:1}[t]&&n.push(e[t]=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(u=n[r]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===e||o===t))return u}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var u;if((o=(u=i[r]).getAttribute("data-href"))===e||o===t)return u}}(r,o))return t();!function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode.removeChild(i),o(c)}},i.href=t,document.head.appendChild(i)}(e,o,0,t,n)}))}(t).then((function(){e[t]=0}),(function(n){throw delete e[t],n})))}}}(),function(){var e={179:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var u=i.p+i.u(t),a=new Error;i.l(u,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",a.name="ChunkLoadError",a.type=o,a.request=u,r[1](a)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,u=n[0],a=n[1],c=n[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(c)var l=c(i)}for(t&&t(n);f<u.length;f++)o=u[f],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},n=self.webpackChunkgame=self.webpackChunkgame||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var u=i.O(void 0,[825],(function(){return i(6501)}));u=i.O(u)}();