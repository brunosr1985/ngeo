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
/******/ 		"mobilegeolocation": 0
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
/******/ 	deferredModules.push([26,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/mobilegeolocation.css":
/*!****************************************!*\
  !*** ./examples/mobilegeolocation.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/mobilegeolocation.js":
/*!***************************************!*\
  !*** ./examples/mobilegeolocation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mobilegeolocation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobilegeolocation.css */ "./examples/mobilegeolocation.css");
/* harmony import */ var _mobilegeolocation_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mobilegeolocation_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_geolocation_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/geolocation/component.js */ "./src/geolocation/component.js");
MainController.$inject = ["$scope", "ngeoFeatureOverlayMgr"];








var appmodule = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_geolocation_component_js__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_6__["default"].name]);

function MainController($scope, ngeoFeatureOverlayMgr) {
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      center: [0, 0],
      zoom: 4
    })
  });
  ngeoFeatureOverlayMgr.init(this.map);
}

appmodule.controller('MainController', MainController);
appmodule.constant('ngeoGeolocationOptions', {
  positionFeatureStyle: {
    circle: {
      radius: 6,
      fill: {
        color: 'rgba(230, 100, 100, 1)'
      },
      stroke: {
        color: 'rgba(230, 40, 40, 1)',
        width: 2
      }
    }
  },
  accuracyFeatureStyle: {
    fill: {
      color: 'rgba(100, 100, 230, 0.3)'
    },
    stroke: {
      color: 'rgba(40, 40, 230, 1)',
      width: 2
    }
  },
  zoom: 17,
  autorotate: true
});
/* harmony default export */ __webpack_exports__["default"] = (module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/ol/Geolocation.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/ol/Geolocation.js from dll-reference vendor ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(1056);

/***/ }),

/***/ "./src/geolocation/component.js":
/*!**************************************!*\
  !*** ./src/geolocation/component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr.js */ "./src/map/FeatureOverlayMgr.js");
/* harmony import */ var ngeo_message_Notification_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/message/Notification.js */ "./src/message/Notification.js");
/* harmony import */ var ol_easing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/easing.js */ "./node_modules/ol/easing.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/events.js */ "./node_modules/ol/events.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_Geolocation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Geolocation.js */ "./node_modules/ol/Geolocation.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ngeo_options_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/options.js */ "./src/options.js");
Controller.$inject = ["$scope", "$element", "gettextCatalog", "ngeoFeatureOverlayMgr", "ngeoNotification", "ngeoGeolocationOptions"];











var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoGeolocation', [ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_message_Notification_js__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
var GeolocationEventType = {
  ERROR: 'geolocation-error'
};

function geolocationComponent() {
  return {
    restrict: 'A',
    scope: {
      'getMapFn': '&ngeoGeolocationMap'
    },
    controller: 'ngeoGeolocationController'
  };
}

module.directive('ngeoGeolocation', geolocationComponent);

