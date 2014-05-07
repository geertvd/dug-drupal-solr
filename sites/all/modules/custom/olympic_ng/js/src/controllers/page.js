olympic_ng.app.controller('page', function($scope, search, $location) {
  $scope.results = {};
  $scope.total_results = 0;

  $scope.launchSearchEasySearch = function(){
    var promise = search.getResults();
    promise.then(function (result) {
      $scope.total_results = result.total_results;
      /** When the list is returned add to our view */
      $scope.results = result.data;
    });
  }

  $scope.launchSearchEasySearch();
});