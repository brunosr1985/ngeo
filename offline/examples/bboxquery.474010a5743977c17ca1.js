webpackJsonp([27],{427:function(e,o,t){t(9),e.exports=t(428)},428:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t(429),t(11);h(t(84));var r=h(t(127)),n=h(t(201)),i=h(t(1)),a=h(t(18)),l=h(t(99)),u=h(t(312)),s=h(t(12)),c=h(t(19)),p=h(t(54)),m=h(t(16)),d=h(t(60)),f=h(t(5));function h(e){return e&&e.__esModule?e:{default:e}}var y={};y.module=angular.module("app",[i.default.module.name,r.default.module.name,a.default.name,l.default.name,u.default.name]),y.module.value("ngeoQueryOptions",{limit:20}),y.queryresultComponent={controller:"AppQueryresultController",controllerAs:"qrCtrl",templateUrl:"partials/queryresult.html"},y.module.component("appQueryresult",y.queryresultComponent),y.QueryresultController=function(e){this.result=e},y.QueryresultController.$inject=["ngeoQueryResult"],y.module.controller("AppQueryresultController",y.QueryresultController),y.MainController=function(e,o){this.queryActive=!0;var t=new p.default({source:new d.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"information"}})}),r=new p.default({source:new d.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"bus_stop"}})});this.map=new s.default({layers:[new m.default({source:new f.default}),t,r],view:new c.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:0})}),o.map=this.map,o.collection.push(new n.default({id:1,name:"bus_stop",visible:!0,wfsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"bus_stop",queryable:!0}]})),o.collection.push(new n.default({id:2,name:"information",visible:!0,wfsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"information",queryable:!0}]}))},y.MainController.$inject=["$scope","ngeoDataSources"],y.module.controller("MainController",y.MainController),o.default=y},429:function(e,o){},5:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t(0),n=t(6);const i=function(e){const o=e||{};let t;t=void 0!==o.attributions?o.attributions:[i.ATTRIBUTION];const r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",a=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:a,wrapX:o.wrapX})};Object(r.inherits)(i,n.a),i.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',o.default=i},6:function(e,o,t){"use strict";var r=t(0),n=t(21),i=t(20);const a=function(e){const o=e||{},t=void 0!==o.projection?o.projection:"EPSG:3857",r=void 0!==o.tileGrid?o.tileGrid:i.a.createXYZ({extent:i.a.extentFromProjection(t),maxZoom:o.maxZoom,minZoom:o.minZoom,tileSize:o.tileSize});n.a.call(this,{attributions:o.attributions,cacheSize:o.cacheSize,crossOrigin:o.crossOrigin,opaque:o.opaque,projection:t,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:o.tilePixelRatio,tileUrlFunction:o.tileUrlFunction,url:o.url,urls:o.urls,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition})};Object(r.inherits)(a,n.a),o.a=a}},[427]);
//# sourceMappingURL=bboxquery.474010a5743977c17ca1.js.map