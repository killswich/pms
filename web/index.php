$app->get('/', function() use($app) {
    $app['monolog']->addDebug('logging output.');
//  return $app['require']->render('index.html', array(
//      'name' => "Name",
//  ));
    return file_get_contents('index.html');
});

$app->run();