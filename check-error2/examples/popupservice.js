/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"popupservice": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([34,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/popupservice.css":
/*!***********************************!*\
  !*** ./examples/popupservice.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./examples/popupservice.css?");

/***/ }),

/***/ "./examples/popupservice.js":
/*!**********************************!*\
  !*** ./examples/popupservice.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _popupservice_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupservice.css */ \"./examples/popupservice.css\");\n/* harmony import */ var _popupservice_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_popupservice_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_js_src_tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/src/tooltip.js */ \"./node_modules/bootstrap/js/src/tooltip.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/message/Popup.js */ \"./src/message/Popup.js\");\nMainController.$inject = [\"$sce\", \"ngeoCreatePopup\"];\n\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_2___default.a.module('app', ['gettext', ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name]);\n\nfunction MainController($sce, ngeoCreatePopup) {\n  this.sce_ = $sce;\n  this.createPopup_ = ngeoCreatePopup;\n  $('[data-toggle=\"tooltip\"]').tooltip({\n    container: 'body',\n    trigger: 'hover'\n  });\n}\n\nMainController.prototype.simplePopup = function () {\n  var popup = this.createPopup_();\n  popup.setAutoDestroy(true);\n  popup.setTitle('Simple popup');\n  var content = this.sce_.trustAsHtml('This is a simple 400x300 px popup.');\n  popup.setContent(content);\n  popup.setWidth('400px');\n  popup.setHeight('300px');\n  popup.setOpen(true);\n};\n\nMainController.prototype.iframePopup = function () {\n  var popup = this.createPopup_();\n  popup.setAutoDestroy(true);\n  popup.addClass('popup-with-iframe');\n  popup.setTitle('Iframe popup');\n  popup.setUrl('https://geomapfish.org/');\n  popup.setSize('400px', '300px');\n  popup.setOpen(true);\n};\n\nMainController.prototype.heavyPopup = function () {\n  var popup = this.createPopup_();\n  popup.setAutoDestroy(true);\n  popup.setTitle('This is a popup with lots and lots of content and a very long title');\n  var content = this.sce_.trustAsHtml('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget' + 'quam at ex euismod bibendum et eget enim. Nulla sodales tortor ac' + 'sagittis aliquet. Ut malesuada quam vitae pulvinar porta. Nunc id' + 'magna id risus malesuada elementum eget id purus. Curabitur vel augue' + 'blandit, faucibus nulla quis, consequat tellus. Phasellus commodo,' + 'tellus et vulputate ultricies, nulla libero ornare arcu, quis' + 'fermentum sem diam quis tellus. Aliquam ut sapien tristique, lacinia' + 'ante et, lacinia arcu. Quisque sagittis eros at quam blandit' + 'gravida. Nulla sit amet enim semper, efficitur eros sit amet,' + 'porttitor libero. Fusce quis tellus est. Quisque ornare, ex eget' + 'luctus pharetra, nisl leo lobortis purus, sed tristique neque leo eget' + 'odio. Maecenas lobortis nisl ac magna mollis, ac pulvinar risus' + 'convallis. Donec ullamcorper sollicitudin maximus. Quisque bibendum' + 'elit sit amet ultrices ornare. Donec aliquam felis id urna ultrices' + 'scelerisque.');\n  popup.setContent(content);\n  popup.setOpen(true);\n};\n\nMainController.prototype.openPopupWithContent = function () {\n  var popup = this.createPopup_();\n  var content = this.sce_.trustAsHtml('This popup was opened using the <code>open</code> method.');\n  popup.open({\n    autoDestroy: true,\n    content: content,\n    height: '200px',\n    title: 'Opened with \"open\"',\n    width: '300px'\n  });\n};\n\nMainController.prototype.openPopupWithUrl = function () {\n  var popup = this.createPopup_();\n  popup.open({\n    autoDestroy: true,\n    cls: 'popup-with-iframe',\n    height: '300px',\n    title: 'Opened with \"open\" and \"iframe\"',\n    url: 'https://geomapfish.org/',\n    width: '400px'\n  });\n};\n\nmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./examples/popupservice.js?");

/***/ }),

/***/ 34:
/*!*********************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/popupservice.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./examples/common_dependencies.js */\"./examples/common_dependencies.js\");\n__webpack_require__(/*! ngeo/mainmodule.js */\"./src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./examples/popupservice.js */\"./examples/popupservice.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/common_dependencies.js_ngeo/mainmodule.js_./examples/popupservice.js?");

/***/ }),

/***/ "dll-reference vendor_e4544f9f18f52e898dc0":
/*!**********************************************!*\
  !*** external "vendor_e4544f9f18f52e898dc0" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_e4544f9f18f52e898dc0;\n\n//# sourceURL=webpack:///external_%22vendor_e4544f9f18f52e898dc0%22?");

/***/ })

/******/ });