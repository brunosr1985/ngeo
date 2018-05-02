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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/ 		"mapfishprint": 0
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
/******/ 	deferredModules.push([22,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/mapfishprint.css":
/*!***********************************!*\
  !*** ./examples/mapfishprint.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/mapfishprint.js":
/*!**********************************!*\
  !*** ./examples/mapfishprint.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./examples/url.js");
/* harmony import */ var _mapfishprint_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapfishprint.css */ "./examples/mapfishprint.css");
/* harmony import */ var _mapfishprint_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mapfishprint_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _geoblocks_proj_EPSG_2056_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @geoblocks/proj/EPSG_2056.js */ "./node_modules/@geoblocks/proj/src/EPSG_2056.js");
/* harmony import */ var ngeo_print_Service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/print/Service.js */ "./src/print/Service.js");
/* harmony import */ var ngeo_print_Utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/print/Utils.js */ "./src/print/Utils.js");
/* harmony import */ var ngeo_print_Mask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/print/Mask.js */ "./src/print/Mask.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/format/GeoJSON.js */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Image.js */ "./node_modules/ol/layer/Image.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/ImageWMS.js */ "./node_modules/ol/source/ImageWMS.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
MainController.$inject = ["$timeout", "ngeoCreatePrint", "ngeoPrintUtils"];















var appmodule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_14__["default"].name, ngeo_print_Service_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, ngeo_print_Utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].name]);
var PRINT_SCALES_ = [100, 250, 500, 2500, 5000, 10000, 25000, 50000, 100000, 500000];
var PRINT_FORMAT_ = 'pdf';
var PRINT_LAYOUT_ = '1 A4 portrait';
var PRINT_DPI_ = 72;
var PRINT_PAPER_SIZE_ = [555, 675];

function MainController($timeout, ngeoCreatePrint, ngeoPrintUtils) {
  var source = new ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
    url: _url_js__WEBPACK_IMPORTED_MODULE_1__["MAPSERVER_PROXY"],
    params: {
      'LAYERS': 'default'
    },
    serverType: 'mapserver'
  });
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    layers: [new ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      source: source
    }), new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
      source: new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
        url: 'data/polygon-swizerland.json',
        format: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
          dataProjection: _geoblocks_proj_EPSG_2056_js__WEBPACK_IMPORTED_MODULE_3__["default"]
        })
      })
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      projection: _geoblocks_proj_EPSG_2056_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1],
      center: [2537635, 1152640],
      zoom: 3
    })
  });
  this.printState = '';
  this.$timeout_ = $timeout;
  this.print_ = ngeoCreatePrint(_url_js__WEBPACK_IMPORTED_MODULE_1__["PRINT_PROXY"]);
  this.printUtils_ = ngeoPrintUtils;
  this.maskLayer_ = new ngeo_print_Mask_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

  this.maskLayer_.getSize = function () {
    return PRINT_PAPER_SIZE_;
  };

  this.maskLayer_.getScale = function (frameState) {
    var mapSize = frameState.size;
    var mapResolution = frameState.viewState.resolution;

    if (mapSize !== undefined && mapResolution !== undefined) {
      return ngeoPrintUtils.getOptimalScale(mapSize, mapResolution, PRINT_PAPER_SIZE_, PRINT_SCALES_);
    } else {
      return PRINT_SCALES_[0];
    }
  };

  this.map.addLayer(this.maskLayer_);
}

MainController.prototype.print = function () {
  var map = this.map;
  var mapSize = map.getSize();
  var viewResolution = map.getView().getResolution();
  var scale = mapSize !== undefined && viewResolution !== undefined ? this.printUtils_.getOptimalScale(mapSize, viewResolution, PRINT_PAPER_SIZE_, PRINT_SCALES_) : PRINT_SCALES_[0];
  var rotation = map.getView().getRotation();
  var dpi = PRINT_DPI_;
  var format = PRINT_FORMAT_;
  var layout = PRINT_LAYOUT_;
  this.printState = 'Printing...';
  var spec = this.print_.createSpec(map, scale, rotation, dpi, layout, format, {
    'datasource': [],
    'debug': 0,
    'comments': 'My comments',
    'title': 'My print'
  });
  this.print_.createReport(spec).then(this.handleCreateReportSuccess_.bind(this), this.handleCreateReportError_.bind(this));
};

MainController.prototype.handleCreateReportSuccess_ = function (resp) {
  this.getStatus_(resp.data.ref);
};

