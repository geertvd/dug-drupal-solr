<div id="olympicApp">
  <div ng-controller="page">
    <form role="form" ng-submit="launchSearchEasySearch()">
      <div class="form-group">
        <label>Free text</label>
        <input class="form-control" ng-model="searchInput">
      </div>
      <button class="submit btn btn-default" type="submit"><?php print(t('Launch the search')); ?></button>
    </form>
    <div ng-repeat="result in results" >
      {{result.title}}
    </div>
  </div>
</div>