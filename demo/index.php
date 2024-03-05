<?php

$books = [
    [
        'name' => 'My Head Hurts, What Do?',
        'author' => 'Dupon McWooble',
        'releaseYear' => 1999,
        'purchaseUrl' => 'http://example.com',
    ],
    [
        'name' => 'The Cookie And The Cream',
        'author' => 'Jeb Dongle',
        'releaseYear' => 2020,
        'purchaseUrl' => 'http://example.com',
    ],
    [
        'name' => 'Cooper, Maniacal Pooper',
        'author' => 'Johann Perriwinkle',
        'releaseYear' => 2011,
        'purchaseUrl' => 'http://example.com',
    ],
    [
        'name' => 'How Do I Shot Web?',
        'author' => 'Johann Perriwinkle',
        'releaseYear' => 2001,
        'purchaseUrl' => 'http://example.com',
    ],

];

function filter($items, $fn)
{
    $filteredItems = [];

    foreach ($items as $item) {
        if ($fn($item)) {
            $filteredItems[] = $item;
        }
    }

    return $filteredItems;
}

$filteredItems = filter($books, function ($book) {
    return $book['releaseYear'] >= 1950 && $book['releaseYear'] <= 2020;
});

require "index.view.php";
