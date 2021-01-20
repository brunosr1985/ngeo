// The MIT License (MIT)
//
// Copyright (c) 2018-2020 Camptocamp SA
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import './offline.css';
import './common_dependencies.js';
import olMap from 'ol/Map.js';

import olView from 'ol/View.js';
import TileLayer from 'ol/layer/Tile';
import WMTS from 'ol/source/WMTS';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import {get as getProjection} from 'ol/proj';
import {getWidth} from 'ol/extent';
import ngeoMapModule from 'ngeo/map/module.js';
import ngeoOfflineModule from 'ngeo/offline/module.js';
import ngeoOfflineConfiguration from 'ngeo/offline/Configuration.js';
import NgeoOfflineServiceManager from 'ngeo/offline/ServiceManager.js';
import angular from 'angular';

class MainController {
  /**
   * @param {import("ngeo/map/FeatureOverlayMgr.js").FeatureOverlayMgr} ngeoFeatureOverlayMgr
   * ngeo feature overlay manager service.
   * @param {import("ngeo/offline/NetworkStatus.js").default} ngeoNetworkStatus ngeo network status service.
   * @param {NgeoOfflineServiceManager} ngeoOfflineServiceManager ngeo offline service.
   * @ngInject
   */
  constructor(ngeoFeatureOverlayMgr, ngeoNetworkStatus, ngeoOfflineServiceManager) {
    /**
     * Save a square of 10 km sideways (Map's unit is the meter).
     * @type {number}
     * @export
     */
    this.offlineExtentSize = 10000;

    /**
     * @type {ngeoNetworkStatus}
     * @export
     */
    this.ngeoNetworkStatus = ngeoNetworkStatus;

    /**
     * @type {olMap}
     * @export
     */
    this.map = new olMap({
      layers: [
      ],
      view: new olView({
        center: [352379, 5172733],
        zoom: 4,
      }),
    });
    
    var resolutions = [];
    var matrixIds = [];
    var proj3857 = getProjection('EPSG:3857');
    var maxResolution = getWidth(proj3857.getExtent()) / 256;

    for (var i = 0; i < 18; i++) {
      matrixIds[i] = i.toString();
      resolutions[i] = maxResolution / Math.pow(2, i);
    }

    var tileGrid = new WMTSTileGrid({
      origin: [-20037508, 20037508],
      resolutions: resolutions,
      matrixIds: matrixIds,
    });

    // For more information about the IGN API key see
    // https://geoservices.ign.fr/blog/2017/06/28/geoportail_sans_compte.html

    var ign_source = new WMTS({
      url: 'https://wxs.ign.fr/pratique/geoportail/wmts',
      layer: 'GEOGRAPHICALGRIDSYSTEMS.MAPS',
      matrixSet: 'PM',
      format: 'image/jpeg',
      projection: 'EPSG:3857',
      tileGrid: tileGrid,
      style: 'normal',
      attributions:
        '<a href="http://www.ign.fr" target="_blank">' +
        '<img src="https://wxs.ign.fr/static/logos/IGN/IGN.gif" title="Institut national de l\'' +
        'information géographique et forestière" alt="IGN"></a>',
    });

    var ign = new TileLayer({
      source: ign_source,
    });

    this.map.addLayer(ign);


    ngeoFeatureOverlayMgr.init(this.map);

    ngeoOfflineServiceManager.setSaveService('offlineDownloader');
    ngeoOfflineServiceManager.setRestoreService('ngeoOfflineRestorer');
  }
}

/** @type {!angular.IModule} **/
MainController.module = angular.module('app', [
  'gettext',
  ngeoMapModule.name,
  ngeoOfflineModule.name,
  NgeoOfflineServiceManager.module.name,
]);

MainController.module.value('ngeoOfflineTestUrl', '../../src/offline/component.html');

// Define the offline download configuration service
ngeoOfflineModule.service('ngeoOfflineConfiguration', ngeoOfflineConfiguration);

MainController.module.controller('MainController', MainController);

export default MainController;
