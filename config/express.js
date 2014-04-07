var express = require('express'),
  swig = require('swig');


module.exports = function(app, config) {
  app.configure(function() {
    app.use(express.compress());
    app.use(express.static(config.root + '/public'));

    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', config.root + '/app/views');
    app.set('view cache', config.view.cache);
    swig.setDefaults({
      cache: config.view.cache,
      loader: swig.loaders.fs(config.root + '/app/views')
    });

    app.use(express.favicon(config.root + '/public/img/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function(req, res) {
      res.status(404).render('404', {
        title: '404'
      });
    });
  });
};
