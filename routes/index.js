var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Collection App' });
});

/* GET home page. */
router.get('/collection', function(req, res, next) {
  res.render('collection', { title: 'My Collection' });
});

module.exports = router;
