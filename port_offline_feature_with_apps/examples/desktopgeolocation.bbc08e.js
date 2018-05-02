(function(e){function t(t){var r=t[0];var i=t[1];var c=t[2];var s,l,p=0,v=[];for(;p<r.length;p++){l=r[p];if(a[l]){v.push(a[l][0])}a[l]=0}for(s in i){if(Object.prototype.hasOwnProperty.call(i,s)){e[s]=i[s]}}if(u)u(t);while(v.length){v.shift()()}n.push.apply(n,c||[]);return o()}function o(){var e;for(var t=0;t<n.length;t++){var o=n[t];var r=true;for(var c=1;c<o.length;c++){var s=o[c];if(a[s]!==0)r=false}if(r){n.splice(t--,1);e=i(i.s=o[0])}}return e}var r={};var a={32:0};var n=[];function i(t){if(r[t]){return r[t].exports}var o=r[t]={i:t,l:false,exports:{}};e[t].call(o.exports,o,o.exports,i);o.l=true;return o.exports}i.m=e;i.c=r;i.d=function(e,t,o){if(!i.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:o})}};i.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[];var s=c.push.bind(c);c.push=t;c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;n.push([412,0]);return o()})({334:function(e,t,o){"use strict";o.r(t);var r=o(504);var a=o(19);var n=o(25);var i=o(17);var c=o(35);var s=o(78);var l=o(13);var u=o(41);var p=o(42);var v=o(22);var f=o(2);var h=o(162);var g=o(221);var _=o(3);var y=o(14);var d=o(251);var m=o(32);var w=angular.module("ngeoDesktopGeolocation",[h["a"].module.name,g["a"].module.name]);w.GeolocationEventType={ERROR:"desktop-geolocation-error"};w.directive_=function(){return{restrict:"A",scope:{getDesktopMapFn:"&ngeoDesktopGeolocationMap",getDesktopGeolocationOptionsFn:"&ngeoDesktopGeolocationOptions"},controller:"ngeoGeolocationDesktopController"}};w.directive("ngeoDesktopGeolocation",w.directive_);w.Controller_=function(e,t,o,r){var n=this;t.on("click",this.toggle.bind(this));var i=e["getDesktopMapFn"]();f["a"].assertInstanceof(i,a["a"]);this.map_=i;var c=e["getDesktopGeolocationOptionsFn"]()||{};f["a"].assertObject(c);this.$scope_=e;this.notification_=r;this.featureOverlay_=o.getFeatureOverlay();this.geolocation_=new d["a"]({projection:i.getView().getProjection()});this.geolocation_.on("error",function(t){this.deactivate_();this.notification_.error(t.message);e.$emit(w.GeolocationEventType.ERROR,t)},this);this.positionFeature_=new y["a"];if(c.positionFeatureStyle){this.positionFeature_.setStyle(c.positionFeatureStyle)}this.accuracyFeature_=new y["a"];if(c.accuracyFeatureStyle){this.accuracyFeature_.setStyle(c.accuracyFeatureStyle)}this.zoom_=c.zoom;this.active_=false;_["a"](this.geolocation_,"change:accuracyGeometry",function(){n.accuracyFeature_.setGeometry(n.geolocation_.getAccuracyGeometry())});_["a"](this.geolocation_,"change:position",function(e){n.setPosition_(e)})};w.Controller_.$inject=["$scope","$element","ngeoFeatureOverlayMgr","ngeoNotification"];w.Controller_.prototype.toggle=function(){if(this.active_){this.deactivate_()}else{this.activate_()}};w.Controller_.prototype.activate_=function(){this.featureOverlay_.addFeature(this.positionFeature_);this.featureOverlay_.addFeature(this.accuracyFeature_);this.geolocation_.setTracking(true);this.active_=true};w.Controller_.prototype.deactivate_=function(){this.featureOverlay_.clear();this.active_=false;this.notification_.clear()};w.Controller_.prototype.setPosition_=function(e){var t=this.geolocation_.getPosition();var o=new m["a"](t);this.positionFeature_.setGeometry(o);this.map_.getView().setCenter(t);if(this.zoom_!==undefined){this.map_.getView().setZoom(this.zoom_)}this.geolocation_.setTracking(false)};w.controller("ngeoGeolocationDesktopController",w.Controller_);var F=w;var O={};O.module=angular.module("app",["gettext",F.name,v["a"].name]);O.MainController=function(e,t){var o=new l["c"]({image:new s["a"]({radius:6,fill:new u["a"]({color:"rgba(230, 100, 100, 1)"}),stroke:new p["a"]({color:"rgba(230, 40, 40, 1)",width:2})})});var r=new l["c"]({fill:new u["a"]({color:"rgba(100, 100, 230, 0.3)"}),stroke:new p["a"]({color:"rgba(40, 40, 230, 1)",width:2})});this.desktopGeolocationOptions={positionFeatureStyle:o,accuracyFeatureStyle:r,zoom:17};this.map=new a["a"]({layers:[new i["a"]({source:new c["b"]})],view:new n["a"]({center:[0,0],zoom:4})});t.init(this.map)};O.MainController.$inject=["$scope","ngeoFeatureOverlayMgr"];O.module.controller("MainController",O.MainController);var k=t["default"]=O},412:function(e,t,o){o(53);o(55);e.exports=o(334)},504:function(e,t){}});
//# sourceMappingURL=desktopgeolocation.bbc08e.js.map