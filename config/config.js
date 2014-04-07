var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development',
  app_name = 'myapp';

var config = {
  development: {
    root: rootPath,
    app: {
      name: app_name
    },
    view: {
      cache: false
    },
    port: 3000,
    db: 'mongodb://localhost/'+app_name+'-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'gdsales'
    },
    view: {
      cache: false
    },
    port: 3000,
    db: 'mongodb://localhost/'+app_name+'-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'gdsales'
    },
    view: {
      cache: false
    },
    port: 3000,
    db: 'mongodb://localhost/'+app_name+'-production'
  }
};

module.exports = config[env];
