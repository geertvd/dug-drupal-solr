olympic_ng.app.controller('page', function($scope, search, $location) {
  $scope.results = {};
  $scope.total_results = 0;

  $scope.launchSearch = function () {
    var promise = search.getResults({
      'search' : $scope.searchInput,
      'country' : $scope.country.tid,
      'sport' : $scope.sport.tid
    });

    promise.then(function (result) {
      $scope.total_results = result.total_results;
      /** When the list is returned add to our view */
      $scope.results = result.data;
    });
  }

  /* Taxonomy filters */

  $scope.countries = olympic_ng.countries;
  $scope.sports = olympic_ng.sports;

  /* Search input */
  $scope.searchInput = '';
  $scope.sport = '';
  $scope.country = '';

});