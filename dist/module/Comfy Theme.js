parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../goosemodModule.json":[function(require,module,exports) {
module.exports={main:"src/index.js",version:"2.2.2",name:"Comfy Theme",authors:["265924886461939712","441384103946878987"],description:"Stay comfy while talking to your friends",images:["https://i.ibb.co/7NYcchv/Preview.png"],tags:["theme"]};
},{}],"../../../../moduleWrappers/goosemod/toast.js":[function(require,module,exports) {
module.exports=goosemodScope.showToast;
},{}],"../../../../moduleWrappers/goosemod/logger.js":[function(require,module,exports) {
module.exports=goosemodScope.logger;
},{}],"../../../../moduleWrappers/goosemod/settings.js":[function(require,module,exports) {
module.exports=goosemodScope.settings;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../goosemodModule.json"),t=i(require("@goosemod/toast")),n=require("@goosemod/logger"),o=a(require("@goosemod/settings"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return m(e)||s(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function s(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(u){r=!0,a=u}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}}function m(e){if(Array.isArray(e))return e}function p(e,t,n,o,r,a,i){try{var c=e[a](i),u=c.value}catch(d){return void n(d)}c.done?t(u):Promise.resolve(u).then(o,r)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function i(e){p(a,o,r,i,c,"next",e)}function c(e){p(a,o,r,i,c,"throw",e)}i(void 0)})}}var g,f,b,y,C,x,k,v,S,B,E,P,w,j,W,M,T,I,z,A,O,V,F,R,D,_,G={userPopoutAnimation:!0,scrollbars:!1,betterSpotifyPluginSeekBar:!0,userButtonSpacing:8,avatarRoundess:5,statusRoundness:3,serverRoundess:8,avatarWidthInModals:130,changeBonfireInModals:"https://nyri4.github.io/Comfy/assets/bonfire.gif",coloredEmojiPicker:!0,mentionColor:"#f04747",unreadColor:"#7289da",mentionColorBar:"#C66262",mentionColorBackground:"#c662621f",mentionColorHover:"#c6626226",userSettingsColor:"#096dc0",chatButtonsColor:"#6E85D3",spotifyPluginSeekBar:"#1EDC62",onlineStatusColor:"#43B581",idleStatusColor:"#FAA61A",dndStatusColor:"#F04747",offlineStatusColor:"#747F8D",circlesNextToRoleNames:5,tooltips:!0,discordLogo:!1};function X(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G[o];try{switch(G[o]=r,o){case"userPopoutAnimation":try{g.remove()}catch(a){}r&&((g=document.createElement("style")).textContent=".headerPlaying-j0WQBV.header-2BwW8b, .headerSpotify-zpWxgT.header-2BwW8b, .headerStreaming-2FjmGz.header-2BwW8b, .headerXbox-3G-4PF.header-2BwW8b { padding-bottom: 30px;}.headerPlaying-j0WQBV.header-2BwW8b:after, .headerSpotify-zpWxgT.header-2BwW8b:after, .headerStreaming-2FjmGz.header-2BwW8b:after, .headerXbox-3G-4PF.header-2BwW8b:after { background: url('https://nyri4.github.io/Comfy/assets/wave.png'); background-size: 250px 20px; animation: animate 6s linear infinite !important; opacity: 1 !important;}.header-2BwW8b:after, .headerPlaying-j0WQBV:before, .headerSpotify-zpWxgT:before, .headerStreaming-2FjmGz:before, .headerXbox-3G-4PF:before { position: absolute;content: \"\";bottom: -1px;left: 0;width: 250px;height: 20px;z-index: -1;animation: animate2 6s linear infinite;animation-delay: 0s;opacity: 0.5;}.headerPlaying-j0WQBV:before { background: url('https://nyri4.github.io/Comfy/assets/wave_playing.png'); background-size: 250px 20px;}.headerSpotify-zpWxgT:before { background: url('https://nyri4.github.io/Comfy/assets/wave_spotify.png'); background-size: 250px 20px;}.headerStreaming-2FjmGz:before { background: url('https://nyri4.github.io/Comfy/assets/wave_streaming.png'); background-size: 250px 20px;}.headerXbox-3G-4PF:before { background: url('https://nyri4.github.io/Comfy/assets/wave_xbox.png'); background-size: 250px 20px;}@keyframes animate { 0% { background-position-x: 0;} 100% { background-position-x: 250px;}}@keyframes animate2 {0% { background-position-x: 250px; } 100% { background-position-x: 0px;}}",document.head.appendChild(g));break;case"scrollbars":try{f.remove()}catch(i){}r||((f=document.createElement("style")).textContent='::-webkit-scrollbar { display: none !important;}.note-3HfJZ5 { margin-right: 0; }.content-1x5b-n { margin: 0 !important; border-radius: 0; }.mainContent-u_9PKf { padding-left: 8px;}.member-3-YXUe, [id*="private-channels-"] { margin: 0; max-width: unset; }.layout-2DM8Md { border-radius: 0; padding: 0 16px;}.unread-2lAfLh { z-index: 1;}.content-1LAB8Z, .item-1tOPte { margin-right: 8px;}.scroller-2hZ97C { padding-left: 0;}.scroller-2hZ97C > .content-3YMskv, .buttons-3JBrkn, .messagesPopout-24nkyi { padding-right: 10px !important; }.inviteRow-2L02ae {border-radius: 0; padding-left: 15px;}',document.head.appendChild(f));break;case"betterSpotifyPluginSeekBar":try{b.remove()}catch(c){}r&&((b=document.createElement("style")).textContent=".container-6sXIoE { border-bottom: none !important;}.container-6sXIoE .bar-g2ZMIm {position: absolute !important;bottom: 0 !important; left: 0 !important;width: 240px !important; height: 54px !important;margin-bottom: 0 !important;-webkit-mask-image: linear-gradient(0.25turn, #0008, #0002) !important;mask-image: linear-gradient(0.25turn, #0008, #0002) !important;border-radius: 0 !important;}.bar-g2ZMIm .barFill-Dhkah7 { border-radius: 0 !important;}.container-6sXIoE.maximized-vv2Wr0 .bar-g2ZMIm { height: 87px !important;}.container-6sXIoE .button-14-BFJ:hover { background-color: transparent !important;}.barFill-Dhkah7, .timeline-UWmgAx:hover .barFill-Dhkah7 { background: var(--spotify-color) !important;}.inner-WRV6k5 { z-index: 1 !important;}.barText-lmqc5O, .grabber-7sd5f5 { display: none !important;}",document.head.appendChild(b));break;case"userButtonSpacing":try{y.remove()}catch(u){}r&&((y=document.createElement("style")).textContent=":root {\n            --user-buttons-spacing: ".concat(r,"px;\n          }"),document.head.appendChild(y));break;case"avatarRoundess":try{C.remove()}catch(d){}r&&((C=document.createElement("style")).textContent=":root {\n            --avatar-radius: ".concat(r,"px;\n          }"),document.head.appendChild(C));break;case"statusRoundness":try{x.remove()}catch(l){}r&&((x=document.createElement("style")).textContent=":root {\n            --status-radius: ".concat(r,"px;\n          }"),document.head.appendChild(x));break;case"serverRoundess":try{k.remove()}catch(s){}r&&((k=document.createElement("style")).textContent=":root {\n            --server-radius: ".concat(r,"px;\n          }"),document.head.appendChild(k));break;case"avatarWidthInModals":try{v.remove()}catch(m){}r&&((v=document.createElement("style")).textContent=":root {\n            --avatar-width: ".concat(r,"px;\n          }"),document.head.appendChild(v));break;case"changeBonfireInModals":try{S.remove()}catch(p){}r&&((S=document.createElement("style")).textContent=":root {\n            --bonfire: url('".concat(r,"');\n          }"),document.head.appendChild(S));break;case"coloredEmojiPicker":try{B.remove()}catch(h){}r?((B=document.createElement("style")).textContent=":root {\n            --colored-emoji: grayscale(0%);\n          }",document.head.appendChild(B)):((B=document.createElement("style")).textContent=":root {\n            --colored-emoji: grayscale(100%);\n          }",document.head.appendChild(B));break;case"mentionColor":try{E.remove()}catch(_){}r&&((E=document.createElement("style")).textContent=":root {\n            --mention-color: ".concat(r,";\n          }"),document.head.appendChild(E));break;case"unreadColor":try{P.remove()}catch(X){}r&&((P=document.createElement("style")).textContent=":root {\n              --unread-color: ".concat(r,";\n            }"),document.head.appendChild(P));break;case"mentionColorBar":try{w.remove()}catch(L){}r&&((w=document.createElement("style")).textContent=":root {\n            --mention-color-bar: ".concat(r,";\n          }"),document.head.appendChild(w));break;case"mentionColorBackground":try{j.remove()}catch(H){}r&&((j=document.createElement("style")).textContent=":root {\n            --mention-color-background: ".concat(r,";\n          }"),document.head.appendChild(j));break;case"mentionColorHover":try{W.remove()}catch(Z){}r&&((W=document.createElement("style")).textContent=":root {\n            --mention-color-hover: ".concat(r,";\n          }"),document.head.appendChild(W));break;case"userSettingsColor":try{M.remove()}catch(q){}r&&((M=document.createElement("style")).textContent=":root {\n            --user-buttons-color: ".concat(r,";\n          }"),document.head.appendChild(M));break;case"chatButtonsColor":try{T.remove()}catch(U){}r&&((T=document.createElement("style")).textContent=":root {\n            --chat-buttons: ".concat(r,";\n          }"),document.head.appendChild(T));break;case"spotifyPluginSeekBar":try{I.remove()}catch(N){}r&&((I=document.createElement("style")).textContent=":root {\n            --spotify-color: ".concat(r,";\n          }"),document.head.appendChild(I));break;case"onlineStatusColor":try{z.remove()}catch(Q){}r&&((z=document.createElement("style")).textContent=":root {\n            --online: ".concat(r,";\n          }"),document.head.appendChild(z));break;case"idleStatusColor":try{A.remove()}catch(J){}r&&((A=document.createElement("style")).textContent=":root {\n            --iddle: ".concat(r,";\n          }"),document.head.appendChild(A));break;case"dndStatusColor":try{O.remove()}catch(Y){}r&&((O=document.createElement("style")).textContent=":root {\n            --dnd: ".concat(r,";\n          }"),document.head.appendChild(O));break;case"offlineStatusColor":try{V.remove()}catch(K){}r&&((V=document.createElement("style")).textContent=":root {\n            --offline: ".concat(r,";\n          }"),document.head.appendChild(V));break;case"circlesNextToRoleNames":try{F.remove()}catch($){}r&&((F=document.createElement("style")).textContent=":root {\n            --role-circle: ".concat(r,"px;\n          }"),document.head.appendChild(F));break;case"tooltips":try{R.remove()}catch(ee){}r?((R=document.createElement("style")).textContent=":root {\n            --tooltips: block;\n          }",document.head.appendChild(R)):((R=document.createElement("style")).textContent=":root {\n            --tooltips: none;\n          }",document.head.appendChild(R));break;case"discordLogo":try{D.remove()}catch(te){}r?((D=document.createElement("style")).textContent=":root {\n            --discord-logo: block;\n          }",document.head.appendChild(D)):((D=document.createElement("style")).textContent=":root {\n            --discord-logo: none;\n          }",document.head.appendChild(D));break;default:(0,t.default)('Setting "'.concat(o,'" not found.'),{type:"error"})}}catch(ne){(0,n.debug)(e.name,ne),(0,t.default)('Failed to set setting "'.concat(o,'" to "').concat(r,'".'),{type:"error"})}}function L(e){for(var t in G)X(t,e)}var H={goosemodHandlers:{onImport:function(){var t=h(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(_=document.createElement("style")).textContent='@import "https://nyri4.github.io/Comfy/betterdiscord/main.css";\n      \n      .theme-dark {\n        --background-tertiary: #101320;\n        --background-secondary: #1e2233;\n        --background-secondary-alt: #191f2e;\n        --background-primary: #23283d;\n        --background-mobile-primary: #23283d;\n        --background-mobile-secondary: #1e2233;\n        --channeltextarea-background: #191f2e;\n        --background-accent: #6E85D3;\n        --background-modifier-hover: #1c2030;\n        --background-modifier-active: #1a1e2e;\n        --background-modifier-selected: #191f2e;\n        --deprecated-card-bg: #12141f63;\n        --background-floating: #101320;\n        --deprecated-quickswitcher-input-background:#101320;\n        --elevation-low: none;\n        --scrollbar-auto-thumb: #121722;\n        --scrollbar-auto-track: #191f2e;\n        --scrollbar-thin-thumb: #141925;\n      }\n      \n      .theme-light { /* I don\'t support light theme it\'s just for the "Create a server" popup */\n        --background-tertiary: #101320;\n        --background-secondary: #1e2233;\n        --background-secondary-alt: #191f2e;\n        --background-primary: #23283d;\n        --background-accent: #6E85D3;\n        --background-modifier-hover: #262b41;\n        --background-modifier-active: #262b41;\n        --header-primary: #fff;\n        --header-secondary: #b1b5b9;\n        --text-normal: #8e9297;\n      }',document.head.appendChild(_),L(),o.createItem(e.name,["(v".concat(e.version,")"),{type:"header",text:"General Settings"},{type:"toggle",text:"User Popout Animation",onToggle:function(e){return X("userPopoutAnimation",e)},isToggled:function(){return G.userPopoutAnimation}},{type:"toggle",text:"Scrollbars",onToggle:function(e){return X("scrollbars",e)},isToggled:function(){return G.scrollbars}},{type:"toggle",text:"Better Spotify Plugin Seek Bar",onToggle:function(e){return X("betterSpotifyPluginSeekBar",e)},isToggled:function(){return G.betterSpotifyPluginSeekBar}},{type:"header",text:"Other Settings"},{type:"toggle",text:"Colored Emoji Picker",onToggle:function(e){return X("coloredEmojiPicker",e)},isToggled:function(){return G.coloredEmojiPicker}},{type:"text-and-color",text:"Mention Color",oninput:function(e){return X("mentionColor",e)},initialValue:function(){return G.mentionColor}},{type:"text-and-color",text:"Unread Color",oninput:function(e){return X("unreadColor",e)},initialValue:function(){return G.unreadColor}},{type:"text-and-color",text:"Mention Color Bar",oninput:function(e){return X("mentionColorBar",e)},initialValue:function(){return G.mentionColorBar}},{type:"text-and-color",text:"Mention Color Background",oninput:function(e){return X("mentionColorBackground",e)},initialValue:function(){return G.mentionColorBackground}},{type:"text-and-color",text:"Mention Color Hover",oninput:function(e){return X("mentionColorHover",e)},initialValue:function(){return G.mentionColorHover}},{type:"text-and-color",text:"User Settings Color",oninput:function(e){return X("userSettingsColor",e)},initialValue:function(){return G.userSettingsColor}},{type:"text-and-color",text:"Chat Buttons Color",oninput:function(e){return X("chatButtonsColor",e)},initialValue:function(){return G.chatButtonsColor}},{type:"text-and-color",text:"Spotify Plugin Seek Bar",oninput:function(e){return X("spotifyPluginSeekBar",e)},initialValue:function(){return G.spotifyPluginSeekBar}},{type:"text-and-color",text:"Online Status Color",oninput:function(e){return X("onlineStatusColor",e)},initialValue:function(){return G.onlineStatusColor}},{type:"text-and-color",text:"Idle Status Color",oninput:function(e){return X("idleStatusColor",e)},initialValue:function(){return G.idleStatusColor}},{type:"text-and-color",text:"Dnd Status Color",oninput:function(e){return X("dndStatusColor",e)},initialValue:function(){return G.dndStatusColor}},{type:"text-and-color",text:"Offline Status Color",oninput:function(e){return X("offlineStatusColor",e)},initialValue:function(){return G.offlineStatusColor}},{type:"toggle",text:"Tooltips",onToggle:function(e){return X("tooltips",e)},isToggled:function(){return G.tooltips}},{type:"toggle",text:"Discord Logo",onToggle:function(e){return X("discordLogo",e)},isToggled:function(){return G.discordLogo}}]);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){return[G]},loadSettings:function(e){var t=c(e,1)[0];G=t,L()},onRemove:function(){var t=h(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.removeItem(e.name),_.remove(),L(!1);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}};exports.default=H;
},{"../goosemodModule.json":"../goosemodModule.json","@goosemod/toast":"../../../../moduleWrappers/goosemod/toast.js","@goosemod/logger":"../../../../moduleWrappers/goosemod/logger.js","@goosemod/settings":"../../../../moduleWrappers/goosemod/settings.js"}]},{},["index.js"], null);parcelRequire('index.js').default