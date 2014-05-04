olympic_ng.app.controller('page', function($scope, search, $location) {
  // get the parameters from the url search query

  $scope.search = $location.search();
  $scope.results = {};
  $scope.total_results = 0;
  $scope.results_per_page = 30;
  $scope.search = {
    'keyword': '',
    'year': '',
    'page': 1
  }

  _.extend($scope.search, $location.search());

  $scope.searchInput = $scope.search.keyword;
  $scope.launchSearch = function (newSearch) {
    if (newSearch){
      $scope.search.keyword = $scope.searchInput;
      $scope.search.page = 1;
      var promise = search.getResults({
        'search' : $scope.search.keyword,
        'year' : $scope.search.year,
        'page' : 0,
        'per_page' : $scope.results_per_page
      });
    } else {
      var promise = search.getResults({
        'search' : $scope.search.keyword,
        'year' : $scope.search.year,
        'page' : parseInt($scope.search.page) - 1,
        'per_page' : $scope.results_per_page
      });
    }

    $scope.createUrlWithCurrentState();
    promise.then(function (result) {
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

  $scope.$watch('search.page', function(newValue, oldValue){
    if(newValue != oldValue){
      $scope.launchSearch(false);
      $scope.createUrlWithCurrentState();
    }
  })
  $scope.$watchCollection('search', function(newValue, oldValue){
    if(newValue != oldValue){
      $scope.createUrlWithCurrentState();
    }
  })
  $scope.launchSearch(false);

});