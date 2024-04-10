<?php

namespace demo\controllers;

use Database;

$config = require('config.php');
$db = new Database(
    config: $config['database'],
    password: $config['database']['password']
);

$heading = 'Create Note';

const MAXIMUM_CHAR_LENGTH = 1000;

/**
 * Considering how a user can affect what can be included in the POST request, we need to find 
 * a way to sanitize user input before it's stored and displayed anywhere on our page.
 */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $errors = [];

    // Submission criteria: Body cannot be empty
    if (strlen($_POST['body']) === 0) {
        $errors['body'] = 'A note body is required.';
    }

    // Submission criteria: Body cannot exceed maximum length
    if (strlen($_POST['body']) > MAXIMUM_CHAR_LENGTH) {
        $errors['body'] = 'A note body cannot be more than ' . (string) MAXIMUM_CHAR_LENGTH . ' characters.';
    }

    if (empty($errors)) {
        $db->query('INSERT INTO notes(body, user_id) VALUES(:body, :userId)', [
            'body' => $_POST['body'],
            'userId' => 1, // TODO: This needs to be the userId of the current user submitting the request
        ]);
    }
}

require 'views/noteCreate.view.php';
