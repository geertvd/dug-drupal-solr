<?php
/*
 * The the olimpic search app page
 *
 */
function olympic_ng_search_page() {
  global $base_url;

  $path = drupal_get_path('module', 'olympic_ng');
  $full_path = $base_url . '/' . drupal_get_path('module', 'olympic_ng');
  $url = $base_url . '/js/olympic/search/node/olympian';

  // Generate the countries
  $countries_voc = taxonomy_vocabulary_machine_name_load('countries');

  $countries_tree = taxonomy_get_tree($countries_voc->vid);
  $countries = array();
  // Add the empty all variable first.
  foreach ($countries_tree as $country) {
    $term = taxonomy_term_load($country->tid);

    $countries[] = array(
      'tid' => $country->tid,
      'title' => $term->name
    );
  }
  $countries = json_encode($countries);


  // Generate the pillars
  $sports_voc = taxonomy_vocabulary_machine_name_load('sports');

  $sports_tree = taxonomy_get_tree($sports_voc->vid);
  $sports = array();
  // Add the empty all variable first.
  foreach($sports_tree as $sport){
    $term = taxonomy_term_load($sport->tid);
    $sports[] = array(
      'tid' => $sport->tid,
      'title' => $term->name
    );
  }
  $sports = json_encode($sports);

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
        url: "",
        sports: "",
        countries:""
    };
    olympic_ng.countries = ' . $countries . ';
    olympic_ng.sports = ' . $sports . ';
    olympic_ng.url = "' . $url . '";
    olympic_ng.path = "' . $full_path . '";', 'inline');

  // Now we add the olympic search app to the page.

  drupal_add_js($path . '/js/olympic_ng.js');

  // After loading the needed scripts we load our template with the angular app template markup.
  $content = theme('olympic_ng_search_page');

  return $content;
}