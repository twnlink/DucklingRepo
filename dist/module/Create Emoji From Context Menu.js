parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../../moduleWrappers/goosemod/logger.js":[function(require,module,exports) {
module.exports=goosemodScope.logger;
},{}],"../../../../moduleWrappers/goosemod/toast.js":[function(require,module,exports) {
module.exports=goosemodScope.showToast;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,e=i(require("@goosemod/webpack")),r=i(require("@goosemod/logger")),n=o(require("@goosemod/toast"));function o(t){return t&&t.__esModule?t:{default:t}}function a(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}function i(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=a();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}return r.default=t,e&&e.set(t,r),r}function u(t){return l(t)||f(t)||y(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t){if(Array.isArray(t))return v(t)}function s(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(error){return void r(error)}u.done?e(c):Promise.resolve(c).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,u,"next",t)}function u(t){s(a,n,o,i,u,"throw",t)}i(void 0)})}}function m(t,e){return h(t)||b(t,e)||y(t,e)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}function h(t){if(Array.isArray(t))return t}var g={goosemodHandlers:{onImport:function(){var o=e.common.React,a=e.findByProps("getGuilds"),i=e.findByProps("uploadEmoji"),c=e.findByProps("canWithPartialContext"),f=e.findByProps("Permissions"),l=e.findByProps("sanitizeEmojiName"),s=e.findByProps("MenuItem"),p=e.find(function(t){return t.default&&"function"==typeof t.default&&t.default.toString().includes('id:"copy-native-link"')}),y=p.default;p.default=function(t,e){var p=y(t,e);if(!t)return p;var v=l.sanitizeEmojiName(t.substring(t.lastIndexOf("/"),t.lastIndexOf("."))),b=Object.entries(a.getGuilds()).filter(function(t){var e=m(t,2),r=(e[0],e[1]);return c.can(f.Permissions.MANAGE_EMOJIS,r)}).sort(function(t,e){var r=m(t,2),n=(r[0],r[1]),o=m(e,2),a=(o[0],o[1]);return n.name.localeCompare(a.name)}).map(function(e){var a=m(e,2),u=a[0],c=a[1];return o.createElement(s.MenuItem,{id:"createEmoji-create-"+u,label:c.name,action:function(){var e=d(regeneratorRuntime.mark(function e(){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{mode:"cors"});case 3:o=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),r.debug("Clone Emoji","Error fetching from: "+t,e.t0),(0,n.default)("Couldn't create emoji.",{type:error}),e.abrupt("return");case 11:return e.t1=i,e.t2=u,e.t3="data:".concat(o.headers.get("Content-Type"),";base64,"),e.t4=btoa,e.t5=String.fromCharCode,e.t6=Uint8Array,e.next=19,o.arrayBuffer();case 19:return e.t7=e.sent,e.t8=new e.t6(e.t7),e.t9=e.t5.apply.call(e.t5,null,e.t8),e.t10=(0,e.t4)(e.t9),e.t11=e.t3.concat.call(e.t3,e.t10),e.t12=v,e.next=27,e.t1.uploadEmoji.call(e.t1,e.t2,e.t11,e.t12).then(function(){(0,n.default)('Created emoji "'.concat(v,'" in ').concat(c.name,"."))});case 27:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}()})});return b&&b.length?[o.createElement(s.MenuItem,{id:"createEmoji-create",label:"Create Emoji: "+v,action:function(){}},b)].concat(u(p)):p},t=function(){return p.default=y}},onRemove:function(){t()}}};exports.default=g;
},{"@goosemod/webpack":"../../../../moduleWrappers/goosemod/webpack.js","@goosemod/logger":"../../../../moduleWrappers/goosemod/logger.js","@goosemod/toast":"../../../../moduleWrappers/goosemod/toast.js"}]},{},["index.js"], null);parcelRequire('index.js').default