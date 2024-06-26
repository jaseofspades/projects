<?php

$routes = require('routes.php');

function routeToController($uri, $routes)
{
    if (array_key_exists($uri, $routes)) {
        require $routes[$uri];
    } else {
        abort();
    }
}

/**
 * Re-directs to the 404 error page by default.
 */
function abort($statusCode = 404)
{
    http_response_code($statusCode);

    require "views/{$statusCode}.php";

    die();
}

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

routeToController($uri, $routes);
