<?php

use Pckg\Framework\Provider;
use Pckg\Generic\Provider\GenericPaths;
use Quod\Controller\Quod as QuodController;

class Quod extends Provider
{

    public function providers()
    {
        return [
            GenericPaths::class,
        ];
    }

    public function routes()
    {
        return [
            new Pckg\Framework\Router\Route\Route('/', 'index', QuodController::class),
        ];
    }

}
