<?php


function migrate_olympic_migrate_api() {
  $api = array(
    'api' => 2,
    'migrations' => array(
      'OlympianNode' => array('class_name' => 'OlympianNodeMigration'),
    ),
  );
  return $api;
}
