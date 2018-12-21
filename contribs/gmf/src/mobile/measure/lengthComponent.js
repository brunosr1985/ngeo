/**
 * @module gmf.mobile.measure.lengthComponent
 */
import ngeoMiscFilters from 'ngeo/misc/filters.js';
import ngeoInteractionMeasureLengthMobile from 'ngeo/interaction/MeasureLengthMobile.js';
import {inherits as olUtilInherits} from 'ol/util.js';
import gmfMobileMeasureBaseComponent from 'gmf/mobile/measure/baseComponent.js';

const exports = angular.module('gmfMobileMeasureLength', [
  ngeoMiscFilters.name,
]);


exports.value('gmfMobileMeasureLengthTemplateUrl',
  /**
   * @param {angular.JQLite} element Element.
   * @param {angular.Attributes} attrs Attributes.
   * @return {string} The template url.
   */
  (element, attrs) => {
    const templateUrl = attrs['gmfMobileMeasureLengthTemplateurl'];
    return templateUrl !== undefined ? templateUrl :
      'gmf/measure/lengthComponent';
  });

exports.run(/* @ngInject */ ($templateCache) => {
  $templateCache.put(
    'gmf/measure/lengthComponent',
    require('./baseComponent.html')
  );
});


/**
 * Provide a directive to do a length measure on the mobile devices.
 *
 * Example:
 *
 *      <div gmf-mobile-measurelength
 *        gmf-mobile-measurelength-active="ctrl.measureLengthActive"
 *        gmf-mobile-measurelength-map="::ctrl.map">
 *      </div>
 *
 * @htmlAttribute {boolean} gmf-mobile-measurelength-active Used to active
 * or deactivate the component.
 * @htmlAttribute {number=} gmf-mobile-measurelength-precision the number of significant digits to display.
 * @htmlAttribute {ol.Map} gmf-mobile-measurelength-map The map.
 * @htmlAttribute {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction=}
 *     gmf-mobile-measurelength-sketchstyle A style for the measure length.
 * @param {string|function(!angular.JQLite=, !angular.Attributes=)}
 *     gmfMobileMeasureLengthTemplateUrl Template URL for the directive.
 * @return {angular.IDirective} The Directive Definition Object.
 * @ngInject
 * @ngdoc directive
 * @ngname gmfMobileMeasureLength
 */
function component(gmfMobileMeasureLengthTemplateUrl) {
  return {
    restrict: 'A',
    scope: {
      'active': '=gmfMobileMeasurelengthActive',
      'precision': '<?gmfMobileMeasurelengthPrecision',
      'map': '=gmfMobileMeasurelengthMap',
      'sketchStyle': '=?gmfMobileMeasurelengthSketchstyle'
    },
    controller: 'GmfMobileMeasureLengthController as ctrl',
    bindToController: true,
    templateUrl: gmfMobileMeasureLengthTemplateUrl,
    /**
     * @param {angular.IScope} scope Scope.
     * @param {angular.JQLite} element Element.
     * @param {angular.Attributes} attrs Attributes.
     * @param {gmf.mobile.measure.lengthComponent.Controller_} controller Controller.
     */
    link: (scope, element, attrs, controller) => {
      controller.init();
    }
  };
}


exports.directive('gmfMobileMeasurelength', component);


/**
 * @param {!angular.IScope} $scope Angular scope.
 * @param {!angular.IFilterService} $filter Angular filter
 * @param {!angular.gettext.gettextCatalog} gettextCatalog Gettext catalog.
 * @constructor
 * @private
 * @ngInject
 * @ngdoc controller
 * @ngname GmfMobileMeasureLengthController
 */
function Controller($scope, $filter, gettextCatalog) {

  gmfMobileMeasureBaseComponent.Controller.call(
    this,
    $scope,
    $filter,
    gettextCatalog
  );

  /**
   * @type {ngeo.interaction.MeasureLengthMobile}
   * @export
   */
  this.measure;
}

olUtilInherits(exports, gmfMobileMeasureBaseComponent.Controller);

/**
 * Initialise the controller.
 */
Controller.prototype.init = function() {

  this.measure = new ngeoInteractionMeasureLengthMobile(this.filter('ngeoUnitPrefix'), this.gettextCatalog, {
    precision: this.precision,
    sketchStyle: this.sketchStyle
  });

  gmfMobileMeasureBaseComponent.Controller.prototype.init.call(this);
};

/**
 * Add current sketch point to line measure
 * @export
 */
Controller.prototype.addPoint = function() {
  this.drawInteraction.addToDrawing();
};


/**
 * Clear the sketch feature
 * @export
 */
Controller.prototype.clear = function() {
  this.drawInteraction.clearDrawing();
};


/**
 * Finish line measure
 * @export
 */
Controller.prototype.finish = function() {
  this.drawInteraction.finishDrawing();
};


/**
 * Deactivate the directive.
 * @export
 */
Controller.prototype.deactivate = function() {
  this.active = false;
};


exports.controller('GmfMobileMeasureLengthController', Controller);


export default exports;