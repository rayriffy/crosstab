parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jhDV":[function(require,module,exports) {
"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){r(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createStoreon=void 0;var n=function(e){var r={},n={},o={dispatch:function(e,c){if("@dispatch"!==e&&o.dispatch("@dispatch",[e,c,r[e]]),r[e]){var i,u={};r[e].forEach(function(e){var r=e(n,c);r&&"function"!=typeof r.then&&(i=n=t({},n,{},r),u=t({},u,{},r))}),i&&o.dispatch("@changed",u)}},get:function(){return n},on:function(e,t){return(r[e]||(r[e]=[])).push(t),function(){r[e]=r[e].filter(function(e){return e!==t})}}};return e.forEach(function(e){e&&e(o)}),o.dispatch("@init"),o};exports.createStoreon=n;
},{}],"WrIh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.persistState=void 0;let t=function(t,e){t=t||[];let a=(e=e||{}).key||"storeon",r=e.storage||localStorage;return function(e){let n=!1;e.on("data/update",(t,e)=>e),e.on("@init",()=>{n=!0;try{let n=r.getItem(a);null!==n&&("function"==typeof n.then?n.then(t=>{e.dispatch("data/update",JSON.parse(t))}).catch(()=>{}):e.dispatch("data/update",JSON.parse(n)))}catch(t){}}),e.on("@dispatch",(e,s)=>{if(!n||"@changed"!==s[0])return;let o={};0===t.length?o=e:Object.keys(e).forEach(a=>{t.forEach(t=>{"string"==typeof t?a===t&&(o[a]=e[a]):t.test(a)&&(o[a]=e[a])})});try{let t=JSON.stringify(o);return r.setItem(a,t)}catch(c){}})}};exports.persistState=t;
},{}],"S3PC":[function(require,module,exports) {
function t(t,e){return i(t)||o(t,e)||n(t,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function o(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}}function i(t){if(Array.isArray(t))return t}function a(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.key||"storeon-crosstab",e=!1,o=0,i=0;return function(a){a.on("@dispatch",function(a,u){var c=t(u,2),l=c[0],f=c[1];if("@"!==l[0])if(e)e=!1;else if(!r.filter||r.filter(l,f))try{o=Date.now()+""+i++,localStorage[n]=JSON.stringify([l,f,o])}catch(s){}}),window.addEventListener("storage",function(r){if(r.key===n){var i=t(JSON.parse(r.newValue),3),u=i[0],c=i[1],l=i[2];o!==l&&(e=!0,a.dispatch(u,c))}})}}module.exports={crossTab:a};
},{}],"Focm":[function(require,module,exports) {
var n=require("storeon").createStoreon,e=require("@storeon/localstorage").persistState,t=require("../").crossTab;function c(n){n.on("@init",function(){return{count:0,trim:!0}}),n.on("inc",function(n){return{count:n.count+1}}),n.on("dec",function(n){return{count:n.count-1}}),n.on("ten",function(n){return{count:n.count+10}})}function o(n){return"ten"!==n}var r=n([c,e(),t({filter:o})]),u=document.querySelector(".counter");u.innerText=r.get().count,r.on("@changed",function(n){u.innerText=n.count}),document.querySelector(".inc").addEventListener("click",function(){r.dispatch("inc",{type:"inc-world"})}),document.querySelector(".dec").addEventListener("click",function(){r.dispatch("dec",{type:"dec-world"})}),document.querySelector(".ten").addEventListener("click",function(){r.dispatch("ten")});
},{"storeon":"jhDV","@storeon/localstorage":"WrIh","../":"S3PC"}]},{},["Focm"], null)