function Controller($scope, $element, gettextCatalog, ngeoFeatureOverlayMgr, ngeoNotification, ngeoGeolocationOptions) {
  var _this = this;

  this.options = ngeoGeolocationOptions;
  $element.on('click', this.toggleTracking.bind(this));
  var map = $scope.getMapFn();

  if (!(map instanceof ol_Map_js__WEBPACK_IMPORTED_MODULE_7__["default"])) {
    throw new Error('Wrong map type');
  }

  this.$scope_ = $scope;
  this.map_ = map;
  this.notification_ = ngeoNotification;
  this.featureOverlay_ = ngeoFeatureOverlayMgr.getFeatureOverlay();
  this.geolocation_ = new ol_Geolocation_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    projection: map.getView().getProjection(),
    trackingOptions: {
      enableHighAccuracy: true
    }
  });

  if (this.options.autorotate) {
    this.autorotateListener();
  }

  this.geolocation_.on('error', function (error) {
    _this.untrack_();

    var msg;

    switch (error.code) {
      case 1:
        msg = gettextCatalog.getString('User denied the request for Geolocation.');
        break;

      case 2:
        msg = gettextCatalog.getString('Location information is unavailable.');
        break;

      case 3:
        msg = gettextCatalog.getString('The request to get user location timed out.');
        break;

      default:
        msg = gettextCatalog.getString('Geolocation: An unknown error occurred.');
        break;
    }

    _this.notification_.error(msg);

    $scope.$emit(GeolocationEventType.ERROR, error);
  });
  this.positionFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  this.positionFeature_.setStyle(Object(ngeo_options_js__WEBPACK_IMPORTED_MODULE_10__["buildStyle"])(this.options.positionFeatureStyle));
  this.accuracyFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  this.accuracyFeature_.setStyle(Object(ngeo_options_js__WEBPACK_IMPORTED_MODULE_10__["buildStyle"])(this.options.accuracyFeatureStyle));
  this.follow_ = false;
  this.viewChangedByMe_ = false;
  Object(ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"])(this.geolocation_, 'change:accuracyGeometry', function (evt) {
    var geometry = _this.geolocation_.getAccuracyGeometry();

    if (!geometry) {
      throw new Error('Missing geometry');
    }

    _this.accuracyFeature_.setGeometry(geometry);

    _this.setPosition_();
  });
  Object(ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"])(this.geolocation_, 'change:position', function () {
    _this.setPosition_();
  });
  var view = map.getView();
  Object(ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"])(view, 'change:center', this.handleViewChange_, this);
  Object(ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"])(view, 'change:resolution', this.handleViewChange_, this);
}

Controller.prototype.toggleTracking = function () {
  if (this.geolocation_.getTracking()) {
    var currentPosition = this.geolocation_.getPosition();

    if (currentPosition === undefined) {
      this.untrack_();
      this.$scope_.$emit(GeolocationEventType.ERROR, null);
      return;
    }

    var view = this.map_.getView();
    var center = view.getCenter();

    if (!center) {
      throw new Error('Missing center');
    }

    var diff = Math.abs(currentPosition[0] - center[0]) + Math.abs(currentPosition[1] - center[1]);

    if (diff < 2) {
      this.untrack_();
    } else {
      view.setCenter(currentPosition);
      this.untrack_();
      this.track_();
    }
  } else {
    this.track_();
  }
};

Controller.prototype.track_ = function () {
  this.featureOverlay_.addFeature(this.positionFeature_);
  this.featureOverlay_.addFeature(this.accuracyFeature_);
  this.follow_ = true;
  this.geolocation_.setTracking(true);
};

Controller.prototype.untrack_ = function () {
  this.featureOverlay_.clear();
  this.follow_ = false;
  this.geolocation_.setTracking(false);
  this.notification_.clear();
};

Controller.prototype.setPosition_ = function () {
  var view = this.map_.getView();
  var position = this.geolocation_.getPosition();

  if (position === undefined) {
    throw new Error('Missing position');
  }

  var point = new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"](position);
  this.positionFeature_.setGeometry(point);
  var accuracy = this.accuracyFeature_.getGeometry();

  if (this.follow_) {
    this.viewChangedByMe_ = true;

    if (this.options.zoom !== undefined) {
      view.setCenter(position);
      view.setZoom(this.options.zoom);
    } else if (accuracy instanceof ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
      var size = this.map_.getSize();

      if (size === undefined) {
        throw new Error('Missing size');
      }

      view.fit(accuracy, {
        size: size
      });
    }

    this.viewChangedByMe_ = false;
  }
};

Controller.prototype.handleViewChange_ = function (event) {
  if (this.follow_ && !this.viewChangedByMe_) {
    this.follow_ = false;
  }
};

Controller.prototype.autorotateListener = function () {
  var _this2 = this;

  var currentAlpha = 0;

  if (window.hasOwnProperty('ondeviceorientationabsolute')) {
    window.addEventListener('deviceorientationabsolute', function (event) {
      if (!(event instanceof DeviceOrientationEvent)) {
        throw new Error('Wrong event type');
      }

      if (event.alpha !== null) {
        currentAlpha = _this2.handleRotate_(event.alpha, currentAlpha);
      }
    }, true);
  } else if (window.hasOwnProperty('ondeviceorientation')) {
    window.addEventListener('deviceorientation', function (evt) {
      if (evt.webkitCompassHeading) {
        currentAlpha = _this2.handleRotate_(-evt.webkitCompassHeading, currentAlpha);
      } else {
        if (!evt.alpha) {
          throw new Error('Missing evt.alpha');
        }

        currentAlpha = _this2.handleRotate_(evt.alpha - 270, currentAlpha);
      }
    }, true);
  } else {
    console.error('Orientation is not supported on this device');
  }
};

Controller.prototype.handleRotate_ = function (eventAlpha, currentAlpha) {
  if (this.geolocation_.getTracking() && Math.abs(eventAlpha - currentAlpha) > 0.2) {
    currentAlpha = eventAlpha;
    var radAlpha = currentAlpha * Math.PI / 180;
    this.map_.getView().animate({
      rotation: radAlpha,
      duration: 350,
      easing: ol_easing_js__WEBPACK_IMPORTED_MODULE_3__["linear"]
    });
  }

  return currentAlpha;
};

module.controller('ngeoGeolocationController', Controller);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: buildStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyle", function() { return buildStyle; });
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style/RegularShape.js */ "./node_modules/ol/style/RegularShape.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function buildStyle(styleDescriptor) {
  if (styleDescriptor instanceof ol_style_Style_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
    return styleDescriptor;
  } else if (!styleDescriptor) {
    return ol_style_Style_js__WEBPACK_IMPORTED_MODULE_4__["createDefaultStyle"];
  } else if (Array.isArray(styleDescriptor)) {
    var result = [];

    for (var _iterator = _createForOfIteratorHelperLoose(styleDescriptor), _step; !(_step = _iterator()).done;) {
      var style = _step.value;
      result.push(buildStyle(style));
    }

    return result;
  } else {
    var _style = {};
    Object.assign(_style, styleDescriptor);
    var sd = styleDescriptor;

    if (sd.fill) {
      _style.fill = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_2__["default"](sd.fill);
    }

    if (sd.stroke) {
      _style.stroke = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_3__["default"](sd.stroke);
    }

    if (sd.circle) {
      var circleStyle = {};
      Object.assign(circleStyle, sd.circle);

      if (sd.circle.fill) {
        circleStyle.fill = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_2__["default"](sd.circle.fill);
      }

      if (sd.circle.stroke) {
        circleStyle.stroke = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_3__["default"](sd.circle.stroke);
      }

      _style.image = new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_0__["default"](circleStyle);
      delete _style.circle;
    } else if (sd.regularShape) {
      var regularShapeStyle = {};
      Object.assign(regularShapeStyle, sd.regularShape);

      if (sd.regularShape.fill) {
        regularShapeStyle.fill = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_2__["default"](sd.regularShape.fill);
      }

      if (sd.regularShape.stroke) {
        regularShapeStyle.stroke = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_3__["default"](sd.regularShape.stroke);
      }

      if (sd.regularShape.angle) {
        sd.regularShape.angle = sd.regularShape.angle / 180 * Math.PI;
      }

      if (sd.regularShape.rotation) {
        sd.regularShape.rotation = sd.regularShape.angle / 180 * Math.PI;
      }

      _style.image = new ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_1__["default"](regularShapeStyle);
      delete _style.regularShape;
    }

    return new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_4__["default"](_style);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (null);

/***/ }),

