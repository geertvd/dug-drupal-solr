<div id="olympicApp">
  <div ng-controller="page">

    <form ng-submit="launchSearch(true)">
      <input ng-model="searchInput">
      <button class="submit" type="submit"><?php print(t('Launch the search')); ?></button>
    </form>
    <ul class="list-group">
      <li class="list-group-item" ng-repeat="result in results" >
        <a target="_self" ng-href="{{result.url}}">
          <div>{{result.title}}</div>
          <div>{{result.age}}</div>
          <div>{{result.country}}</div>
        </a>
      </li>
    </ul>
    <div class="pagination-centered" ng-show="total_results >= results_per_page">
      <pagination total-items="total_results" ng-model="search.page" items-per-page="results_per_page"></pagination>
    </div>

  </div>
</div>