const express = require('express');
const router = express.Router();

// Set pg config
const pg = require('pg');
const conString = 'postgres://postgres:postgres@localhost/item-catalog';

const client = new pg.Client(conString)
client.connect()
const prefix;

/* GET home page. */
router.get('/', (req, res, next) => {
    client.query('SELECT * FROM category', (err, result) => {
        // done();
        if (err) {
            console.log('Error running the query');
        }
        // Create an array to hold the categories retrieved from the db
        var categories = [];
        // Loop through the result and save the category name to categories
        for (var i = 0; i < result.rows.length; i++) {
            categories.push(result.rows[i]['name']);
        }
        // res.send(categories);
        res.render('index', { categories: categories });
        client.end();
    });
});

// Displays items in a specific category
router.get('/:category', function(req, res, next) {
    // req.params.category = 'games';
    prefix = "This page returns " //+ req.params.category
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