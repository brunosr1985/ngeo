goog.provide('app.modal');

// webpack: import './modal.css';
/** @suppress {extraRequire} */
goog.require('ngeo.message.modalComponent');


/** @type {!angular.Module} **/
app.modal.module = angular.module('app', [
  'gettext',
  ngeo.message.modalComponent.name,
]);


/**
 * @constructor
 * @ngInject
 */
app.modal.MainController = function() {

  /**
   * @type {boolean}
   * @export
   */
  this.modalShown = false;
};


app.modal.module.controller('MainController', app.modal.MainController);
