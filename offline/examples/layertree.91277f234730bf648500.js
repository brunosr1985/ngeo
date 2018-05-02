webpackJsonp([3],{110:function(e,t,r){r(111),e.exports="ngSanitize"},111:function(e,t){!function(e,t){"use strict";var r,n,o,i,a,s,l,u,c,p=t.$$minErr("$sanitize");t.module("ngSanitize",[]).provider("$sanitize",function(){var d=!1;this.$get=["$$sanitizeUri",function(e){return d&&n(T,w),function(t){var r=[];return u(t,c(r,function(t,r){return!/^unsafe:/.test(e(t,r))})),r.join("")}}],this.enableSvg=function(e){return i(e)?(d=e,this):d},r=t.bind,n=t.extend,o=t.forEach,i=t.isDefined,a=t.lowercase,s=t.noop,u=function(e,t){null===e||void 0===e?e="":"string"!=typeof e&&(e=""+e);var r=q(e);if(!r)return"";var n=5;do{if(0===n)throw p("uinput","Failed to sanitize html because the input is unstable");n--,e=r.innerHTML,r=q(e)}while(e!==r.innerHTML);for(var o=r.firstChild;o;){switch(o.nodeType){case 1:t.start(o.nodeName.toLowerCase(),S(o.attributes));break;case 3:t.chars(o.textContent)}var i;if(!((i=o.firstChild)||(1===o.nodeType&&t.end(o.nodeName.toLowerCase()),i=M("nextSibling",o))))for(;null==i&&(o=M("parentNode",o))!==r;)i=M("nextSibling",o),1===o.nodeType&&t.end(o.nodeName.toLowerCase());o=i}for(;o=r.firstChild;)r.removeChild(o)},c=function(e,t){var n=!1,i=r(e,e.push);return{start:function(e,r){e=a(e),!n&&C[e]&&(n=e),n||!0!==T[e]||(i("<"),i(e),o(r,function(r,n){var o=a(n),s="img"===e&&"src"===o||"background"===o;!0!==z[o]||!0===_[o]&&!t(r,s)||(i(" "),i(n),i('="'),i(O(r)),i('"'))}),i(">"))},end:function(e){e=a(e),n||!0!==T[e]||!0===f[e]||(i("</"),i(e),i(">")),e==n&&(n=!1)},chars:function(e){n||i(O(e))}}},l=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))};var h=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,m=/([^#-~ |!])/g,f=j("area,br,col,hr,img,wbr"),g=j("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),y=j("rp,rt"),v=n({},y,g),b=n({},g,j("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),x=n({},y,j("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),w=j("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),C=j("script,style"),T=n({},f,b,x,v),_=j("background,cite,href,longdesc,src,xlink:href,xml:base"),k=j("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),L=j("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),z=n({},_,L,k);function j(e,t){var r,n={},o=e.split(",");for(r=0;r<o.length;r++)n[t?a(o[r]):o[r]]=!0;return n}var q=function(e,t){var r;if(!t||!t.implementation)throw p("noinert","Can't create an inert html document");var n=((r=t.implementation.createHTMLDocument("inert")).documentElement||r.getDocumentElement()).querySelector("body");return n.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',n.querySelector("svg")?(n.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',n.querySelector("svg img")?function(t){t="<remove></remove>"+t;try{var r=(new e.DOMParser).parseFromString(t,"text/html").body;return r.firstChild.remove(),r}catch(e){return}}:function(e){return n.innerHTML=e,t.documentMode&&P(n),n}):function(t){t="<remove></remove>"+t;try{t=encodeURI(t)}catch(e){return}var r=new e.XMLHttpRequest;r.responseType="document",r.open("GET","data:text/html;charset=utf-8,"+t,!1),r.send(null);var n=r.response.body;return n.firstChild.remove(),n}}(e,e.document);function S(e){for(var t={},r=0,n=e.length;r<n;r++){var o=e[r];t[o.name]=o.value}return t}function O(e){return e.replace(/&/g,"&amp;").replace(h,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(m,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P(t){for(;t;){if(t.nodeType===e.Node.ELEMENT_NODE)for(var r=t.attributes,n=0,o=r.length;n<o;n++){var i=r[n],a=i.name.toLowerCase();"xmlns:ns1"!==a&&0!==a.lastIndexOf("ns1:",0)||(t.removeAttributeNode(i),n--,o--)}var s=t.firstChild;s&&P(s),t=M("nextSibling",t)}}function M(e,t){var r=t[e];if(r&&l.call(t,r))throw p("elclob","Failed to sanitize html because the element is clobbered: {0}",t.outerHTML||t.outerText);return r}}).info({angularVersion:"1.6.9"}),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var r=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,n=/^mailto:/i,o=t.$$minErr("linky"),i=t.isDefined,a=t.isFunction,l=t.isObject,u=t.isString;return function(t,p,d){if(null==t||""===t)return t;if(!u(t))throw o("notstring","Expected string but received: {0}",t);for(var h,m,f,g=a(d)?d:l(d)?function(){return d}:function(){return{}},y=t,v=[];h=y.match(r);)m=h[0],h[2]||h[4]||(m=(h[3]?"http://":"mailto:")+m),f=h.index,b(y.substr(0,f)),x(m,h[0].replace(n,"")),y=y.substring(f+h[0].length);return b(y),e(v.join(""));function b(e){var t,r;e&&v.push((t=e,c(r=[],s).chars(t),r.join("")))}function x(e,t){var r,n=g(e);for(r in v.push("<a "),n)v.push(r+'="'+n[r]+'" ');!i(p)||"target"in n||v.push('target="',p,'" '),v.push('href="',e.replace(/"/g,"&quot;"),'">'),b(t),v.push("</a>")}}}])}(window,window.angular)},148:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(3)),o=a(r(1)),i=a(r(149));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e,t,r,n){var o=this;this.scope=t.$new(!0),this.scope.$watch(function(){return o.scope.open},function(e){!e&&o.autoDestroy_&&o.timeout_(function(){o.destroy()})}),this.sce_=r,this.timeout_=n,this.element_=angular.element("<div ngeo-popup></div>"),this.autoDestroy_=!1,e(this.element_)(this.scope),angular.element(document.body).append(this.element_)};s.prototype.getOpen=function(){return this.scope.open},s.prototype.setOpen=function(e){this.scope.open=e},s.prototype.destroy=function(){this.scope.$destroy(),this.element_.remove()},s.prototype.setTitle=function(e){var t=this.sce_.trustAsHtml(e);this.scope.title=t},s.prototype.setContent=function(e,t){this.scope.content=t?this.sce_.trustAsHtml(e):e},s.prototype.setUrl=function(e){var t=this.sce_.trustAsHtml('<iframe src="'+e+'" width="100%" height="100%"></iframe>');this.setContent(t)},s.prototype.setWidth=function(e){this.element_.width(e)},s.prototype.setHeight=function(e){this.element_.height(e)},s.prototype.setSize=function(e,t){this.setWidth(e),this.setHeight(t)},s.prototype.setAutoDestroy=function(e){this.autoDestroy_=e},s.prototype.addClass=function(e){this.element_.addClass(e)},s.prototype.open=function(e){e.url?this.setUrl(e.url):e.content?this.setContent(e.content):n.default.fail('ngeo.message.Popup options requirest "url" or "content".'),void 0!==e.autoDestroy&&this.setAutoDestroy(e.autoDestroy),void 0!==e.cls&&this.addClass(e.cls),void 0!==e.height&&this.setHeight(e.height),void 0!==e.title&&this.setTitle(e.title),void 0!==e.width&&this.setWidth(e.width),this.setOpen(!0)},(s.Factory=function(e,t,r,n){return function(){return new s(e,t,r,n)}}).$inject=["$compile","$rootScope","$sce","$timeout"],(s.module=angular.module("ngeoCreatePopup",[i.default.name])).factory("ngeoCreatePopup",s.Factory),o.default.module.requires.push(s.module.name),t.default=s},149:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};r(110);var a=angular.module("ngeoPopup",["ngSanitize"]);i.default.module.requires.push(a.name),a.value("ngeoPopupTemplateUrl",function(e,t){var r=t.ngeoPopupTemplateurl;return void 0!==r?r:i.default.baseModuleTemplateUrl+"/message/popupcomponent.html"}),a.directive_=function(e){return{restrict:"A",templateUrl:e,link:function(e,t,r){t.addClass("popover"),e.close=function(e){e&&(e.stopPropagation(),e.preventDefault()),t.addClass("hidden")},e.$watch("open",function(e,r){t.css("display",e?"block":"none")})}}},a.directive_.$inject=["ngeoPopupTemplateUrl"],a.directive("ngeoPopup",a.directive_),t.default=a},477:function(e,t,r){r(9),e.exports=r(478)},478:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(479),r(11);var n=d(r(12)),o=d(r(19)),i=d(r(16)),a=d(r(5)),s=d(r(480)),l=d(r(1)),u=d(r(303)),c=d(r(18)),p=d(r(148));function d(e){return e&&e.__esModule?e:{default:e}}var h,m={};m.module=angular.module("app",[l.default.module.name,u.default.name,c.default.name,p.default.module.name]),m.layertreeComponent={bindings:{map:"=appLayertreeMap"},controller:"AppLayertreeController",controllerAs:"ctrl",template:'<div ngeo-layertree="::ctrl.tree" ngeo-layertree-templateurl="partials/layertree.html" ngeo-layertree-map="ctrl.map" ngeo-layertree-nodelayer="ctrl.getLayer(node)"></div>'},m.module.component("appLayertree",m.layertreeComponent),m.LayertreeController=function(e,t,r,n){var o=this;this.tree=void 0,e.get("data/tree.json").then(function(e){o.tree=e.data}),this.http_=e,this.sce_=t,this.getLayer_=r,this.infoPopup_=n(),this.promises_={}},m.LayertreeController.$inject=["$http","$sce","appGetLayer","ngeoCreatePopup"],m.LayertreeController.prototype.getLayer=function(e){return this.getLayer_(e)},m.LayertreeController.prototype.onButtonClick=function(e,t){var r=this,n=e.layerType;n in this.promises_||(this.promises_[n]=this.http_.get("data/metadata.html").then(function(e){return r.sce_.trustAsHtml(e.data)}));var o=this.infoPopup_;this.promises_[n].then(function(t){o.setTitle(e.name),o.setContent(t),o.setOpen(!0)})},m.module.controller("AppLayertreeController",m.LayertreeController),m.getLayer=(h={},function(e){if(!("layerType"in e))return null;var t=e.layerType;if(t in h)return h[t];var r=void 0;r="stamenWatercolor"==t?new s.default({layer:"watercolor"}):"stamenTerrain-labels"==t?new s.default({layer:"terrain-labels"}):"osmHumanitarian"==t?new a.default({url:"https://tile-{a-c}.openstreetmap.fr/hot/{z}/{x}/{y}.png"}):"osmCycle"==t?new a.default({url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png"}):"osmTransport"==t?new a.default({url:"https://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png"}):new a.default;var n=new i.default({source:r});return n.set("type",t),h[t]=n,n}),m.module.value("appGetLayer",m.getLayer),m.MainController=function(){this.map=new n.default({layers:[new i.default({source:new a.default})],view:new o.default({center:[-10983710.59086991,4686507.078220731],zoom:4})})},m.module.controller("MainController",m.MainController),t.default=m},479:function(e,t){},480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(5),i=r(6);const a=function(e){const t=e.layer.indexOf("-"),r=-1==t?e.layer:e.layer.slice(0,t),n=a.ProviderConfig[r],o=a.LayerConfig[e.layer],s=void 0!==e.url?e.url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/"+e.layer+"/{z}/{x}/{y}."+o.extension;i.a.call(this,{attributions:a.ATTRIBUTIONS,cacheSize:e.cacheSize,crossOrigin:"anonymous",maxZoom:void 0!=e.maxZoom?e.maxZoom:n.maxZoom,minZoom:void 0!=e.minZoom?e.minZoom:n.minZoom,opaque:o.opaque,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:s,wrapX:e.wrapX})};Object(n.inherits)(a,i.a),a.ATTRIBUTIONS=['Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.',o.default.ATTRIBUTION],a.LayerConfig={terrain:{extension:"jpg",opaque:!0},"terrain-background":{extension:"jpg",opaque:!0},"terrain-labels":{extension:"png",opaque:!1},"terrain-lines":{extension:"png",opaque:!1},"toner-background":{extension:"png",opaque:!0},toner:{extension:"png",opaque:!0},"toner-hybrid":{extension:"png",opaque:!1},"toner-labels":{extension:"png",opaque:!1},"toner-lines":{extension:"png",opaque:!1},"toner-lite":{extension:"png",opaque:!0},watercolor:{extension:"jpg",opaque:!0}},a.ProviderConfig={terrain:{minZoom:4,maxZoom:18},toner:{minZoom:0,maxZoom:20},watercolor:{minZoom:1,maxZoom:16}},t.default=a},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(6);const i=function(e){const t=e||{};let r;r=void 0!==t.attributions?t.attributions:[i.ATTRIBUTION];const n=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";o.a.call(this,{attributions:r,cacheSize:t.cacheSize,crossOrigin:n,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(n.inherits)(i,o.a),i.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=i},6:function(e,t,r){"use strict";var n=r(0),o=r(21),i=r(20);const a=function(e){const t=e||{},r=void 0!==t.projection?t.projection:"EPSG:3857",n=void 0!==t.tileGrid?t.tileGrid:i.a.createXYZ({extent:i.a.extentFromProjection(r),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});o.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:r,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(n.inherits)(a,o.a),t.a=a}},[477]);
//# sourceMappingURL=layertree.91277f234730bf648500.js.map