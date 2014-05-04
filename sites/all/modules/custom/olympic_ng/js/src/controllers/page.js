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
  $scope.page = function(){
    return $scope.search.page + 1;
  };
  _.extend($scope.search, $location.search());

  $scope.launchSearch = function () {
    $scope.createUrlWithCurrentState();
    var promise = search.getResults({
      'search' : $scope.search.keyword,
      'year' : $scope.search.year
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


});