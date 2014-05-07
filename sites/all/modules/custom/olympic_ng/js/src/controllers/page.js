olympic_ng.app.controller('page', function($scope, search, $location) {
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

  $scope.launchSearchEasySearch = function(){

  }
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


  /* Taxonomy filters */

  $scope.countries = olympic_ng.countries;
  $scope.sports = olympic_ng.sports;

  /* Url search query*/

  // merge the existing querie with the parameters given from the url
  _.extend($scope.search, $location.search());

  $scope.createUrlWithCurrentState = function () {
    $location.$search = {};
    _.each($scope.search, function (val, key) {
      if (val) {
        $location.search(key, val);
      } else {
        $location.search(key, null);
      }
    })
  }



  /* Search input */

  // fill up the input fields with existing parameters
  $scope.searchInput = $scope.search.keyword;
  $scope.sport = _.findWhere($scope.sports, {tid: $scope.search.sport});
  $scope.country = _.findWhere($scope.countries, {tid: $scope.search.country});

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

  /* pagination */

  $scope.$watch('search.page', function(newValue, oldValue){
    if(newValue != oldValue){
      $scope.launchSearch(false);
      $scope.createUrlWithCurrentState();
    }
  });

  $scope.launchSearch(false);

});