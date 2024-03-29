<?php

/** 
 * NOTES:
 * 
 * Return keyword is not exclusive to function calls; can also work for files.
 */
return [
    'database' => [
        'host' => 'localhost:3306',
        'dbname' => 'myapp',
        'charset' => 'utf8mb4',
        'password' => 'ChipsAreDelicious123$%',  // This would obviously not be stored out in the open in production; would be tucked behind a secret instead
    ],


];
