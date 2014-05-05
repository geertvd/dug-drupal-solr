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
  Requests per second:    5.08 [#/sec] (mean)
  Time per request:       196.928 [ms] (mean)

  ab -n20 -c1 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    4.06 [#/sec] (mean)
  Time per request:       246.379 [ms] (mean)

  ab -n20 -c1 http://demo.local/js/olympic/search/node/olympian?per_page=1000
  Requests per second:    0.67 [#/sec] (mean)
  Time per request:       1484.504 [ms] (mean)

  ab -n20 -c5 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    16.29 [#/sec] (mean)
  Time per request:       306.979 [ms] (mean)

  ab -n20 -c5 http://demo.local/js/olympic/search/node/olympian?per_page=1000
  Requests per second:    2.25 [#/sec] (mean)
  Time per request:       2222.426 [ms] (mean)

  ab -n200 -c20 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    21.64 [#/sec] (mean)
  Time per request:       924.283 [ms] (mean)

  ab -n200 -c50 http://demo.local/js/olympic/search/node/olympian?per_page=100
  Requests per second:    20.92 [#/sec] (mean)
  Time per request:       2390.580 [ms] (mean)

Using index.php as usual:
  ab -n20 -c1 http://demo.local/menu/olympic/search/node/olympian?per_page=10
  Requests per second:    3.67 [#/sec] (mean)
  Time per request:       272.170 [ms] (mean)

  ab -n20 -c1 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    3.10 [#/sec] (mean)
  Time per request:       322.740 [ms] (mean)

  ab -n20 -c1 http://demo.local/menu/olympic/search/node/olympian?per_page=1000
  Requests per second:    0.65 [#/sec] (mean)
  Time per request:       1540.174 [ms] (mean)

  ab -n20 -c5 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    12.37 [#/sec] (mean)
  Time per request:       404.351 [ms] (mean)

  ab -n20 -c5 http://demo.local/menu/olympic/search/node/olympian?per_page=1000
  Requests per second:    2.18 [#/sec] (mean)
  Time per request:       2296.778 [ms] (mean)

  ab -n200 -c20 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    16.05 [#/sec] (mean)
  Time per request:       1246.365 [ms] (mean)

  ab -n200 -c50 http://demo.local/menu/olympic/search/node/olympian?per_page=100
  Requests per second:    15.54 [#/sec] (mean)
  Time per request:       3217.548 [ms] (mean)

Using index.php as usual (via database):
  ab -n20 -c1 http://demo.local/database/olympic/search/node/olympian?per_page=10
  Requests per second:    3.11 [#/sec] (mean)
  Time per request:       321.085 [ms] (mean)

  ab -n20 -c1 http://demo.local/database/olympic/search/node/olympian?per_page=100
  Requests per second:    1.49 [#/sec] (mean)
  Time per request:       672.180 [ms] (mean)

  ab -n20 -c1 http://demo.local/database/olympic/search/node/olympian?per_page=1000
  Requests per second:    0.18 [#/sec] (mean)
  Time per request:       5458.538 [ms] (mean)

