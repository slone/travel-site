(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{44:function(t,e,s){"use strict";function n(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}s.r(e);var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeModalButton=document.querySelector(".modal__close"),this.events()}var e,s,o;return e=t,(s=[{key:"events",value:function(){var t=this;this.closeModalButton.addEventListener("click",(function(e){return t.closeModal(e)})),document.addEventListener("keyup",(function(e){return t.onKeyPress(e)}))}},{key:"openModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"onKeyPress",value:function(t){27==t.keyCode&&this.closeModal()}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n\n\t<div class="modal">\n\t\t<div class="modal__inner">\n\t\t\t<h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n\t\t\t<div class="wrapper wrapper--narrow">\n\t\t\t\t<p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n\t\t\t</div>\n\n\t\t\t<div class="social-icons">\n\t\t\t\t<a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Our Facebook page"></a>\n\t\t\t\t<a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Our Twitter page"></a>\n\t\t\t\t<a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Our Instagram page"></a>\n\t\t\t\t<a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="Our YouTube page"></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="modal__close">X</div>\n\t</div>\n\n\t\t')}}])&&n(e.prototype,s),o&&n(e,o),t}();e.default=o}}]);