<?php
/*
 * The the olimpic search app page
 *
 */
function olympic_ng_search_page() {
  global $base_url;

  $path = drupal_get_path('module', 'olympic_ng');
  $full_path = $base_url . '/' . drupal_get_path('module', 'olympic_ng');
  $url = $base_url . '/menu/olympic/search/node/olympian';

  libraries_load('underscore');
  drupal_add_library('underscore', 'underscore');
  drupal_add_library('angularjs', 'angularjs');

  // First we declare our olympic app global object
  // This object will contain our configuration and the angular app
  drupal_add_js('
    var olympic_ng = {
        path : "",
        lang : "",
        app: "",
        url: ""
    };
    olympic_ng.url = "' . $url . '";
    olympic_ng.path = "' . $full_path . '";' , 'inline');

  // Now we add the olympic search app to the page.

  drupal_add_js($path . '/js/olympic_ng.js');

  // After loading the needed scripts we load our template with the angular app template markup.
  $content = theme('olympic_ng_search_page');

  return $content;
}