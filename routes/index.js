var express = require('express');
var router = express.Router();

// var _data = [
// {	title: "Test",
// 	price: 2.65
// },
// {
// 	title: "Rocco Test",
// 	price: 6.99
// }
// ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Collection App' });
});

/* GET home page. */
router.get('/collection', function(req, res, next) {
  res.render('collection', { title: 'My Collection' });
});

// router.get('/api', function(req, res, next) {
//   res.json(_data);
// });

// router.post('/api', function(req, res, next) {
//   _data.push(req.body.data);
//   res.json(_data);
// });

module.exports = router;
