1. SERVICES
===========

Solr Search service (minimal bootstrap):
----------------------------------------

Retrieves search results

URL: js/olympic/search/node/olympian
Request method: GET
Parameters:
- search | optional
- page | optional
- per_page | optional (default 10)
- sport | optional (tid)
- country | optional (tid)

Solr Search service (full bootstrap):
-------------------------------------

Retrieves search results

URL: menu/olympic/search/node/olympian
Request method: GET
Parameters:
- search | optional
- page | optional
- per_page | optional (default 10)
- sport | optional (tid)
- country | optional (tid)

Solr Search service (full bootstrap + database calls):
------------------------------------------------------

Retrieves search results

URL: database/olympic/search/node/olympian
Request method: GET
Parameters:
- search | optional
- page | optional
- per_page | optional (default 10)
- sport | optional (tid)
- country | optional (tid)

2. PERFORMANCE
==============

Apache benchmarks:

Using js.php:
  ab -n20 -c1 http://demo.local/js/olympic/search/node/olympian?per_page=10
  Requests per second:    7.64 [#/sec] (mean)
  Time per request:       130.876 [ms] (mean)

  ab -n20 -c1 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    3.87 [#/sec] (mean)
  Time per request:       258.708 [ms] (mean)

  ab -n20 -c1 http://demo.local/js/olympic/search/node/olympian?per_page=1000
  Requests per second:    0.69 [#/sec] (mean)
  Time per request:       1439.872 [ms] (mean)

  ab -n20 -c5 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    21.96 [#/sec] (mean)
  Time per request:       227.725 [ms] (mean)

  ab -n20 -c5 http://demo.local/js/olympic/search/node/olympian?per_page=1000
  Requests per second:    2.45 [#/sec] (mean)
  Time per request:       2037.141 [ms] (mean)

  ab -n200 -c20 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    28.28 [#/sec] (mean)
  Time per request:       707.190 [ms] (mean)

  ab -n200 -c50 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    26.76 [#/sec] (mean)
  Time per request:       1868.407 [ms] (mean)

Using index.php as usual:
  ab -n20 -c1 http://demo.local/menu/olympic/search/node/olympian?per_page=10
  Requests per second:    3.99 [#/sec] (mean)
  Time per request:       250.750 [ms] (mean)

  ab -n20 -c1 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    3.33 [#/sec] (mean)
  Time per request:       300.719 [ms] (mean)

  ab -n20 -c1 http://demo.local/menu/olympic/search/node/olympian?per_page=1000
  Requests per second:    0.65 [#/sec] (mean)
  Time per request:       1535.675 [ms] (mean)

  ab -n20 -c5 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    12.97 [#/sec] (mean)
  Time per request:       385.566 [ms] (mean)

  ab -n20 -c5 http://demo.local/menu/olympic/search/node/olympian?per_page=1000
  Requests per second:    2.18 [#/sec] (mean)
  Time per request:       2298.669 [ms] (mean)

  ab -n200 -c20 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    16.23 [#/sec] (mean)
  Time per request:       1232.203 [ms] (mean)

  ab -n200 -c50 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    16.85 [#/sec] (mean)
  Time per request:       2966.696 [ms] (mean)

Using index.php as usual (via database):
  ab -n20 -c1 http://demo.local/database/olympic/search/node/olympian?per_page=10
  Requests per second:    3.26 [#/sec] (mean)
  Time per request:       306.815 [ms] (mean)

  ab -n20 -c1 http://demo.local/database/olympic/search/node/olympian?per_page=100
  Requests per second:    1.49 [#/sec] (mean)
  Time per request:       671.108 [ms] (mean)

  ab -n20 -c1 http://demo.local/database/olympic/search/node/olympian?per_page=1000
  Requests per second:    0.19 [#/sec] (mean)
  Time per request:       5299.213 [ms] (mean)

