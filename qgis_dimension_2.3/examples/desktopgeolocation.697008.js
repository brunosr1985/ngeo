!function(e){function t(t){for(var n,a,c=t[0],s=t[1],l=t[2],p=0,h=[];p<c.length;p++)a=c[p],r[a]&&h.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);h.length;)h.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={31:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([403,0]),o()}({328:function(e,t,o){"use strict";o.r(t);o(502);var n=o(43),r=o(53),i=o(36),a=o(57),c=o(108),s=o(19),l=o(47),u=o(46),p=o(17),h=o(1),g=o(155),_=o(189),f=o(3),y=o(24),v=o(311),d=o(44),m=angular.module("ngeoDesktopGeolocation",[g.a.module.name,_.a.module.name]);m.GeolocationEventType={ERROR:"desktop-geolocation-error"},m.directive_=function(){return{restrict:"A",scope:{getDesktopMapFn:"&ngeoDesktopGeolocationMap",getDesktopGeolocationOptionsFn:"&ngeoDesktopGeolocationOptions"},controller:"ngeoGeolocationDesktopController"}},m.directive("ngeoDesktopGeolocation",m.directive_),m.Controller_=function(e,t,o,r){var i=this;t.on("click",this.toggle.bind(this));var a=e.getDesktopMapFn();h.a.assertInstanceof(a,n.a),this.map_=a;var c=e.getDesktopGeolocationOptionsFn()||{};h.a.assertObject(c),this.$scope_=e,this.notification_=r,this.featureOverlay_=o.getFeatureOverlay(),this.geolocation_=new v.a({projection:a.getView().getProjection()}),this.geolocation_.on("error",function(t){this.deactivate_(),this.notification_.error(t.message),e.$emit(m.GeolocationEventType.ERROR,t)},this),this.positionFeature_=new y.a,c.positionFeatureStyle&&this.positionFeature_.setStyle(c.positionFeatureStyle),this.accuracyFeature_=new y.a,c.accuracyFeatureStyle&&this.accuracyFeature_.setStyle(c.accuracyFeatureStyle),this.zoom_=c.zoom,this.active_=!1,f.a(this.geolocation_,"change:accuracyGeometry",function(){i.accuracyFeature_.setGeometry(i.geolocation_.getAccuracyGeometry())}),f.a(this.geolocation_,"change:position",function(e){i.setPosition_(e)})},m.Controller_.$inject=["$scope","$element","ngeoFeatureOverlayMgr","ngeoNotification"],m.Controller_.prototype.toggle=function(){this.active_?this.deactivate_():this.activate_()},m.Controller_.prototype.activate_=function(){this.featureOverlay_.addFeature(this.positionFeature_),this.featureOverlay_.addFeature(this.accuracyFeature_),this.geolocation_.setTracking(!0),this.active_=!0},m.Controller_.prototype.deactivate_=function(){this.featureOverlay_.clear(),this.active_=!1,this.notification_.clear()},m.Controller_.prototype.setPosition_=function(e){var t=this.geolocation_.getPosition(),o=new d.a(t);this.positionFeature_.setGeometry(o),this.map_.getView().setCenter(t),void 0!==this.zoom_&&this.map_.getView().setZoom(this.zoom_),this.geolocation_.setTracking(!1)},m.controller("ngeoGeolocationDesktopController",m.Controller_);var w=m,F={};F.module=angular.module("app",["gettext",w.name,p.a.name]),F.MainController=function(e,t){var o=new s.c({image:new c.a({radius:6,fill:new l.a({color:"rgba(230, 100, 100, 1)"}),stroke:new u.a({color:"rgba(230, 40, 40, 1)",width:2})})}),p=new s.c({fill:new l.a({color:"rgba(100, 100, 230, 0.3)"}),stroke:new u.a({color:"rgba(40, 40, 230, 1)",width:2})});this.desktopGeolocationOptions={positionFeatureStyle:o,accuracyFeatureStyle:p,zoom:17},this.map=new n.a({layers:[new i.a({source:new a.b})],view:new r.a({center:[0,0],zoom:4})}),t.init(this.map)},F.MainController.$inject=["$scope","ngeoFeatureOverlayMgr"],F.module.controller("MainController",F.MainController);t.default=F},403:function(e,t,o){o(40),o(39),e.exports=o(328)},502:function(e,t){}});
//# sourceMappingURL=desktopgeolocation.697008.js.map