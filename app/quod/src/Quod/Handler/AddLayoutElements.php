<?php namespace Quod\Handler;

use Pckg\Framework\View\Twig;

class AddLayoutElements
{

    public function handle(Twig $twig)
    {
        $twig->addData([
                           'sidebar' => view('sidebar'),
                           'footer'  => view('footer'),
                       ]);
    }

}