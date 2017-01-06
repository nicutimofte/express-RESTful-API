/**
 * Created by alexandrutimofte on 1/6/2017.
 */

var express = require('express');

var routes = function(Book){
    var bookRouter = express.Router();

    bookRouter.route('/Books')
        .post(function(req,res){
            var book = new Book(req.body);
            book.save();
            console.log(book);
            res.status(201).send(book);
        })
        .get(function(req,res){

            var query = {};
            if(req.query.genre){
                query.genre=req.query.genre;
            }
            Book.find(function(err,books){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(books);
                }
            });
        });

    bookRouter.route('/Books/:bookId')
        .get(function(req,res){
            Book.findById(req.params.bookId, function(err,book){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(book);
                }
            });
        });
    return bookRouter;
};

module.exports = routes;