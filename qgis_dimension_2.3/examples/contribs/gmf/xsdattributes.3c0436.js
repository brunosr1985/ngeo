!function(t){function e(e){for(var n,a,u=e[0],l=e[1],s=e[2],f=0,p=[];f<u.length;f++)a=u[f],o[a]&&p.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(c&&c(e);p.length;)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,u=1;u<r.length;u++){var l=r[u];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={1:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=l;i.push([400,0]),r()}({399:function(t,e,r){"use strict";r.r(e);r(543);var n=r(19),o=r(185),i=r(230),a=r(146),u=r(21),l=(r(613),{});l.module=angular.module("gmfapp",["gettext",o.a.module.name,n.a.module.name,i.a.name]),l.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),l.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/layers/"),l.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),l.MainController=function(t,e,r){var n=this;this.timeout_=t,this.xsdAttributes_=r,this.attributes=null,this.feature=null,this.layers=[];var o=["line","point","polygon"];e.loadThemes(),e.getThemesObject().then(function(t){if(t){var e=[];t.forEach(function(t){t.children.forEach(function(t){n.getDistinctFlatNodes_(t,e)})}),e.forEach(function(t){void 0===t.children&&-1!==o.indexOf(t.name)&&n.layers.push(t)})}})},l.MainController.$inject=["$timeout","gmfThemes","gmfXSDAttributes"],l.MainController.prototype.getSetLayers=function(t){var e=this;return void 0!==t&&null!==t&&this.xsdAttributes_.getAttributes(t.id).then(function(t){return e.setAttributes_(t)}),this.layers},l.MainController.prototype.setAttributes_=function(t){var e=this;this.feature=null,this.attributes=null,this.timeout_(function(){e.feature=new u.a,e.attributes=t},0)},l.MainController.prototype.getGeomType=function(){var t="N/A";if(this.attributes){var e=a.a.getGeometryAttribute(this.attributes);e&&e.geomType&&(t=e.geomType)}return t},l.MainController.prototype.getDistinctFlatNodes_=function(t,e){var r=void 0,n=t.children;if(void 0!==n)for(r=0;r<n.length;r++)this.getDistinctFlatNodes_(n[r],e);var o=!1;e.some(function(e){if(e.id===t.id)return o=!0}),o||e.push(t)},l.module.controller("MainController",l.MainController),e.default=l},400:function(t,e,r){r(61),r(60),t.exports=r(399)},543:function(t,e){}});
//# sourceMappingURL=xsdattributes.3c0436.js.map