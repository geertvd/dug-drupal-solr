<div id="olympicApp">
  <div ng-controller="page">
    <form role="form" ng-submit="launchSearch()">
      <div class="form-group">
        <label>Free text</label>
        <input class="form-control" ng-model="searchInput">
      </div>
      <div class="form-group">
        <label>Sport</label>
        <input class="form-control" ng-model="sport"  value="sport.title" typeahead="sport as sport.title for sport in sports | filter:$viewValue | limitTo:8">
      </div>
      <div class="form-group">
        <label>Country</label>
        <input class="form-control" ng-model="country" value="country.title" typeahead="country as country.title for country in countries | filter:$viewValue | limitTo:8">
      </div>
      <button class="submit btn btn-default" type="submit"><?php print(t('Launch the search')); ?></button>
    </form>
    <div ng-repeat="result in results" >
      {{result.title}}
    </div>
  </div>
</div>