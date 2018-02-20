var express = require('express');
var router = express.Router();

// Set pg config
var pg = require('pg');
var prefix;

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { category: 'Express' });
});

// Displays items in a specific category
router.get('/:category', function(req, res, next) {
    req.params.category = 'games';
    prefix = "This page returns " + req.params.category
    res.render('index', { prefix: prefix });
});

// Adds a new category
router.post('/add-category', function(req, res, next) {
    // res.render('index', { category: 'Express' });
});

// Edits a category
router.put(':category/edit-category', function(req, res, next) {
    // res.render('index', { category: 'Express' });
});

// Deletes a category
router.delete(':category/delete-category', function(req, res, next) {
    // res.render('index', { category: 'Express' });
});

// Adds an item to a category
router.post(':category/add-item', function(req, res, next) {
    // res.render('index', { category: 'Express' });
});

// Edits an item in a category
router.put(':category/:item/edit-item', function(req, res, next) {
    // res.render('index', { category: 'Express' });
});

// Deletes an item from a category
router.delete(':category/:item/delete-item', function(req, res, next) {
    // res.render('index', { category: 'Express' });
});


module.exports = router;