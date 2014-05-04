Olympic angular app
===========

Olympic angular app, is an app for searching the olimpyc database

Angular file structure
=====
angular templates : templates
angular app: js/src/app.js
angular controllers: js/src/*.js

nodejs (for development)
===========

- nodejs and npm

install and download node js: http://nodejs.org/

- grunt: npm install -g grunt-cli

Grunt is a javascript task runner.

- install needed dependencies


Grunt tasks
===========

- grunt watch

start a watch session for the olympic app

- grunt prod

compile the angular app for production

Warning
=======
- the src js files are not uses in the browsers, the watch task concats them to olympic_ng.js
- the angular libs are directly loaded in the theme html.tpl