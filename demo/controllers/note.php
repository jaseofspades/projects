<?php

use Response;

$config = require('config.php');

$db = new Database(
    config: $config['database'],
    password: $config['database']['password']
);

$heading = 'Note';
$id = $_GET['id'];
$currentUserId = 1;

$note = $db->query("select * from notes where id = {$id}")->fetch();

if (!$note) {
    abort(Response::NOT_FOUND);
}

if ($note['user_id'] !== $currentUserId) {
    abort(Response::FORBIDDEN);
}

require "views/note.view.php";
