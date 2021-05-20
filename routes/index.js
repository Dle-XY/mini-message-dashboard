var express = require('express');
var router = express.Router();

const messages = [
  {
    message: "Hi there!",
    author: "Amando",
    added: new Date()
  },
  {
    message: "Hello World!",
    author: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* GET home page. */
router.post('/new', function(req, res, next) {
  messages.push(
    {
      author: req.body.author,
      message: req.body.message,
      added: new Date()
    });
    res.redirect('/');
});

module.exports = router;
