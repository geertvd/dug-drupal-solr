<div id="olympicApp">
  <div ng-controller="page">

    <form ng-submit="launchSearch()">
      <input ng-model="search.keyword">
      <input ng-model="search.year">
      <button class="submit" type="submit"><?php print(t('Launch the search')); ?></button>
    </form>
    <ul>
      <li ng-repeat="result in results">
        <div>{{result.title}}</div>
      </li>
    </ul>
    <div class="pagination-centered">
      <pagination total-items="total_results" ng-model="page" items-per-page="results_per_page"></pagination>
    </div>
  </div>
</div>