(()=>{"use strict";var n={28:(n,t,e)=>{var r=e(81),o=e.n(r),i=e(645),a=e.n(i),c=e(667),l=e.n(c),s=new URL(e(389),e.b),d=a()(o()),p=l()(s);d.push([n.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Start of CSS Styling */\n\n@font-face {\n\tfont-family: 'Pizzaria';\n\tsrc: url(${p}) format('truetype');\n}\n\nbody {\n\tfont-family: 'Pizzaria', sans-serif;\n}\n\n#content {\n    background: linear-gradient( rgb(0, 0, 0), rgb(196, 25, 25));\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n.container {\n\tgrid-row: 2 / 3;\n\tgrid-column: 2 / 3;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-start;\n}\n\n.menu {\n\tbackground-color: gray;\n\twidth: 700px;\n\theight: 700px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tflex-direction: column;\n}\n\n.menu > * {\n\tmargin: 20px;\n}\n\n.menuTitle {\n\tmargin: 30px;\n\tfont-size: 3rem;\n}\n\nh1 {\n    color: brown;\n    grid-column: 2 / 3;\n    font-size: 4rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.item {\n\tdisplay: flex;\n}\n\n`,""])},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},389:(n,t,e)=>{n.exports=e.p+"488e02f1405d975f0f5d.ttf"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{e(28);const n=e.p+"2e30927c9122212843a0.png",t=document.getElementById("content"),r=document.createElement("h1");r.textContent="Papa's Pizzaeria",t.appendChild(r);const o=document.createElement("div");o.classList+="container";const i=document.createElement("div");i.classList+="menu";const a=document.createElement("h2");a.classList+="menuTitle",a.textContent="Menu";const c=document.createElement("ul"),l=new Image(100,100);l.src=n;const s=document.createElement("h1");s.innerText="$25.99 Great Potbelly Pizza Pie";const d=document.createElement("div");d.classList+="item",d.appendChild(l),d.appendChild(s),c.appendChild(d);const p=document.createElement("li");p.innerText="Open all days from 12pm - 6pm",c.appendChild(p),i.appendChild(a),i.appendChild(c),o.append(i),t.appendChild(o)})()})();