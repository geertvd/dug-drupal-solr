olympic_ng.app.controller('page', function($scope, search, $location) {
  // get the parameters from the url search query

  $scope.search = $location.search();
  $scope.results = {};
  $scope.total_results = 0;
  $scope.results_per_page = 30;
  $scope.search = {
    'keyword': '',
    'year': '',
    'sport': '',
    'country': '',
    'page': 1
  }
  $scope.countries = olympic_ng.countries;
  $scope.sports = olympic_ng.sports;
  _.extend($scope.search, $location.search());


  $scope.searchInput = $scope.search.keyword;
  $scope.sport = _.findWhere($scope.sports, {tid: $scope.search.sport});
  $scope.country = _.findWhere($scope.countries, {tid: $scope.search.country});
  $scope.launchSearch = function (newSearch) {
    if (newSearch){
      $scope.search.keyword = $scope.searchInput;
      $scope.search.page = 1;
      var promise = search.getResults({
        'search' : $scope.search.keyword,
        'country' : $scope.search.country,
        'sport' : $scope.search.sport,
        'page' : 0,
        'per_page' : $scope.results_per_page
      });
    } else {
      var promise = search.getResults({
        'search' : $scope.search.keyword,
        'year' : $scope.search.year,
        'country' : $scope.search.country,
        'sport' : $scope.search.sport,
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
    console.log($scope.search);
    _.each($scope.search, function (val, key) {
      if (val) {
        $location.search(key, val);
      } else {
        $location.search(key, null);
      }
    })
  }

  $scope.$watch('search.page', function(newValue, oldValue){
    if(newValue != oldValue){
      $scope.launchSearch(false);
      $scope.createUrlWithCurrentState();
    }
  });

  $scope.$watch('sport', function(newValue, oldValue){
    if(newValue != oldValue){
      $scope.search.sport = newValue.tid;
      $scope.createUrlWithCurrentState();
      $scope.launchSearch(true);
    }
  }, true);

  $scope.$watch('country', function(newValue, oldValue){
    if(newValue != oldValue){
      $scope.search.country = newValue.tid;
      $scope.createUrlWithCurrentState();
      $scope.launchSearch(true);
    }
  }, true);
  $scope.$watch('searchInput', function(newValue, oldValue){
    if(newValue != oldValue){
      $scope.search.keyword = newValue;
      $scope.createUrlWithCurrentState();
      $scope.launchSearch(true);
    }
  }, true);
  $scope.launchSearch(false);

});