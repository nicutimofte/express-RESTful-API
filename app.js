/**
 * Created by alexandrutimofte on 1/5/2017.
 */
var express=require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app=express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api', bookRouter);

app.get('/',function(req,res){
    res.send("welcome to my api");
});

app.listen(port, function(){
    console.log('Gulp is running my app on PORT:' + port);
});
