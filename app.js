var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var giftRouter = require('./routes/gift');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');


var gift = require("./models/gift");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gift', giftRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await gift.deleteMany();
let instance1 = new
gift({gift_name:"Diamond", numof_gifts:1,
gift_value:"Most Valuable"});
instance1.save().then(doc=> {
//if(err) return console.error(err);
console.log("First object saved")}
).catch(err=>{
  console.error(err)})

let instance2 = new
gift({gift_name:"Gold", numof_gifts:2,
gift_value:"More Valuable"});
instance2.save().then(doc=> {
//if(err) return console.error(err);
console.log("First object saved")}
).catch(err=>{
  console.error(err)})
let instance3 = new
gift({gift_name:"Car", numof_gifts:1,
gift_value:"Valuable"});
instance3.save().then(doc=> {
//if(err) return console.error(err);
console.log("First object saved")}
).catch(err=>{
  console.error(err)
})
}
let reseed = false;
if (reseed) { recreateDB();}

module.exports = app;
