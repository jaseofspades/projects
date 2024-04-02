<?php

require "functions.php";
require "Database.php";
require "Response.php";
require "router.php";

// $config = require('config.php');

// $db = new Database(
//     config: $config['database'],
//     password: $config['database']['password']
// );

// $_GET accesses the information in the GET request
// Ex: URL: localhost:8888/?id=1 -> $_GET[id] === 1
// However, this is a massive vulnerability to allow an end user to directly
//  affect a query running in the database

// When accepting string from users, NEVER allow the user input to affect SQL queries directly
/**
 * Ex: Imagine if a user typed this: localhost:8888/?id=1; drop table users;
 * $id = $_GET['id'];
 * $post = $db->query("select * from posts where id = {$id}")->fetch();
 */
// This is called "SQL Injection"
// Instead, have the parameters BIND to the query and let SQL handle it


// $id = $_GET['id'];
// $query = "select * from posts where id = ?";

// $post = $db->query($query, [$id])->fetch();

// dd($post);

// $id = $_GET['id'];
// $query = "select * from posts where id = ?";

// $post = $db->query($query, [$id])->fetch();

// dd($post);
