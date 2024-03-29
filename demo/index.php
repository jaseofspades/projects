<?php

require "functions.php";
require "Database.php";
// require "router.php";

$config = require('config.php');

$db = new Database(
    config: $config['database'],
    password: $config['database']['password']
);

$post = $db->query("select * from posts where id = 1")->fetch();

// dd($post);
