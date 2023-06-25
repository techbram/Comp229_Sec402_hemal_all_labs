let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Book = require('../models/books');


module.exports.displayBookList = async (req, res, next) => {
    try {
        let bookList = await Book.find();
        console.log(bookList);

        res.render('books/index', {
            title: 'Books', 
            BookList: bookList,
            displayName: req.user ? req.user.displayName : ''})
    } catch (err) {
        console.error(err);
    }
};

module.exports.displayAddPage = async (req, res, next) =>{
    try {
        res.render('books/add', {
            title: 'Add Book', 
            displayName: req.user ? req.user.displayName : ''})
    } catch (err) {
        console.error(err);
    }
};

module.exports.processAddPage = async (req, res, next) =>{
    let newBook = new Book({
        "Title": req.body.title,
        "Description": req.body.title,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    });

    try{
        await newBook.save();
        res.redirect('/books');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditPage = async (req, res, next) =>{
    let id = req.params.id;

    try {
        let bookToEdit = await Book.findById(id);
        res.render('books/details', {
            title: 'Edit Game', 
            book: bookToEdit, 
            displayName: req.user ? req.user.displayName : ''});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditPage = async (req, res, next) =>{
    let id = req.params.id;
    let updatedBook = {
        "Title": req.body.title,
        "Description": req.body.title,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    };

    try {
        await Book.updateOne({_id: id}, updatedBook);
        res.redirect('/books');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.performDelete = async (req, res, next) =>{
    let id = req.params.id;

    try {
        await Book.findByIdAndRemove(id);
        res.redirect('/books');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};