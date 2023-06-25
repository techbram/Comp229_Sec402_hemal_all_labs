// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let Book = require('../models/books');
let bookController = require('../controllers/book');


/* GET books List page. READ */
router.get('/', bookController.displayBookList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', bookController.displayAddPage);

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', bookController.processAddPage);

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', bookController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', bookController.processEditPage);

// Get to perform Deletion - DElETE Operation
router.get('/delete/:id', bookController.performDelete);

module.exports = router;
