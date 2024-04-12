<?php

use Core\Database;

$config = require('config.php');

$db = new Database(
    config: $config['database'],
    password: $config['database']['password']
);

$heading = 'My Notes';

$notes = $db->query('select * from notes where user_id = 1')->get();

require "views/notes/index.view.php";
