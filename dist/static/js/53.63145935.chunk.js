"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[53],{687:function(r,e,t){var n=t(9310),o=t(9271),a=t(184);e.Z=function(){var r=(0,o.k6)();return(0,a.jsx)(n.e$,{axis:"xy",magnetic:"x",className:"goHome",style:{"--initial-position-top":"50px","--initial-position-left":"20px","--edge-distance":"10px"},children:(0,a.jsx)(n.zx,{className:"homeBtn",onClick:function(){r.push({pathname:"/"})},children:(0,a.jsxs)(n.T,{children:[(0,a.jsx)("svg",{t:"1677682941120",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5590",width:"24",height:"24",children:(0,a.jsx)("path",{d:"M913.706667 512.128c23.552 26.197333 23.893333 60.288 4.48 79.530667-21.034667 20.864-53.973333 18.602667-71.466667 1.834666-17.493333-16.725333-265.301333-279.552-288.128-302.549333-36.053333-36.266667-70.741333-34.133333-104.661333 0-34.133333 34.389333-271.530667 282.88-288.768 297.898667-17.237333 15.104-49.792 18.346667-70.144-1.962667-22.869333-22.869333-19.754667-60.202667-2.048-78.933333 21.461333-22.698667 325.546667-338.133333 343.296-357.376 43.008-46.634667 98.688-45.653333 133.546666-8.192 25.984 27.904 317.013333 339.797333 343.893334 369.749333zM453.418667 375.765333c28.458667-29.696 73.130667-33.664 105.088-0.128 13.781333 14.506667 264.917333 273.706667 264.917333 273.706667v180.138667c-0.085333 27.349333-20.565333 52.992-52.053333 53.376h-160.853334V736.853333c0-20.096-7.125333-31.658667-26.026666-31.488-13.994667 0.128-139.52-0.554667-162.517334-0.384-19.413333 0.128-25.344 15.104-25.429333 31.829334 0 13.397333-0.469333 146.048-0.469333 146.048H239.701333c-32.469333 0.170667-52.992-16.554667-53.205333-47.488-0.085333-15.573333-0.128-187.690667-0.128-187.690667s248.32-252.373333 267.050667-271.914667z",fill:"#ffffff","p-id":"5591"})}),(0,a.jsx)("span",{style:{verticalAlign:"middle"},children:"Home"})]})})})}},9683:function(r,e,t){t.r(e);var n=t(9271),o=t(687),a=t(84),i=t(184);e.default=function(){var r=(0,n.k6)(),e=(0,a.a)().url;return e||r.push({pathname:"/"}),(0,i.jsxs)("div",{className:"playBox",children:[(0,i.jsx)(o.Z,{}),(0,i.jsx)("iframe",{title:"游戏盒子",src:e,height:"100%",width:"100%",scrolling:"none",frameborder:"0"})]})}},84:function(r,e,t){t.d(e,{L:function(){return a},a:function(){return i}});var n=t(9271),o=t(8352),a="https://d3cdeza28ixtol.cloudfront.net",i=function(){var r=(0,n.TH)().search;return o.Z.parse(r)}},8352:function(r,e,t){t.d(e,{Z:function(){return P}});var n={};t.r(n),t.d(n,{exclude:function(){return A},extract:function(){return Z},parse:function(){return S},parseUrl:function(){return N},pick:function(){return C},stringify:function(){return E},stringifyUrl:function(){return I}});var o=t(4942),a=t(885),i=t(7762);function c(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function u(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,o.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var s=t(2982),l="%[a-f0-9]{2}",f=new RegExp("("+l+")|([^%]+?)","gi"),p=new RegExp("("+l+")+","gi");function d(r,e){try{return[decodeURIComponent(r.join(""))]}catch(r){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],d(t),d(n))}function y(r){try{return decodeURIComponent(r)}catch(n){for(var e=r.match(f)||[],t=1;t<e.length;t++)e=(r=d(e,t).join("")).match(f)||[];return r}}function v(r,e){if("string"!=typeof r||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===r||""===e)return[];var t=r.indexOf(e);return-1===t?[]:[r.slice(0,t),r.slice(t+e.length)]}function m(r,e){var t={};if(Array.isArray(e)){var n,o=(0,i.Z)(e);try{for(o.s();!(n=o.n()).done;){var a=n.value,c=Object.getOwnPropertyDescriptor(r,a);null!=c&&c.enumerable&&Object.defineProperty(t,a,c)}}catch(r){o.e(r)}finally{o.f()}}else{var u,s=(0,i.Z)(Reflect.ownKeys(r));try{for(s.s();!(u=s.n()).done;){var l=u.value,f=Object.getOwnPropertyDescriptor(r,l);f.enumerable&&e(l,r[l],r)&&Object.defineProperty(t,l,f)}}catch(r){s.e(r)}finally{s.f()}}return t}var g=function(r){return null==r},h=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))},b=Symbol("encodeFragmentIdentifier");function j(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function x(r,e){return e.encode?e.strict?h(r):encodeURIComponent(r):r}function O(r,e){return e.decode?function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return decodeURIComponent(r)}catch(e){return function(r){for(var e={"%FE%FF":"��","%FF%FE":"��"},t=p.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(r){var n=y(t[0]);n!==t[0]&&(e[t[0]]=n)}t=p.exec(r)}e["%C2"]="�";for(var o=0,a=Object.keys(e);o<a.length;o++){var i=a[o];r=r.replace(new RegExp(i,"g"),e[i])}return r}(r)}}(r):r}function k(r){return Array.isArray(r)?r.sort():"object"==typeof r?k(Object.keys(r)).sort((function(r,e){return Number(r)-Number(e)})).map((function(e){return r[e]})):r}function w(r){var e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function F(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function Z(r){var e=(r=w(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function S(r,e){j((e=u({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var t=function(r){var e;switch(r.arrayFormat){case"index":return function(r,t,n){e=/\[(\d*)]$/.exec(r),r=r.replace(/\[\d*]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return function(r,t,n){e=/(\[])$/.exec(r),r=r.replace(/\[]$/,""),e?void 0!==n[r]?n[r]=[].concat((0,s.Z)(n[r]),[t]):n[r]=[t]:n[r]=t};case"colon-list-separator":return function(r,t,n){e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat((0,s.Z)(n[r]),[t]):n[r]=[t]:n[r]=t};case"comma":case"separator":return function(e,t,n){var o="string"==typeof t&&t.includes(r.arrayFormatSeparator),a="string"==typeof t&&!o&&O(t,r).includes(r.arrayFormatSeparator);t=a?O(t,r):t;var i=o||a?t.split(r.arrayFormatSeparator).map((function(e){return O(e,r)})):null===t?t:O(t,r);n[e]=i};case"bracket-separator":return function(e,t,n){var o=/(\[])$/.test(e);if(e=e.replace(/\[]$/,""),o){var a=null===t?[]:t.split(r.arrayFormatSeparator).map((function(e){return O(e,r)}));void 0!==n[e]?n[e]=[].concat((0,s.Z)(n[e]),(0,s.Z)(a)):n[e]=a}else n[e]=t?O(t,r):t};default:return function(r,e,t){void 0!==t[r]?t[r]=[].concat((0,s.Z)([t[r]].flat()),[e]):t[r]=e}}}(e),n=Object.create(null);if("string"!=typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;var o,c=(0,i.Z)(r.split("&"));try{for(c.s();!(o=c.n()).done;){var l=o.value;if(""!==l){var f=e.decode?l.replace(/\+/g," "):l,p=v(f,"="),d=(0,a.Z)(p,2),y=d[0],m=d[1];void 0===y&&(y=f),m=void 0===m?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?m:O(m,e),t(O(y,e),m,n)}}}catch(r){c.e(r)}finally{c.f()}for(var g=0,h=Object.entries(n);g<h.length;g++){var b=(0,a.Z)(h[g],2),x=b[0],w=b[1];if("object"==typeof w&&null!==w)for(var Z=0,S=Object.entries(w);Z<S.length;Z++){var E=(0,a.Z)(S[Z],2),N=E[0],I=E[1];w[N]=F(I,e)}else n[x]=F(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(r,e){var t=n[e];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?r[e]=k(t):r[e]=t,r}),Object.create(null))}function E(r,e){if(!r)return"";j((e=u({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var t=function(t){return e.skipNull&&g(r[t])||e.skipEmptyString&&""===r[t]},n=function(r){switch(r.arrayFormat){case"index":return function(e){return function(t,n){var o=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat((0,s.Z)(t),null===n?[[x(e,r),"[",o,"]"].join("")]:[[x(e,r),"[",x(o,r),"]=",x(n,r)].join("")])}};case"bracket":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat((0,s.Z)(t),null===n?[[x(e,r),"[]"].join("")]:[[x(e,r),"[]=",x(n,r)].join("")])}};case"colon-list-separator":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat((0,s.Z)(t),null===n?[[x(e,r),":list="].join("")]:[[x(e,r),":list=",x(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===r.arrayFormat?"[]=":"=";return function(t){return function(n,o){return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[x(t,r),e,x(o,r)].join("")]:[[n,x(o,r)].join(r.arrayFormatSeparator)])}};default:return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat((0,s.Z)(t),null===n?[x(e,r)]:[[x(e,r),"=",x(n,r)].join("")])}}}}(e),o={},i=0,c=Object.entries(r);i<c.length;i++){var l=(0,a.Z)(c[i],2),f=l[0],p=l[1];t(f)||(o[f]=p)}var d=Object.keys(o);return!1!==e.sort&&d.sort(e.sort),d.map((function(t){var o=r[t];return void 0===o?"":null===o?x(t,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?x(t,e)+"[]":o.reduce(n(t),[]).join("&"):x(t,e)+"="+x(o,e)})).filter((function(r){return r.length>0})).join("&")}function N(r,e){var t,n,o;e=u({decode:!0},e);var i=v(r,"#"),c=(0,a.Z)(i,2),s=c[0],l=c[1];return void 0===s&&(s=r),u({url:null!==(t=null===(n=s)||void 0===n||null===(o=n.split("?"))||void 0===o?void 0:o[0])&&void 0!==t?t:"",query:S(Z(r),e)},e&&e.parseFragmentIdentifier&&l?{fragmentIdentifier:O(l,e)}:{})}function I(r,e){e=u((0,o.Z)({encode:!0,strict:!0},b,!0),e);var t=w(r.url).split("?")[0]||"",n=E(u(u({},S(Z(r.url),{sort:!1})),r.query),e);n&&(n="?".concat(n));var a=function(r){var e="",t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);if(r.fragmentIdentifier){var i=new URL(t);i.hash=r.fragmentIdentifier,a=e[b]?i.hash:"#".concat(r.fragmentIdentifier)}return"".concat(t).concat(n).concat(a)}function C(r,e,t){var n=N(r,t=u((0,o.Z)({parseFragmentIdentifier:!0},b,!1),t)),a=n.url,i=n.query,c=n.fragmentIdentifier;return I({url:a,query:m(i,e),fragmentIdentifier:c},t)}function A(r,e,t){return C(r,Array.isArray(e)?function(r){return!e.includes(r)}:function(r,t){return!e(r,t)},t)}var P=n}}]);