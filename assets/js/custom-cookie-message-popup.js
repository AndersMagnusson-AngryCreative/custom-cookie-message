!function(e){var o={};function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,o,t){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)s.d(t,a,function(o){return e[o]}.bind(null,a));return t},s.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="",s(s.s=0)}([function(e,o,s){"use strict";s(1),jQuery((function(e){var o=document.cookie.match("(^|;) ?custom_cookie_message=([^;]*)(;|$)"),s={states:null,init:function(){null===o&&this.showCookieNotice(),e("body").on("click","#custom-cookie-message-preference",this.changeSettings).on("click",".custom-cookie-message-modal__close",this.killModal).on("click","#custom-cookie-message-modal",this.actionModal).on("click",".custom-cookie-message-modal__item",this.actionTab).on("click","#ccm_cookie_preferences",this.cookiePreferences).on("click","#ccm-save-preference,.custom-cookie-message-banner__close,.custom-cookie-message-banner__accept",this.savePreferences)},cookiePreferences:function(o){o.stopPropagation(),s.showCookieNotice(),setTimeout((function(){s.changeSettings(),e("#custom-cookie-message-banner").slideUp().remove(),e("body").animate({marginBottom:"0px",marginTop:"0px"})}),350)},changeSettings:function(){var o=e("#custom-cookie-message-modal");o.hasClass("custom-cookie-message-modal--off")&&(o.removeClass("custom-cookie-message-modal--off").addClass("custom-cookie-message-modal--on"),e("#custom-cookie-message-banner").addClass("hide"))},killModal:function(){var o=e("#custom-cookie-message-modal");o.hasClass("custom-cookie-message-modal--on")&&(o.removeClass("custom-cookie-message-modal--on").addClass("custom-cookie-message-modal--off"),e("#custom-cookie-message-banner").removeClass("hide"))},actionModal:function(e){e.target===e.currentTarget&&s.killModal()},actionTab:function(){for(var o=e(this).attr("class").split(/\s+/),s=/--(.*)_message$/g,t=0;t<o.length;t++)if(o[t].match(s)){var a=s.exec(o[t]),c=".custom-cookie-message-modal__item--"+a[1]+"_message",i=".custom-cookie-message-modal__"+a[1]+"_message";e(c).hasClass("custom-cookie-message-modal__item--active")||(e(".custom-cookie-message-modal__item.custom-cookie-message-modal__item--active").removeClass("custom-cookie-message-modal__item--active"),e(c).addClass("custom-cookie-message-modal__item--active"),e(".custom-cookie-message-modal__content div").not(".hide").addClass("hide"),e(i).removeClass("hide"))}},savePreferences:function(o){for(var s=document.cookie.split("; "),t=0;t<s.length;t++)for(var a=window.location.hostname.split(".");a.length>0;){var c=encodeURIComponent(s[t].split(";")[0].split("=")[0])+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain="+a.join(".")+" ;path=",i=location.pathname.split("/");for(document.cookie=c+"/";i.length>0;)document.cookie=c+i.join("/"),i.pop();a.shift()}var n={functional:e("#ccm-functional").prop("checked"),advertising:e("#ccm-advertising").prop("checked")};n=JSON.stringify(n);var m=parseInt(customCookieMessageLocalize.cookie_life_time)/60/60/24,r=new Date;r.setTime(r.getTime()+24*m*60*60*1e3);var l="expires="+r.toUTCString();document.cookie="custom_cookie_message="+n+";"+l+";path=/",e("#custom-cookie-message-modal").remove(),e("#custom-cookie-message-banner").slideUp().remove(),"ccm-save-preference"===o.srcElement.id&&location.reload()},showCookieNotice:function(){e.ajax({url:customCookieMessageLocalize.rest_url_banner,method:"GET",cache:!0,contentType:!1,processData:!1}).done((function(o){if(null!==o.template&&""!==customCookieMessageLocalize.options){"bottom-fixed"===customCookieMessageLocalize.options.general.location_options?e("body").append(o.template):e("body").prepend(o.template);var s=e("#custom-cookie-message-banner").clone().attr("id",!1).css({display:"block",position:"absolute"});e("body").append(s);s.outerHeight();s.remove(),"scroll"===customCookieMessageLocalize.options.styles.banner_animation?e("#custom-cookie-message-banner").slideDown():"fade"===customCookieMessageLocalize.options.styles.banner_animation?e("#custom-cookie-message-banner").fadeIn():e("#custom-cookie-message-banner").show()}else console.warn("Custom Cookie Message options are not set")}))}};s.init()}))},function(e,o,s){}]);