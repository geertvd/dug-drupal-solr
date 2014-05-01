<?php

class OlympianNodeMigration extends Migration {

  public function __construct($arguments) {
    $this->arguments = $arguments;
    parent::__construct();

    $headers = array(
      0 => array('Athlete', 'Athlete'),
      1 => array('Age', 'Age'),
      2 => array('Country', 'Country'),
      3 => array('Year', 'Year'),
      4 => array('Closing Ceremony Date', 'Closing Ceremony Date'),
      5 => array('Sport', 'Sport'),
      6 => array('Gold Medals', 'Gold Medals'),
      7 => array('Silver Medals', 'Silver Medals'),
      8 => array('Bronze Medals', 'Bronze Medals'),
      9 => array('Total Medals', 'Total Medals'),
    );

    $this->description = t('Import of Olympians.');
    $this->source = new MigrateSourceCSV(drupal_get_path('module', 'migrate_olympic') . '/csv/olympians.csv', $headers, array('delimiter' => ';', 'header_rows' => 1));

    $this->destination = new MigrateDestinationNode('olympian');

    // Source and destination relation for rollbacks
    $this->map = new MigrateSQLMap(
      $this->machineName,
      array(
        'Athlete' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
        ),
        'Age' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
        )
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('title', 'Athlete');
    $this->addFieldMapping('field_olympian_age', 'Age');
    $this->addFieldMapping('field_olympian_country', 'Country');
    $this->addFieldMapping('field_olympian_country:create_term')
      ->defaultValue(TRUE);
    $this->addFieldMapping('field_olympian_country:source_type')
      ->defaultValue('name');
    $this->addFieldMapping('field_olympian_year', 'Year');
    $this->addFieldMapping('field_olympian_sport', 'Sport');
    $this->addFieldMapping('field_olympian_sport:create_term')
      ->defaultValue(TRUE);
    $this->addFieldMapping('field_olympian_sport:source_type')
      ->defaultValue('name');
    $this->addFieldMapping('field_olympian_gold_medals', 'Gold Medals');
    $this->addFieldMapping('field_olympian_silver_medals', 'Silver Medals');
    $this->addFieldMapping('field_olympian_bronze_medals', 'Bronze Medals');
    $this->addFieldMapping('field_olympian_total_medals', 'Total Medals');
  }

}

