!function(e){function t(t){for(var r,a,l=t[0],s=t[1],c=t[2],f=0,d=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=function(e){return a.p+""+({1:"modal"}[e]||e)+"."+{1:"96bee7029e79f411ca40"}[e]+".js"}(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([43,2]),n()}({14:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);n(14),n(15);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.target=document.body,this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggle()}),!1)}},{key:"toggle",value:function(){this.target.classList.toggle("nav-open")}}])&&r(t.prototype,n),i&&r(t,i),e}(),o=n(2),a=n.n(o),l=n(1),s=n.n(l);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.itemsToReveal=t,this.thresholdPercent=n,this.hideInitially(),this.scrollThrottle=a()(this.calcCaller,200).bind(this),this.events(),this.browserHeight=window.innerHeight}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",s()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;this.itemsToReveal.forEach((function(t){t.isRevealed||e.calculateIfScrolledTo(t)}))}},{key:"hasScrolledTo",value:function(e){return window.scrollY+this.browserHeight>e.offsetTop}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}},{key:"calculateIfScrolledTo",value:function(e){this.hasScrolledTo(e)&&e.getBoundingClientRect().y/this.browserHeight*100<this.thresholdPercent&&(e.isRevealed=!0,e.classList.add("reveal-item--is-visible"),e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}}])&&c(t.prototype,n),r&&c(t,r),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.siteHeaderHeight=this.getHeaderHeight(),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.scrollDirection="down",this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",a()((function(){return e.runOnScroll()}),300),!1),window.addEventListener("resize",s()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>this.siteHeaderHeight?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){var e=window.scrollY;e>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=e}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var n=e.dataset.matchingLinkId;document.querySelectorAll(".primary-nav a:not(#".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.getElementById(n).classList.add("is-current-link")}}}},{key:"getHeaderHeight",value:function(){return parseInt(window.getComputedStyle(this.siteHeader).height)}}])&&f(t.prototype,n),r&&f(t,r),e}();n(25);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.form=t,this.field=this.form.querySelector(".client-area__input"),this.contentArea=document.querySelect(".client-area__content-area"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault(),e.sendRequest()}))}},{key:"sendRequest",value:function(){var e=this;axios.post("https://travel-site-training-site.netlify.app/.netlify/functions/secret-area",{password:this.field.value}).then((function(t){e.form.remove(),e.contentArea.innerHTML=t.data})).catch((function(){e.contentArea.innerHTML='<p class="client-area__error">That secret phrase is not correct. Try again</p>',e.field.value="",e.field.focus()}))}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n\n<div class="client-area">\n\t<div class="wrapper wrapper--medium">\n\t\t<h2 class="section-title section-title--blue">Secret Client Area</h2>\n\t\t<form class="client-area__form" action="">\n\t\t\t<input class="client-area__input" type="text" placeholder="Enter the secret phrase">\n\t\t\t<button class="btn btn--orange">Submit</button>\n\t\t</form>\n\t\t<div class="client-area__content-area"></div>\n\t</div>\n</div>\n\n\t\t')}}])&&h(t.prototype,n),r&&h(t,r),e}();new d,new i,new v(document.querySelector(".client-area__form"));var p;new u(document.querySelectorAll(".feature-item"),68),new u(document.querySelectorAll(".testimonial"),75);document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===p?n.e(1).then(n.bind(null,44)).then((function(e){p=new e.default,setTimeout((function(){return p.openModal()}))})).catch((function(){console.error("problem loading modal")})):p.openModal()}))}))}});