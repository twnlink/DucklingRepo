parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,t,e,r,o,a,i){try{var p=n[a](i),m=p.value}catch(u){return void e(u)}p.done?t(m):Promise.resolve(m).then(r,o)}function t(t){return function(){var e=this,r=arguments;return new Promise(function(o,a){var i=t.apply(e,r);function p(t){n(i,o,a,p,m,"next",t)}function m(t){n(i,o,a,p,m,"throw",t)}p(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode("/**\n\n * @name SmolCord\n * @version 1.0\n * @description Make the most of your screen space. Works best with 80% zoom.\n * @authorId 435026627907420161\n * @author Yellowsink\n\n**/\n\n.content-3YMskv .containerDefault--pIXnN .wrapper-2jXpOf {\n\tpadding: 0;\n}\n\n.content-3YMskv .containerDefault-3tr_sE {\n\tpadding-top: .5rem;\n}\n\n.cozy-3raOZG .header-23xsNx {\n\tmargin-bottom: 0;\n}\n\n.membersGroup-v9BXpm {\n\tpadding-top: .5rem;\n\theight: 1.5rem;\n}\n\n.header-2V-4Sw, .title-3qD0b- {\n\theight: 2.5rem;\n}\n\n.recentMentionsPopout-3rCiI6 .header-ykumBX {\n\theight: 3rem;\n\tmin-height: 3rem;\n\tpadding-top: .5rem;\n\tpadding-bottom: 0;\n}\n\n.container-3iAQ-0 {\n\tmargin-bottom: 0;\n}\n\n.container-3iAQ-0 .messageContainer-gbhlwo {\n\tpadding: .5rem 0;\n}\n\n.messagesPopoutWrap-1MQ1bW:not(.recentMentionsPopout-3rCiI6) .header-ykumBX {\n\theight: 2rem;\n\tmin-height: 2rem;\n\tpadding-top: .5rem;\n\tpadding-bottom: 0;\n}\n\n.modal-3O0aXp {\n\tmin-height: 150px;\n}\n\n.modal-3O0aXp > div {\n\tpadding: .5rem 16px;\n}\n\n.content-1LAB8Z .content-38qMG0 {\n\tpadding: 0;\n}\n\n.item-1tOPte {\n\tpadding: .2rem;\n\tmin-height: 1.75rem;\n}\n\n.marginTop40-i-78cZ {\n\tmargin-top: 30px;\n}\n\n.defaultMarginh2-2LTaUL,\n.marginBottom20-32qID7 {\n\tmargin-bottom: 10px;\n}\n\n.changePasswordButton-1LGVWT {\n\tmargin-bottom: 30px;\n}\n\n.fieldList-21DyL8 .fieldSpacer-wgewFh {\n\tmargin-top: .75rem;\n}\n\n.background-1QDuV2 {\n\tpadding: .5rem;\n}\n\n.profile-1eT9hT {\n\tmargin: 0 1rem .5rem 1rem;\n}\n\n.userPopout-3XzG_A {\n\tmax-height: calc(100vh - 5rem);\n}\n\n.userPopout-3XzG_A .activityUserPopout-2yItg2,\n  .userPopout-3XzG_A .body-3iLsc4 {\n\tpadding: .75rem;\n}\n\n\n.userPopout-3XzG_A .rolesList-22qj2L {\n\tmargin: .5rem 0;\n}\n\n.userPopout-3XzG_A .textarea-2r0oV8 {\n\theight: calc(34px / 1.5) !important;\n}\n\n.userPopout-3XzG_A .headerTop-3C2Zn0 {\n\tpadding: 0.5rem;\n\tflex-flow: row wrap;\n}\n\n.userPopout-3XzG_A .headerTop-3C2Zn0 .avatarWrapperNormal-3wFMbf {\n\tmargin: 0 .5rem 0 0;\n}\n\n.userPopout-3XzG_A .headerTop-3C2Zn0 .headerTag-2pZJzA, .userPopout-3XzG_A .headerTop-3C2Zn0 .customStatus-1bh2V9 {\n\tmargin-top: .5rem;\n}\n\n.listScroller-2_vlfo {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 50%);\n\tgrid-template-rows: repeat(auto-fit, 3.5rem);\n}\n\n.listScroller-2_vlfo .empty-2WtT5s {\n\tgrid-column: span 2;\n}\n"));case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.remove();case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default