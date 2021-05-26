/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/view/sticky-video.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/view/sticky-video.js":
/*!*************************************!*\
  !*** ./src/js/view/sticky-video.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var eaelsvPosition = '';\nvar eaelsvWidth = 0;\nvar eaelsvHeight = 0;\nvar eaelsvDomHeight = 0;\nvar videoIsActive = 'off';\nvar eaelMakeItSticky = 0;\nvar scrollHeight = 0;\njQuery(window).on('elementor/frontend/init', function () {\n  if (isEditMode) {\n    elementor.hooks.addAction('panel/open_editor/widget/eael-sticky-video', function (panel, model, view) {\n      var interval;\n      model.attributes.settings.on('change:eaelsv_sticky_width', function () {\n        clearTimeout(interval);\n        interval = setTimeout(function () {\n          var height = Math.ceil(model.getSetting('eaelsv_sticky_width') / 1.78);\n          model.attributes.settings.attributes.eaelsv_sticky_height = height;\n          panel.el.querySelector('[data-setting=\"eaelsv_sticky_height\"]').value = height;\n        }, 250);\n      });\n      model.attributes.settings.on('change:eaelsv_sticky_height', function () {\n        clearTimeout(interval);\n        interval = setTimeout(function () {\n          var width = Math.ceil(model.getSetting('eaelsv_sticky_height') * 1.78);\n          model.attributes.settings.attributes.eaelsv_sticky_width = width;\n          panel.el.querySelector('[data-setting=\"eaelsv_sticky_width\"]').value = width;\n        }, 250);\n      });\n    });\n  }\n\n  elementorFrontend.hooks.addAction('frontend/element_ready/eael-sticky-video.default', function ($scope, $) {\n    $('.eaelsv-sticky-player-close', $scope).hide();\n    var element = $scope.find('.eael-sticky-video-player2');\n    var sticky = '';\n    var autoplay = '';\n    var overlay = '';\n    sticky = element.data('sticky');\n    autoplay = element.data('autoplay');\n    eaelsvPosition = element.data('position');\n    eaelsvHeight = element.data('sheight');\n    eaelsvWidth = element.data('swidth');\n    overlay = element.data('overlay');\n    scrollHeight = element.data('scroll_height');\n    PositionStickyPlayer(eaelsvPosition, eaelsvHeight, eaelsvWidth);\n    var playerAbc = new Plyr('#eaelsv-player-' + $scope.data('id')); // If element is Sticky video\n\n    if (overlay === 'no') {\n      // If autoplay is enable\n      if ('yes' === autoplay && sticky === 'yes') {\n        eaelsvDomHeight = GetDomElementHeight(element);\n        element.attr('id', 'videobox');\n        videoIsActive = 'on'; // When play event is cliked\n        // Do the sticky process\n\n        PlayerPlay(playerAbc, element);\n      }\n    } // Overlay Operation Started\n\n\n    if (overlay === 'yes') {\n      var ovrlyElmnt = element.prev();\n      videoIsActive = 'off';\n      $(ovrlyElmnt).on('click', function () {\n        $('.eael-sticky-video-wrapper > i').hide();\n        $(this).css('display', 'none');\n        playerAbc.play();\n\n        if ($(this).next().data('autoplay') === 'yes') {\n          playerAbc.restart();\n          eaelsvDomHeight = GetDomElementHeight(this);\n\n          if (sticky === 'yes') {\n            $(this).next().attr('id', 'videobox');\n            videoIsActive = 'on';\n          }\n        }\n      });\n    }\n\n    playerAbc.on('pause', function (event) {\n      videoIsActive = 'off';\n    });\n    playerAbc.on('play', function (event) {\n      videoIsActive = 'on';\n    });\n    $('.eaelsv-sticky-player-close').on('click', function () {\n      element.removeClass('out').addClass('in');\n      $('.eael-sticky-video-player2').removeAttr('style');\n      videoIsActive = 'off';\n    });\n    element.parent().css('height', element.height() + 'px');\n    $(window).resize(function () {\n      element.parent().css('height', element.height() + 'px');\n    });\n  });\n});\njQuery(window).scroll(function () {\n  var scrollTop = jQuery(window).scrollTop();\n  var scrollBottom = jQuery(document).height() - scrollTop;\n\n  if (scrollBottom > jQuery(window).height() + 400) {\n    if (scrollTop >= eaelsvDomHeight) {\n      if (videoIsActive == 'on') {\n        jQuery('#videobox').find('.eaelsv-sticky-player-close').css('display', 'block');\n        jQuery('#videobox').removeClass('in').addClass('out');\n        PositionStickyPlayer(eaelsvPosition, eaelsvHeight, eaelsvWidth);\n      }\n    } else {\n      jQuery('.eaelsv-sticky-player-close').hide();\n      jQuery('#videobox').removeClass('out').addClass('in');\n      jQuery('.eael-sticky-video-player2').removeAttr('style');\n    }\n  }\n});\n\nfunction GetDomElementHeight(elem) {\n  var contentHeight = jQuery(elem).parent().height();\n  var expHeight = scrollHeight * contentHeight / 100;\n  var hght = jQuery(elem).parent().offset().top + expHeight;\n  return hght;\n}\n\nfunction PositionStickyPlayer(p, h, w) {\n  if (p == 'top-left') {\n    jQuery('.eael-sticky-video-player2.out').css('top', '40px');\n    jQuery('.eael-sticky-video-player2.out').css('left', '40px');\n  }\n\n  if (p == 'top-right') {\n    jQuery('.eael-sticky-video-player2.out').css('top', '40px');\n    jQuery('.eael-sticky-video-player2.out').css('right', '40px');\n  }\n\n  if (p == 'bottom-right') {\n    jQuery('.eael-sticky-video-player2.out').css('bottom', '40px');\n    jQuery('.eael-sticky-video-player2.out').css('right', '40px');\n  }\n\n  if (p == 'bottom-left') {\n    jQuery('.eael-sticky-video-player2.out').css('bottom', '40px');\n    jQuery('.eael-sticky-video-player2.out').css('left', '40px');\n  }\n\n  jQuery('.eael-sticky-video-player2.out').css('width', w + 'px');\n  jQuery('.eael-sticky-video-player2.out').css('height', h + 'px');\n}\n\nfunction PlayerPlay(a, b) {\n  a.on('play', function (event) {\n    eaelsvDomHeight = GetDomElementHeight(b);\n    jQuery('.eael-sticky-video-player2').removeAttr('id');\n    jQuery('.eael-sticky-video-player2').removeClass('out');\n    b.attr('id', 'videobox');\n    videoIsActive = 'on';\n    eaelsvPosition = b.data('position');\n    eaelsvHeight = b.data('sheight');\n    eaelsvWidth = b.data('swidth');\n  });\n}\n\nfunction RunStickyPlayer(elem) {\n  var ovrplyer = new Plyr('#' + elem);\n  ovrplyer.start();\n}\n\n//# sourceURL=webpack:///./src/js/view/sticky-video.js?");

/***/ })

/******/ });