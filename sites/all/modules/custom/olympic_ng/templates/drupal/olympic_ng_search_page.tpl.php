<div id="olympicApp">
  <div ng-controller="page">
    <form role="form" ng-submit="launchSearch(true)">
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
    <table class="table table-striped">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>Country</th>
        <th>Sport</th>
        <th>Bronze medals</th>
        <th>Silver medals</th>
        <th>Gold medals</th>
        <th>Total medals</th>
        <th>Year</th>
      </tr>
      </thead>
      <tbody>
      <tr ng-repeat="result in results" >
        <td>1</td>
        <td><a target="_self" ng-href="{{result.url}}">{{result.title}}</a></td>
        <td>{{result.age}}</td>
        <td>{{result.country}}</td>
        <td>{{result.sport}}</td>
        <td>{{result.bronze_medals}}</td>
        <td>{{result.silver_medals}}</td>
        <td>{{result.gold_medals}}</td>
        <td>{{result.total_medals}}</td>
        <td>{{result.year}}</td>
      </tr>
      </tbody>
    </table>
    <div class="pagination-centered" ng-show="total_results >= results_per_page">
      <pagination total-items="total_results" ng-model="search.page" items-per-page="results_per_page"></pagination>
    </div>
  </div>
</div>