olympic_ng.app = angular.module('olympicSearch', ['ui.bootstrap']);

olympic_ng.app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}])

jQuery(document).ready(function() {
  /**
   * We are initialization the angular app by hand and not with the Automatic Initialization.
   * The reason for this is that we are loading multiple angular apps on one page and
   * the Automatic Initialization can only handle 1 app per page.
   *
   * @link http://docs.angularjs.org/guide/bootstrap
   */
  angular.bootstrap(document.getElementById("olympicApp"),['olympicSearch']);
});
