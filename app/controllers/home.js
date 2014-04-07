var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.index = function(req, res) {
  Article.find(function(err, articles) {
    if (err) throw new Error(err);
    res.render('home/index', {
      articles: articles
    });
  });
};

exports.create = function(req, res) {
  var article = new Article({
    title: 'My first blog post',
    url: '/my-first-blog-post',
    text: 'Welcome to my blog'
  });
  article.save(function(err) {
    if (err) res.send('Error saving article.');
    res.render('home/index', article);
  });
};
