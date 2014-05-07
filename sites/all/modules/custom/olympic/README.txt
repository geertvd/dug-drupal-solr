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

  ab -n20 -c1 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    4.06 [#/sec] (mean)
  Time per request:       246.379 [ms] (mean)

  ab -n20 -c5 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    16.29 [#/sec] (mean)
  Time per request:       306.979 [ms] (mean)

  ab -n200 -c20 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    21.64 [#/sec] (mean)
  Time per request:       924.283 [ms] (mean)

  ab -n200 -c50 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    20.92 [#/sec] (mean)
  Time per request:       2390.580 [ms] (mean)

  ab -n500 -c50 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    26.34 [#/sec] (mean)
  Time per request:       1898.270 [ms] (mean)

  ab -n1000 -c100 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    24.98 [#/sec] (mean)
  Time per request:       4003.347 [ms] (mean)

Using index.php as usual:

  ab -n20 -c1 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    3.10 [#/sec] (mean)
  Time per request:       322.740 [ms] (mean)

  ab -n20 -c5 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    12.37 [#/sec] (mean)
  Time per request:       404.351 [ms] (mean)

  ab -n200 -c20 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    16.05 [#/sec] (mean)
  Time per request:       1246.365 [ms] (mean)

  ab -n200 -c50 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    15.54 [#/sec] (mean)
  Time per request:       3217.548 [ms] (mean)

  ab -n500 -c50 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    16.64 [#/sec] (mean)
  Time per request:       3004.471 [ms] (mean)

  ab -n1000 -c100 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    15.56 [#/sec] (mean)
  Time per request:       6426.665 [ms] (mean)

Using index.php as usual (via database):

  ab -n20 -c1 http://demo.local/database/olympic/search/node/olympian?per_page=100
  Requests per second:    1.49 [#/sec] (mean)
  Time per request:       672.180 [ms] (mean)

  ab -n20 -c5 http://demo.local/database/olympic/search/node/olympian?per_page=100
  Requests per second:    4.77 [#/sec] (mean)
  Time per request:       1047.222 [ms] (mean)

  ab -n200 -c20 http://demo.local/database/olympic/search/node/olympian?per_page=100
  Requests per second:    7.61 [#/sec] (mean)
  Time per request:       2628.342 [ms] (mean)

  ab -n200 -c50 http://demo.local/database/olympic/search/node/olympian?per_page=100
  Requests per second:    7.45 [#/sec] (mean)
  Time per request:       6711.390 [ms] (mean)

  ab -n500 -c50 http://demo.local/database/olympic/search/node/olympian?per_page=100
  Requests per second:    7.26 [#/sec] (mean)
  Time per request:       6882.535 [ms] (mean)

  ab -n1000 -c100 http://demo.local/database/olympic/search/node/olympian?per_page=100
  Requests per second:    7.16 [#/sec] (mean)
  Time per request:       13961.044 [ms] (mean)