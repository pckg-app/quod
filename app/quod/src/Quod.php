<?php

use Pckg\Framework\Provider;
use Pckg\Framework\View\Event\RenderingView;
use Pckg\Generic\Provider\GenericPaths;
use Pckg\Manager\Middleware\RegisterCoreAssets;
use Pckg\Manager\Provider\Manager;
use Quod\Controller\Quod as QuodController;
use Quod\Handler\AddLayoutElements;

class Quod extends Provider
{

    public function providers()
    {
        return [
            GenericPaths::class,
            Manager::class,
        ];
    }

    public function listeners()
    {
        return [
            RenderingView::class => [
                AddLayoutElements::class,
            ],
        ];
    }

    public function routes()
    {
        return [
            new Pckg\Framework\Router\Route\Route('/', 'index', QuodController::class),
        ];
    }

    public function assets()
    {
        return [
            '/vendor/pckg/helpers-less/boot/_all.less',
            'less/quod.less',
        ];
    }

}
