<?php

namespace demo\controllers;

use Database;
use Response;

$config = require('config.php');

$db = new Database(
    config: $config['database'],
    password: $config['database']['password']
);

$heading = 'Note';

$id = $_GET['id'];
$currentUserId = 1;

$note = $db->query("select * from notes where id = {$id}")->findOrFail();

authorize($note['user_id'] === $currentUserId);

require "views/notes/show.view.php";
