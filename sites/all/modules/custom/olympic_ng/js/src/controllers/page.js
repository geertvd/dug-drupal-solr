olympic_ng.app.controller('page', function($scope, search, $location) {
  // get the parameters from the url search query

  $scope.search = $location.search();
  $scope.results = {};
  $scope.total_results = 0;
  $scope.results_per_page = 10;
  $scope.search = {
    'keyword': '',
    'year': '',
    'page': 1
  }
  _.extend($scope.search, $location.search());
  $scope.page = $scope.search.page + 1;

  $scope.launchSearch = function () {
    $scope.createUrlWithCurrentState();
    var promise = search.getResults({
      'search' : $scope.search.keyword,
      'year' : $scope.search.year,
      'page' : $scope.search.page,
      'per_page' : $scope.results_per_page
    });

    promise.then(function (result) {
      console.log(result);
      $scope.total_results = result.total_results;
      /** When the list is returned add to our view */
      $scope.results = result.data;
    });
  }

  $scope.createUrlWithCurrentState = function () {
    $location.$search = {};
    _.each($scope.search, function (val, key) {
      if (val) {
        $location.search(key, val);
      }
    })
  }

  $scope.$watch('page', function(newValue, oldValue){
    if(newValue != oldValue){
      $scope.search.page = newValue - 1;
      $scope.launchSearch();
      $scope.createUrlWithCurrentState();
    }
  })


});