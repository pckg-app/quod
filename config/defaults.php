<?php

return [
    'app'      => null,
    'domain'   => null,
    'title'    => null,
    'protocol' => 'http',
    'security' => [
        'hash' => '',
    ],
    'twig'     => [
        'cache'   => # requires composer doctrine/cache
            [
                'driver' => 'Cache\Lib\Doctrine\Common\Cache\PhpFileCache',
            ],
        'session' => [
            'enable' => true,
        ],
        'i18n'    => [
            'type'    => 'session',
            'default' => 'en_GB',
            'force'   => false,
            'langs'   => [
                'en_GB' => [
                    'id'   => 1,
                    'code' => 'en',
                ],
                'sl_SI' => [
                    'id'   => 2,
                    'code' => 'sl',
                ],
            ],
        ],
    ],
    'pckg'     => [
        'framework' => [
            'dev' => ['127.0.0.1'],
        ],
        'locale'    => [
            'default'  => 'en_GB',
            'language' => 'en',
            'timezone' => 'Europe/Ljubljana',
            'decimal'  => '.',
            'thousand' => ',',
            'format'   => [
                'date'       => 'd/m/Y',
                'time'       => 'H:i',
                'dateCarbon' => '%d %B %Y',
                'timeCarbon' => '',
            ],
        ],
    ],
];