MainController.prototype.getStatus_ = function (ref) {
  this.print_.getStatus(ref).then(this.handleGetStatusSuccess_.bind(this, ref), this.handleGetStatusError_.bind(this));
};

MainController.prototype.handleCreateReportError_ = function (resp) {
  this.printState = 'Print error';
};

MainController.prototype.handleGetStatusSuccess_ = function (ref, resp) {
  var _this = this;

  var mfResp = resp.data;
  var done = mfResp.done;

  if (done) {
    this.printState = '';
    window.location.href = this.print_.getReportUrl(ref);
  } else {
    this.$timeout_(function () {
      _this.getStatus_(ref);
    }, 1000, false);
  }
};

MainController.prototype.handleGetStatusError_ = function (resp) {
  this.printState = 'Print error';
};

appmodule.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/print/Mask.js":
/*!***************************!*\
  !*** ./src/print/Mask.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Layer.js */ "./node_modules/ol/layer/Layer.js");
/* harmony import */ var ol_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/dom.js */ "./node_modules/ol/dom.js");
/* harmony import */ var ngeo_print_Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/print/Utils.js */ "./src/print/Utils.js");
/* harmony import */ var ol_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/math.js */ "./node_modules/ol/math.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var Mask = function (_Layer) {
  _inheritsLoose(Mask, _Layer);

  function Mask(options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    _this = _Layer.call(this, options) || this;
    _this.context_ = Object(ol_dom_js__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext2D"])();
    _this.context_.canvas.style.opacity = '0.5';
    _this.context_.canvas.style.position = 'absolute';
    _this.getScale;
    _this.getSize;
    _this.getRotation;
    return _this;
  }

  var _proto = Mask.prototype;

  _proto.render = function render(frameState) {
    var cwidth = frameState.size[0];
    this.context_.canvas.width = cwidth;
    var cheight = frameState.size[1];
    this.context_.canvas.height = cheight;
    var center = [cwidth / 2, cheight / 2];
    this.context_.beginPath();
    this.context_.moveTo(0, 0);
    this.context_.lineTo(cwidth, 0);
    this.context_.lineTo(cwidth, cheight);
    this.context_.lineTo(0, cheight);
    this.context_.lineTo(0, 0);
    this.context_.closePath();
    var size = this.getSize();
    var height = size[1];
    var width = size[0];
    var scale = this.getScale(frameState);
    var resolution = frameState.viewState.resolution;
    var extentHalfWidth = width / ngeo_print_Utils_js__WEBPACK_IMPORTED_MODULE_2__["DOTS_PER_INCH"] / ngeo_print_Utils_js__WEBPACK_IMPORTED_MODULE_2__["INCHES_PER_METER"] * scale / resolution / 2;
    var extentHalfHeight = height / ngeo_print_Utils_js__WEBPACK_IMPORTED_MODULE_2__["DOTS_PER_INCH"] / ngeo_print_Utils_js__WEBPACK_IMPORTED_MODULE_2__["INCHES_PER_METER"] * scale / resolution / 2;
    var rotation = this.getRotation !== undefined ? Object(ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toRadians"])(this.getRotation()) : 0;
    var diagonal = Math.sqrt(Math.pow(extentHalfWidth, 2) + Math.pow(extentHalfHeight, 2));
    var gamma = Math.atan(extentHalfHeight / extentHalfWidth) - rotation;
    var omega = Math.atan(extentHalfWidth / extentHalfHeight) - rotation;
    var x1 = center[0] - Math.cos(gamma) * diagonal;
    var y1 = center[1] + Math.sin(gamma) * diagonal;
    var x2 = center[0] + Math.sin(omega) * diagonal;
    var y2 = center[1] + Math.cos(omega) * diagonal;
    var x3 = center[0] + Math.cos(gamma) * diagonal;
    var y3 = center[1] - Math.sin(gamma) * diagonal;
    var x4 = center[0] - Math.sin(omega) * diagonal;
    var y4 = center[1] - Math.cos(omega) * diagonal;
    this.context_.moveTo(x1, y1);
    this.context_.lineTo(x2, y2);
    this.context_.lineTo(x3, y3);
    this.context_.lineTo(x4, y4);
    this.context_.lineTo(x1, y1);
    this.context_.closePath();
    this.context_.fillStyle = '#000';
    this.context_.fill();
    return this.context_.canvas;
  };

  return Mask;
}(ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ 22:
/*!*********************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/mapfishprint.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/mapfishprint.js */"./examples/mapfishprint.js");


/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwZmlzaHByaW50LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2V4YW1wbGVzL21hcGZpc2hwcmludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnQvTWFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFwZmlzaHByaW50XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzIyLFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIk1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkdGltZW91dFwiLCBcIm5nZW9DcmVhdGVQcmludFwiLCBcIm5nZW9QcmludFV0aWxzXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBNQVBTRVJWRVJfUFJPWFksIFBSSU5UX1BST1hZIH0gZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0ICcuL21hcGZpc2hwcmludC5jc3MnO1xuaW1wb3J0IEVQU0cyMDU2IGZyb20gJ0BnZW9ibG9ja3MvcHJvai9FUFNHXzIwNTYuanMnO1xuaW1wb3J0IG5nZW9QcmludFNlcnZpY2UgZnJvbSAnbmdlby9wcmludC9TZXJ2aWNlLmpzJztcbmltcG9ydCBuZ2VvUHJpbnRVdGlscyBmcm9tICduZ2VvL3ByaW50L1V0aWxzLmpzJztcbmltcG9ydCBNYXNrTGF5ZXIgZnJvbSAnbmdlby9wcmludC9NYXNrLmpzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAuanMnO1xuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3LmpzJztcbmltcG9ydCBvbEZvcm1hdEdlb0pTT04gZnJvbSAnb2wvZm9ybWF0L0dlb0pTT04uanMnO1xuaW1wb3J0IG9sTGF5ZXJJbWFnZSBmcm9tICdvbC9sYXllci9JbWFnZS5qcyc7XG5pbXBvcnQgb2xMYXllclZlY3RvciBmcm9tICdvbC9sYXllci9WZWN0b3IuanMnO1xuaW1wb3J0IG9sU291cmNlSW1hZ2VXTVMgZnJvbSAnb2wvc291cmNlL0ltYWdlV01TLmpzJztcbmltcG9ydCBvbFNvdXJjZVZlY3RvciBmcm9tICdvbC9zb3VyY2UvVmVjdG9yLmpzJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZS5qcyc7XG52YXIgYXBwbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnZ2V0dGV4dCcsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb1ByaW50U2VydmljZS5uYW1lLCBuZ2VvUHJpbnRVdGlscy5uYW1lXSk7XG52YXIgUFJJTlRfU0NBTEVTXyA9IFsxMDAsIDI1MCwgNTAwLCAyNTAwLCA1MDAwLCAxMDAwMCwgMjUwMDAsIDUwMDAwLCAxMDAwMDAsIDUwMDAwMF07XG52YXIgUFJJTlRfRk9STUFUXyA9ICdwZGYnO1xudmFyIFBSSU5UX0xBWU9VVF8gPSAnMSBBNCBwb3J0cmFpdCc7XG52YXIgUFJJTlRfRFBJXyA9IDcyO1xudmFyIFBSSU5UX1BBUEVSX1NJWkVfID0gWzU1NSwgNjc1XTtcblxuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHRpbWVvdXQsIG5nZW9DcmVhdGVQcmludCwgbmdlb1ByaW50VXRpbHMpIHtcbiAgdmFyIHNvdXJjZSA9IG5ldyBvbFNvdXJjZUltYWdlV01TKHtcbiAgICB1cmw6IE1BUFNFUlZFUl9QUk9YWSxcbiAgICBwYXJhbXM6IHtcbiAgICAgICdMQVlFUlMnOiAnZGVmYXVsdCdcbiAgICB9LFxuICAgIHNlcnZlclR5cGU6ICdtYXBzZXJ2ZXInXG4gIH0pO1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbbmV3IG9sTGF5ZXJJbWFnZSh7XG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH0pLCBuZXcgb2xMYXllclZlY3Rvcih7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZVZlY3Rvcih7XG4gICAgICAgIHVybDogJ2RhdGEvcG9seWdvbi1zd2l6ZXJsYW5kLmpzb24nLFxuICAgICAgICBmb3JtYXQ6IG5ldyBvbEZvcm1hdEdlb0pTT04oe1xuICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiBFUFNHMjA1NlxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KV0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBwcm9qZWN0aW9uOiBFUFNHMjA1NixcbiAgICAgIHJlc29sdXRpb25zOiBbMjAwLCAxMDAsIDUwLCAyMCwgMTAsIDUsIDIuNSwgMiwgMV0sXG4gICAgICBjZW50ZXI6IFsyNTM3NjM1LCAxMTUyNjQwXSxcbiAgICAgIHpvb206IDNcbiAgICB9KVxuICB9KTtcbiAgdGhpcy5wcmludFN0YXRlID0gJyc7XG4gIHRoaXMuJHRpbWVvdXRfID0gJHRpbWVvdXQ7XG4gIHRoaXMucHJpbnRfID0gbmdlb0NyZWF0ZVByaW50KFBSSU5UX1BST1hZKTtcbiAgdGhpcy5wcmludFV0aWxzXyA9IG5nZW9QcmludFV0aWxzO1xuICB0aGlzLm1hc2tMYXllcl8gPSBuZXcgTWFza0xheWVyKCk7XG5cbiAgdGhpcy5tYXNrTGF5ZXJfLmdldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFBSSU5UX1BBUEVSX1NJWkVfO1xuICB9O1xuXG4gIHRoaXMubWFza0xheWVyXy5nZXRTY2FsZSA9IGZ1bmN0aW9uIChmcmFtZVN0YXRlKSB7XG4gICAgdmFyIG1hcFNpemUgPSBmcmFtZVN0YXRlLnNpemU7XG4gICAgdmFyIG1hcFJlc29sdXRpb24gPSBmcmFtZVN0YXRlLnZpZXdTdGF0ZS5yZXNvbHV0aW9uO1xuXG4gICAgaWYgKG1hcFNpemUgIT09IHVuZGVmaW5lZCAmJiBtYXBSZXNvbHV0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZ2VvUHJpbnRVdGlscy5nZXRPcHRpbWFsU2NhbGUobWFwU2l6ZSwgbWFwUmVzb2x1dGlvbiwgUFJJTlRfUEFQRVJfU0laRV8sIFBSSU5UX1NDQUxFU18pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUFJJTlRfU0NBTEVTX1swXTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXNrTGF5ZXJfKTtcbn1cblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLnByaW50ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbWFwID0gdGhpcy5tYXA7XG4gIHZhciBtYXBTaXplID0gbWFwLmdldFNpemUoKTtcbiAgdmFyIHZpZXdSZXNvbHV0aW9uID0gbWFwLmdldFZpZXcoKS5nZXRSZXNvbHV0aW9uKCk7XG4gIHZhciBzY2FsZSA9IG1hcFNpemUgIT09IHVuZGVmaW5lZCAmJiB2aWV3UmVzb2x1dGlvbiAhPT0gdW5kZWZpbmVkID8gdGhpcy5wcmludFV0aWxzXy5nZXRPcHRpbWFsU2NhbGUobWFwU2l6ZSwgdmlld1Jlc29sdXRpb24sIFBSSU5UX1BBUEVSX1NJWkVfLCBQUklOVF9TQ0FMRVNfKSA6IFBSSU5UX1NDQUxFU19bMF07XG4gIHZhciByb3RhdGlvbiA9IG1hcC5nZXRWaWV3KCkuZ2V0Um90YXRpb24oKTtcbiAgdmFyIGRwaSA9IFBSSU5UX0RQSV87XG4gIHZhciBmb3JtYXQgPSBQUklOVF9GT1JNQVRfO1xuICB2YXIgbGF5b3V0ID0gUFJJTlRfTEFZT1VUXztcbiAgdGhpcy5wcmludFN0YXRlID0gJ1ByaW50aW5nLi4uJztcbiAgdmFyIHNwZWMgPSB0aGlzLnByaW50Xy5jcmVhdGVTcGVjKG1hcCwgc2NhbGUsIHJvdGF0aW9uLCBkcGksIGxheW91dCwgZm9ybWF0LCB7XG4gICAgJ2RhdGFzb3VyY2UnOiBbXSxcbiAgICAnZGVidWcnOiAwLFxuICAgICdjb21tZW50cyc6ICdNeSBjb21tZW50cycsXG4gICAgJ3RpdGxlJzogJ015IHByaW50J1xuICB9KTtcbiAgdGhpcy5wcmludF8uY3JlYXRlUmVwb3J0KHNwZWMpLnRoZW4odGhpcy5oYW5kbGVDcmVhdGVSZXBvcnRTdWNjZXNzXy5iaW5kKHRoaXMpLCB0aGlzLmhhbmRsZUNyZWF0ZVJlcG9ydEVycm9yXy5iaW5kKHRoaXMpKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5oYW5kbGVDcmVhdGVSZXBvcnRTdWNjZXNzXyA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gIHRoaXMuZ2V0U3RhdHVzXyhyZXNwLmRhdGEucmVmKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5nZXRTdGF0dXNfID0gZnVuY3Rpb24gKHJlZikge1xuICB0aGlzLnByaW50Xy5nZXRTdGF0dXMocmVmKS50aGVuKHRoaXMuaGFuZGxlR2V0U3RhdHVzU3VjY2Vzc18uYmluZCh0aGlzLCByZWYpLCB0aGlzLmhhbmRsZUdldFN0YXR1c0Vycm9yXy5iaW5kKHRoaXMpKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5oYW5kbGVDcmVhdGVSZXBvcnRFcnJvcl8gPSBmdW5jdGlvbiAocmVzcCkge1xuICB0aGlzLnByaW50U3RhdGUgPSAnUHJpbnQgZXJyb3InO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmhhbmRsZUdldFN0YXR1c1N1Y2Nlc3NfID0gZnVuY3Rpb24gKHJlZiwgcmVzcCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBtZlJlc3AgPSByZXNwLmRhdGE7XG4gIHZhciBkb25lID0gbWZSZXNwLmRvbmU7XG5cbiAgaWYgKGRvbmUpIHtcbiAgICB0aGlzLnByaW50U3RhdGUgPSAnJztcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucHJpbnRfLmdldFJlcG9ydFVybChyZWYpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuJHRpbWVvdXRfKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmdldFN0YXR1c18ocmVmKTtcbiAgICB9LCAxMDAwLCBmYWxzZSk7XG4gIH1cbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5oYW5kbGVHZXRTdGF0dXNFcnJvcl8gPSBmdW5jdGlvbiAocmVzcCkge1xuICB0aGlzLnByaW50U3RhdGUgPSAnUHJpbnQgZXJyb3InO1xufTtcblxuYXBwbW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvTGF5ZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FudmFzQ29udGV4dDJEIH0gZnJvbSAnb2wvZG9tLmpzJztcbmltcG9ydCB7IElOQ0hFU19QRVJfTUVURVIsIERPVFNfUEVSX0lOQ0ggfSBmcm9tICduZ2VvL3ByaW50L1V0aWxzLmpzJztcbmltcG9ydCB7IHRvUmFkaWFucyB9IGZyb20gJ29sL21hdGguanMnO1xuXG52YXIgTWFzayA9IGZ1bmN0aW9uIChfTGF5ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWFzaywgX0xheWVyKTtcblxuICBmdW5jdGlvbiBNYXNrKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfTGF5ZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgIF90aGlzLmNvbnRleHRfID0gY3JlYXRlQ2FudmFzQ29udGV4dDJEKCk7XG4gICAgX3RoaXMuY29udGV4dF8uY2FudmFzLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICBfdGhpcy5jb250ZXh0Xy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIF90aGlzLmdldFNjYWxlO1xuICAgIF90aGlzLmdldFNpemU7XG4gICAgX3RoaXMuZ2V0Um90YXRpb247XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1hc2sucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoZnJhbWVTdGF0ZSkge1xuICAgIHZhciBjd2lkdGggPSBmcmFtZVN0YXRlLnNpemVbMF07XG4gICAgdGhpcy5jb250ZXh0Xy5jYW52YXMud2lkdGggPSBjd2lkdGg7XG4gICAgdmFyIGNoZWlnaHQgPSBmcmFtZVN0YXRlLnNpemVbMV07XG4gICAgdGhpcy5jb250ZXh0Xy5jYW52YXMuaGVpZ2h0ID0gY2hlaWdodDtcbiAgICB2YXIgY2VudGVyID0gW2N3aWR0aCAvIDIsIGNoZWlnaHQgLyAyXTtcbiAgICB0aGlzLmNvbnRleHRfLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY29udGV4dF8ubW92ZVRvKDAsIDApO1xuICAgIHRoaXMuY29udGV4dF8ubGluZVRvKGN3aWR0aCwgMCk7XG4gICAgdGhpcy5jb250ZXh0Xy5saW5lVG8oY3dpZHRoLCBjaGVpZ2h0KTtcbiAgICB0aGlzLmNvbnRleHRfLmxpbmVUbygwLCBjaGVpZ2h0KTtcbiAgICB0aGlzLmNvbnRleHRfLmxpbmVUbygwLCAwKTtcbiAgICB0aGlzLmNvbnRleHRfLmNsb3NlUGF0aCgpO1xuICAgIHZhciBzaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgdmFyIGhlaWdodCA9IHNpemVbMV07XG4gICAgdmFyIHdpZHRoID0gc2l6ZVswXTtcbiAgICB2YXIgc2NhbGUgPSB0aGlzLmdldFNjYWxlKGZyYW1lU3RhdGUpO1xuICAgIHZhciByZXNvbHV0aW9uID0gZnJhbWVTdGF0ZS52aWV3U3RhdGUucmVzb2x1dGlvbjtcbiAgICB2YXIgZXh0ZW50SGFsZldpZHRoID0gd2lkdGggLyBET1RTX1BFUl9JTkNIIC8gSU5DSEVTX1BFUl9NRVRFUiAqIHNjYWxlIC8gcmVzb2x1dGlvbiAvIDI7XG4gICAgdmFyIGV4dGVudEhhbGZIZWlnaHQgPSBoZWlnaHQgLyBET1RTX1BFUl9JTkNIIC8gSU5DSEVTX1BFUl9NRVRFUiAqIHNjYWxlIC8gcmVzb2x1dGlvbiAvIDI7XG4gICAgdmFyIHJvdGF0aW9uID0gdGhpcy5nZXRSb3RhdGlvbiAhPT0gdW5kZWZpbmVkID8gdG9SYWRpYW5zKHRoaXMuZ2V0Um90YXRpb24oKSkgOiAwO1xuICAgIHZhciBkaWFnb25hbCA9IE1hdGguc3FydChNYXRoLnBvdyhleHRlbnRIYWxmV2lkdGgsIDIpICsgTWF0aC5wb3coZXh0ZW50SGFsZkhlaWdodCwgMikpO1xuICAgIHZhciBnYW1tYSA9IE1hdGguYXRhbihleHRlbnRIYWxmSGVpZ2h0IC8gZXh0ZW50SGFsZldpZHRoKSAtIHJvdGF0aW9uO1xuICAgIHZhciBvbWVnYSA9IE1hdGguYXRhbihleHRlbnRIYWxmV2lkdGggLyBleHRlbnRIYWxmSGVpZ2h0KSAtIHJvdGF0aW9uO1xuICAgIHZhciB4MSA9IGNlbnRlclswXSAtIE1hdGguY29zKGdhbW1hKSAqIGRpYWdvbmFsO1xuICAgIHZhciB5MSA9IGNlbnRlclsxXSArIE1hdGguc2luKGdhbW1hKSAqIGRpYWdvbmFsO1xuICAgIHZhciB4MiA9IGNlbnRlclswXSArIE1hdGguc2luKG9tZWdhKSAqIGRpYWdvbmFsO1xuICAgIHZhciB5MiA9IGNlbnRlclsxXSArIE1hdGguY29zKG9tZWdhKSAqIGRpYWdvbmFsO1xuICAgIHZhciB4MyA9IGNlbnRlclswXSArIE1hdGguY29zKGdhbW1hKSAqIGRpYWdvbmFsO1xuICAgIHZhciB5MyA9IGNlbnRlclsxXSAtIE1hdGguc2luKGdhbW1hKSAqIGRpYWdvbmFsO1xuICAgIHZhciB4NCA9IGNlbnRlclswXSAtIE1hdGguc2luKG9tZWdhKSAqIGRpYWdvbmFsO1xuICAgIHZhciB5NCA9IGNlbnRlclsxXSAtIE1hdGguY29zKG9tZWdhKSAqIGRpYWdvbmFsO1xuICAgIHRoaXMuY29udGV4dF8ubW92ZVRvKHgxLCB5MSk7XG4gICAgdGhpcy5jb250ZXh0Xy5saW5lVG8oeDIsIHkyKTtcbiAgICB0aGlzLmNvbnRleHRfLmxpbmVUbyh4MywgeTMpO1xuICAgIHRoaXMuY29udGV4dF8ubGluZVRvKHg0LCB5NCk7XG4gICAgdGhpcy5jb250ZXh0Xy5saW5lVG8oeDEsIHkxKTtcbiAgICB0aGlzLmNvbnRleHRfLmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY29udGV4dF8uZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgIHRoaXMuY29udGV4dF8uZmlsbCgpO1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmNhbnZhcztcbiAgfTtcblxuICByZXR1cm4gTWFzaztcbn0oTGF5ZXIpO1xuXG5leHBvcnQgeyBNYXNrIGFzIGRlZmF1bHQgfTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=