/***/ 26:
/*!**************************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/mobilegeolocation.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/mobilegeolocation.js */"./examples/mobilegeolocation.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlZ2VvbG9jYXRpb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvbW9iaWxlZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb2xvY2F0aW9uL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibW9iaWxlZ2VvbG9jYXRpb25cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMjYsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIm5nZW9GZWF0dXJlT3ZlcmxheU1nclwiXTtcbmltcG9ydCAnLi9tb2JpbGVnZW9sb2NhdGlvbi5jc3MnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUuanMnO1xuaW1wb3J0IG5nZW9HZW9sb2NhdGlvbiBmcm9tICduZ2VvL2dlb2xvY2F0aW9uL2NvbXBvbmVudC5qcyc7XG52YXIgYXBwbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnZ2V0dGV4dCcsIG5nZW9HZW9sb2NhdGlvbi5uYW1lLCBuZ2VvTWFwTW9kdWxlLm5hbWVdKTtcblxuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHNjb3BlLCBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IpIHtcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSldLFxuICAgIHZpZXc6IG5ldyBvbFZpZXcoe1xuICAgICAgY2VudGVyOiBbMCwgMF0sXG4gICAgICB6b29tOiA0XG4gICAgfSlcbiAgfSk7XG4gIG5nZW9GZWF0dXJlT3ZlcmxheU1nci5pbml0KHRoaXMubWFwKTtcbn1cblxuYXBwbW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuYXBwbW9kdWxlLmNvbnN0YW50KCduZ2VvR2VvbG9jYXRpb25PcHRpb25zJywge1xuICBwb3NpdGlvbkZlYXR1cmVTdHlsZToge1xuICAgIGNpcmNsZToge1xuICAgICAgcmFkaXVzOiA2LFxuICAgICAgZmlsbDoge1xuICAgICAgICBjb2xvcjogJ3JnYmEoMjMwLCAxMDAsIDEwMCwgMSknXG4gICAgICB9LFxuICAgICAgc3Ryb2tlOiB7XG4gICAgICAgIGNvbG9yOiAncmdiYSgyMzAsIDQwLCA0MCwgMSknLFxuICAgICAgICB3aWR0aDogMlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYWNjdXJhY3lGZWF0dXJlU3R5bGU6IHtcbiAgICBmaWxsOiB7XG4gICAgICBjb2xvcjogJ3JnYmEoMTAwLCAxMDAsIDIzMCwgMC4zKSdcbiAgICB9LFxuICAgIHN0cm9rZToge1xuICAgICAgY29sb3I6ICdyZ2JhKDQwLCA0MCwgMjMwLCAxKScsXG4gICAgICB3aWR0aDogMlxuICAgIH1cbiAgfSxcbiAgem9vbTogMTcsXG4gIGF1dG9yb3RhdGU6IHRydWVcbn0pO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIiRlbGVtZW50XCIsIFwiZ2V0dGV4dENhdGFsb2dcIiwgXCJuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcIiwgXCJuZ2VvTm90aWZpY2F0aW9uXCIsIFwibmdlb0dlb2xvY2F0aW9uT3B0aW9uc1wiXTtcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9NYXBGZWF0dXJlT3ZlcmxheU1nciBmcm9tICduZ2VvL21hcC9GZWF0dXJlT3ZlcmxheU1nci5qcyc7XG5pbXBvcnQgbmdlb01lc3NhZ2VOb3RpZmljYXRpb24gZnJvbSAnbmdlby9tZXNzYWdlL05vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgKiBhcyBvbEVhc2luZyBmcm9tICdvbC9lYXNpbmcuanMnO1xuaW1wb3J0IHsgbGlzdGVuIH0gZnJvbSAnb2wvZXZlbnRzLmpzJztcbmltcG9ydCBvbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZS5qcyc7XG5pbXBvcnQgb2xHZW9sb2NhdGlvbiBmcm9tICdvbC9HZW9sb2NhdGlvbi5qcyc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbEdlb21Qb2ludCBmcm9tICdvbC9nZW9tL1BvaW50LmpzJztcbmltcG9ydCBQb2x5Z29uIGZyb20gJ29sL2dlb20vUG9seWdvbi5qcyc7XG5pbXBvcnQgeyBidWlsZFN0eWxlIH0gZnJvbSAnbmdlby9vcHRpb25zLmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb0dlb2xvY2F0aW9uJywgW25nZW9NYXBGZWF0dXJlT3ZlcmxheU1nci5uYW1lLCBuZ2VvTWVzc2FnZU5vdGlmaWNhdGlvbi5uYW1lXSk7XG52YXIgR2VvbG9jYXRpb25FdmVudFR5cGUgPSB7XG4gIEVSUk9SOiAnZ2VvbG9jYXRpb24tZXJyb3InXG59O1xuXG5mdW5jdGlvbiBnZW9sb2NhdGlvbkNvbXBvbmVudCgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7XG4gICAgICAnZ2V0TWFwRm4nOiAnJm5nZW9HZW9sb2NhdGlvbk1hcCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICduZ2VvR2VvbG9jYXRpb25Db250cm9sbGVyJ1xuICB9O1xufVxuXG5tb2R1bGUuZGlyZWN0aXZlKCduZ2VvR2VvbG9jYXRpb24nLCBnZW9sb2NhdGlvbkNvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIENvbnRyb2xsZXIoJHNjb3BlLCAkZWxlbWVudCwgZ2V0dGV4dENhdGFsb2csIG5nZW9GZWF0dXJlT3ZlcmxheU1nciwgbmdlb05vdGlmaWNhdGlvbiwgbmdlb0dlb2xvY2F0aW9uT3B0aW9ucykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMub3B0aW9ucyA9IG5nZW9HZW9sb2NhdGlvbk9wdGlvbnM7XG4gICRlbGVtZW50Lm9uKCdjbGljaycsIHRoaXMudG9nZ2xlVHJhY2tpbmcuYmluZCh0aGlzKSk7XG4gIHZhciBtYXAgPSAkc2NvcGUuZ2V0TWFwRm4oKTtcblxuICBpZiAoIShtYXAgaW5zdGFuY2VvZiBvbE1hcCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIG1hcCB0eXBlJyk7XG4gIH1cblxuICB0aGlzLiRzY29wZV8gPSAkc2NvcGU7XG4gIHRoaXMubWFwXyA9IG1hcDtcbiAgdGhpcy5ub3RpZmljYXRpb25fID0gbmdlb05vdGlmaWNhdGlvbjtcbiAgdGhpcy5mZWF0dXJlT3ZlcmxheV8gPSBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IuZ2V0RmVhdHVyZU92ZXJsYXkoKTtcbiAgdGhpcy5nZW9sb2NhdGlvbl8gPSBuZXcgb2xHZW9sb2NhdGlvbih7XG4gICAgcHJvamVjdGlvbjogbWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCksXG4gICAgdHJhY2tpbmdPcHRpb25zOiB7XG4gICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMuYXV0b3JvdGF0ZSkge1xuICAgIHRoaXMuYXV0b3JvdGF0ZUxpc3RlbmVyKCk7XG4gIH1cblxuICB0aGlzLmdlb2xvY2F0aW9uXy5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBfdGhpcy51bnRyYWNrXygpO1xuXG4gICAgdmFyIG1zZztcblxuICAgIHN3aXRjaCAoZXJyb3IuY29kZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBtc2cgPSBnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoJ1VzZXIgZGVuaWVkIHRoZSByZXF1ZXN0IGZvciBHZW9sb2NhdGlvbi4nKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgbXNnID0gZ2V0dGV4dENhdGFsb2cuZ2V0U3RyaW5nKCdMb2NhdGlvbiBpbmZvcm1hdGlvbiBpcyB1bmF2YWlsYWJsZS4nKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgbXNnID0gZ2V0dGV4dENhdGFsb2cuZ2V0U3RyaW5nKCdUaGUgcmVxdWVzdCB0byBnZXQgdXNlciBsb2NhdGlvbiB0aW1lZCBvdXQuJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtc2cgPSBnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoJ0dlb2xvY2F0aW9uOiBBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBfdGhpcy5ub3RpZmljYXRpb25fLmVycm9yKG1zZyk7XG5cbiAgICAkc2NvcGUuJGVtaXQoR2VvbG9jYXRpb25FdmVudFR5cGUuRVJST1IsIGVycm9yKTtcbiAgfSk7XG4gIHRoaXMucG9zaXRpb25GZWF0dXJlXyA9IG5ldyBvbEZlYXR1cmUoKTtcbiAgdGhpcy5wb3NpdGlvbkZlYXR1cmVfLnNldFN0eWxlKGJ1aWxkU3R5bGUodGhpcy5vcHRpb25zLnBvc2l0aW9uRmVhdHVyZVN0eWxlKSk7XG4gIHRoaXMuYWNjdXJhY3lGZWF0dXJlXyA9IG5ldyBvbEZlYXR1cmUoKTtcbiAgdGhpcy5hY2N1cmFjeUZlYXR1cmVfLnNldFN0eWxlKGJ1aWxkU3R5bGUodGhpcy5vcHRpb25zLmFjY3VyYWN5RmVhdHVyZVN0eWxlKSk7XG4gIHRoaXMuZm9sbG93XyA9IGZhbHNlO1xuICB0aGlzLnZpZXdDaGFuZ2VkQnlNZV8gPSBmYWxzZTtcbiAgbGlzdGVuKHRoaXMuZ2VvbG9jYXRpb25fLCAnY2hhbmdlOmFjY3VyYWN5R2VvbWV0cnknLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIGdlb21ldHJ5ID0gX3RoaXMuZ2VvbG9jYXRpb25fLmdldEFjY3VyYWN5R2VvbWV0cnkoKTtcblxuICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBnZW9tZXRyeScpO1xuICAgIH1cblxuICAgIF90aGlzLmFjY3VyYWN5RmVhdHVyZV8uc2V0R2VvbWV0cnkoZ2VvbWV0cnkpO1xuXG4gICAgX3RoaXMuc2V0UG9zaXRpb25fKCk7XG4gIH0pO1xuICBsaXN0ZW4odGhpcy5nZW9sb2NhdGlvbl8sICdjaGFuZ2U6cG9zaXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMuc2V0UG9zaXRpb25fKCk7XG4gIH0pO1xuICB2YXIgdmlldyA9IG1hcC5nZXRWaWV3KCk7XG4gIGxpc3Rlbih2aWV3LCAnY2hhbmdlOmNlbnRlcicsIHRoaXMuaGFuZGxlVmlld0NoYW5nZV8sIHRoaXMpO1xuICBsaXN0ZW4odmlldywgJ2NoYW5nZTpyZXNvbHV0aW9uJywgdGhpcy5oYW5kbGVWaWV3Q2hhbmdlXywgdGhpcyk7XG59XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLnRvZ2dsZVRyYWNraW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5nZW9sb2NhdGlvbl8uZ2V0VHJhY2tpbmcoKSkge1xuICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSB0aGlzLmdlb2xvY2F0aW9uXy5nZXRQb3NpdGlvbigpO1xuXG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVudHJhY2tfKCk7XG4gICAgICB0aGlzLiRzY29wZV8uJGVtaXQoR2VvbG9jYXRpb25FdmVudFR5cGUuRVJST1IsIG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB2aWV3ID0gdGhpcy5tYXBfLmdldFZpZXcoKTtcbiAgICB2YXIgY2VudGVyID0gdmlldy5nZXRDZW50ZXIoKTtcblxuICAgIGlmICghY2VudGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY2VudGVyJyk7XG4gICAgfVxuXG4gICAgdmFyIGRpZmYgPSBNYXRoLmFicyhjdXJyZW50UG9zaXRpb25bMF0gLSBjZW50ZXJbMF0pICsgTWF0aC5hYnMoY3VycmVudFBvc2l0aW9uWzFdIC0gY2VudGVyWzFdKTtcblxuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgdGhpcy51bnRyYWNrXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3LnNldENlbnRlcihjdXJyZW50UG9zaXRpb24pO1xuICAgICAgdGhpcy51bnRyYWNrXygpO1xuICAgICAgdGhpcy50cmFja18oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy50cmFja18oKTtcbiAgfVxufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUudHJhY2tfID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZlYXR1cmVPdmVybGF5Xy5hZGRGZWF0dXJlKHRoaXMucG9zaXRpb25GZWF0dXJlXyk7XG4gIHRoaXMuZmVhdHVyZU92ZXJsYXlfLmFkZEZlYXR1cmUodGhpcy5hY2N1cmFjeUZlYXR1cmVfKTtcbiAgdGhpcy5mb2xsb3dfID0gdHJ1ZTtcbiAgdGhpcy5nZW9sb2NhdGlvbl8uc2V0VHJhY2tpbmcodHJ1ZSk7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS51bnRyYWNrXyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mZWF0dXJlT3ZlcmxheV8uY2xlYXIoKTtcbiAgdGhpcy5mb2xsb3dfID0gZmFsc2U7XG4gIHRoaXMuZ2VvbG9jYXRpb25fLnNldFRyYWNraW5nKGZhbHNlKTtcbiAgdGhpcy5ub3RpZmljYXRpb25fLmNsZWFyKCk7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS5zZXRQb3NpdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2aWV3ID0gdGhpcy5tYXBfLmdldFZpZXcoKTtcbiAgdmFyIHBvc2l0aW9uID0gdGhpcy5nZW9sb2NhdGlvbl8uZ2V0UG9zaXRpb24oKTtcblxuICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwb3NpdGlvbicpO1xuICB9XG5cbiAgdmFyIHBvaW50ID0gbmV3IG9sR2VvbVBvaW50KHBvc2l0aW9uKTtcbiAgdGhpcy5wb3NpdGlvbkZlYXR1cmVfLnNldEdlb21ldHJ5KHBvaW50KTtcbiAgdmFyIGFjY3VyYWN5ID0gdGhpcy5hY2N1cmFjeUZlYXR1cmVfLmdldEdlb21ldHJ5KCk7XG5cbiAgaWYgKHRoaXMuZm9sbG93Xykge1xuICAgIHRoaXMudmlld0NoYW5nZWRCeU1lXyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnpvb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmlldy5zZXRDZW50ZXIocG9zaXRpb24pO1xuICAgICAgdmlldy5zZXRab29tKHRoaXMub3B0aW9ucy56b29tKTtcbiAgICB9IGVsc2UgaWYgKGFjY3VyYWN5IGluc3RhbmNlb2YgUG9seWdvbikge1xuICAgICAgdmFyIHNpemUgPSB0aGlzLm1hcF8uZ2V0U2l6ZSgpO1xuXG4gICAgICBpZiAoc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBzaXplJyk7XG4gICAgICB9XG5cbiAgICAgIHZpZXcuZml0KGFjY3VyYWN5LCB7XG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudmlld0NoYW5nZWRCeU1lXyA9IGZhbHNlO1xuICB9XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS5oYW5kbGVWaWV3Q2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodGhpcy5mb2xsb3dfICYmICF0aGlzLnZpZXdDaGFuZ2VkQnlNZV8pIHtcbiAgICB0aGlzLmZvbGxvd18gPSBmYWxzZTtcbiAgfVxufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuYXV0b3JvdGF0ZUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB2YXIgY3VycmVudEFscGhhID0gMDtcblxuICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KCdvbmRldmljZW9yaWVudGF0aW9uYWJzb2x1dGUnKSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbmFic29sdXRlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIERldmljZU9yaWVudGF0aW9uRXZlbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgZXZlbnQgdHlwZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQuYWxwaGEgIT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudEFscGhhID0gX3RoaXMyLmhhbmRsZVJvdGF0ZV8oZXZlbnQuYWxwaGEsIGN1cnJlbnRBbHBoYSk7XG4gICAgICB9XG4gICAgfSwgdHJ1ZSk7XG4gIH0gZWxzZSBpZiAod2luZG93Lmhhc093blByb3BlcnR5KCdvbmRldmljZW9yaWVudGF0aW9uJykpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LndlYmtpdENvbXBhc3NIZWFkaW5nKSB7XG4gICAgICAgIGN1cnJlbnRBbHBoYSA9IF90aGlzMi5oYW5kbGVSb3RhdGVfKC1ldnQud2Via2l0Q29tcGFzc0hlYWRpbmcsIGN1cnJlbnRBbHBoYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWV2dC5hbHBoYSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBldnQuYWxwaGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRBbHBoYSA9IF90aGlzMi5oYW5kbGVSb3RhdGVfKGV2dC5hbHBoYSAtIDI3MCwgY3VycmVudEFscGhhKTtcbiAgICAgIH1cbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdPcmllbnRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgZGV2aWNlJyk7XG4gIH1cbn07XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLmhhbmRsZVJvdGF0ZV8gPSBmdW5jdGlvbiAoZXZlbnRBbHBoYSwgY3VycmVudEFscGhhKSB7XG4gIGlmICh0aGlzLmdlb2xvY2F0aW9uXy5nZXRUcmFja2luZygpICYmIE1hdGguYWJzKGV2ZW50QWxwaGEgLSBjdXJyZW50QWxwaGEpID4gMC4yKSB7XG4gICAgY3VycmVudEFscGhhID0gZXZlbnRBbHBoYTtcbiAgICB2YXIgcmFkQWxwaGEgPSBjdXJyZW50QWxwaGEgKiBNYXRoLlBJIC8gMTgwO1xuICAgIHRoaXMubWFwXy5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICByb3RhdGlvbjogcmFkQWxwaGEsXG4gICAgICBkdXJhdGlvbjogMzUwLFxuICAgICAgZWFzaW5nOiBvbEVhc2luZy5saW5lYXJcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50QWxwaGE7XG59O1xuXG5tb2R1bGUuY29udHJvbGxlcignbmdlb0dlb2xvY2F0aW9uQ29udHJvbGxlcicsIENvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHJldHVybiBmdW5jdGlvbiAoKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IHJldHVybiBpdC5uZXh0LmJpbmQoaXQpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuaW1wb3J0IG9sU3R5bGVDaXJjbGUgZnJvbSAnb2wvc3R5bGUvQ2lyY2xlLmpzJztcbmltcG9ydCBvbFN0eWxlUmVndWxhclNoYXBlIGZyb20gJ29sL3N0eWxlL1JlZ3VsYXJTaGFwZS5qcyc7XG5pbXBvcnQgb2xTdHlsZUZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbC5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UuanMnO1xuaW1wb3J0IG9sU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU3R5bGUoc3R5bGVEZXNjcmlwdG9yKSB7XG4gIGlmIChzdHlsZURlc2NyaXB0b3IgaW5zdGFuY2VvZiBvbFN0eWxlKSB7XG4gICAgcmV0dXJuIHN0eWxlRGVzY3JpcHRvcjtcbiAgfSBlbHNlIGlmICghc3R5bGVEZXNjcmlwdG9yKSB7XG4gICAgcmV0dXJuIGNyZWF0ZURlZmF1bHRTdHlsZTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHN0eWxlRGVzY3JpcHRvcikpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKHN0eWxlRGVzY3JpcHRvciksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgc3R5bGUgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHJlc3VsdC5wdXNoKGJ1aWxkU3R5bGUoc3R5bGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHZhciBfc3R5bGUgPSB7fTtcbiAgICBPYmplY3QuYXNzaWduKF9zdHlsZSwgc3R5bGVEZXNjcmlwdG9yKTtcbiAgICB2YXIgc2QgPSBzdHlsZURlc2NyaXB0b3I7XG5cbiAgICBpZiAoc2QuZmlsbCkge1xuICAgICAgX3N0eWxlLmZpbGwgPSBuZXcgb2xTdHlsZUZpbGwoc2QuZmlsbCk7XG4gICAgfVxuXG4gICAgaWYgKHNkLnN0cm9rZSkge1xuICAgICAgX3N0eWxlLnN0cm9rZSA9IG5ldyBvbFN0eWxlU3Ryb2tlKHNkLnN0cm9rZSk7XG4gICAgfVxuXG4gICAgaWYgKHNkLmNpcmNsZSkge1xuICAgICAgdmFyIGNpcmNsZVN0eWxlID0ge307XG4gICAgICBPYmplY3QuYXNzaWduKGNpcmNsZVN0eWxlLCBzZC5jaXJjbGUpO1xuXG4gICAgICBpZiAoc2QuY2lyY2xlLmZpbGwpIHtcbiAgICAgICAgY2lyY2xlU3R5bGUuZmlsbCA9IG5ldyBvbFN0eWxlRmlsbChzZC5jaXJjbGUuZmlsbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZC5jaXJjbGUuc3Ryb2tlKSB7XG4gICAgICAgIGNpcmNsZVN0eWxlLnN0cm9rZSA9IG5ldyBvbFN0eWxlU3Ryb2tlKHNkLmNpcmNsZS5zdHJva2UpO1xuICAgICAgfVxuXG4gICAgICBfc3R5bGUuaW1hZ2UgPSBuZXcgb2xTdHlsZUNpcmNsZShjaXJjbGVTdHlsZSk7XG4gICAgICBkZWxldGUgX3N0eWxlLmNpcmNsZTtcbiAgICB9IGVsc2UgaWYgKHNkLnJlZ3VsYXJTaGFwZSkge1xuICAgICAgdmFyIHJlZ3VsYXJTaGFwZVN0eWxlID0ge307XG4gICAgICBPYmplY3QuYXNzaWduKHJlZ3VsYXJTaGFwZVN0eWxlLCBzZC5yZWd1bGFyU2hhcGUpO1xuXG4gICAgICBpZiAoc2QucmVndWxhclNoYXBlLmZpbGwpIHtcbiAgICAgICAgcmVndWxhclNoYXBlU3R5bGUuZmlsbCA9IG5ldyBvbFN0eWxlRmlsbChzZC5yZWd1bGFyU2hhcGUuZmlsbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZC5yZWd1bGFyU2hhcGUuc3Ryb2tlKSB7XG4gICAgICAgIHJlZ3VsYXJTaGFwZVN0eWxlLnN0cm9rZSA9IG5ldyBvbFN0eWxlU3Ryb2tlKHNkLnJlZ3VsYXJTaGFwZS5zdHJva2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2QucmVndWxhclNoYXBlLmFuZ2xlKSB7XG4gICAgICAgIHNkLnJlZ3VsYXJTaGFwZS5hbmdsZSA9IHNkLnJlZ3VsYXJTaGFwZS5hbmdsZSAvIDE4MCAqIE1hdGguUEk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZC5yZWd1bGFyU2hhcGUucm90YXRpb24pIHtcbiAgICAgICAgc2QucmVndWxhclNoYXBlLnJvdGF0aW9uID0gc2QucmVndWxhclNoYXBlLmFuZ2xlIC8gMTgwICogTWF0aC5QSTtcbiAgICAgIH1cblxuICAgICAgX3N0eWxlLmltYWdlID0gbmV3IG9sU3R5bGVSZWd1bGFyU2hhcGUocmVndWxhclNoYXBlU3R5bGUpO1xuICAgICAgZGVsZXRlIF9zdHlsZS5yZWd1bGFyU2hhcGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBvbFN0eWxlKF9zdHlsZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG51bGw7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL09BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9