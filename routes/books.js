var Book = require('../models/books');
var express = require('express');
var router = express.Router();

router.route('/books').get(function(req, res) {
  Book.find(function(err, books) {
    if (err) {
      return res.send(err);
    }
 
    res.json(books);
  });
});

router.route('/books').post(function(req, res) {
  var book = new Book(req.body);
 
  book.save(function(err) {
    if (err) {
      return res.send(err);
    }
 
    res.send({ message: 'Book Added' });
  });
});

router.route('/books/:id').put(function(req,res){
  Book.findOne({ _id: req.params.id }, function(err, book) {
    if (err) {
      return res.send(err);
    }
 
    for (prop in req.body) {
      book[prop] = req.body[prop];
    }
 
    // save the book
    book.save(function(err) {
      if (err) {
        return res.send(err);
      }
 
      res.json({ message: 'Book updated!' });
    });
  });
});

router.route('/books/:id').get(function(req, res) {
  Book.findOne({ _id: req.params.id}, function(err, book) {
    if (err) {
      return res.send(err);
    }
 
    res.json(book);
  });
});

router.route('/books/:id').delete(function(req, res) {
  Book.remove({
    _id: req.params.id
  }, function(err, book) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;