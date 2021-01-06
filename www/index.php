<?php

/**
 * Simply require production entry point, framework will take care of things.
 */
//define('__ROOT__', rtrim($_SERVER['DOCUMENT_ROOT'] ?? dirname(dirname(__FILE__)), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR);
define('__ROOT__', '/var/www/html/');
require_once __ROOT__ . "vendor/pckg/framework/src/production.php";
