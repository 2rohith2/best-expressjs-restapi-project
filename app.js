var bodyParser = require('body-parser');
var createError = require('http-errors');
var compression = require('compression');
var express = require('express');
var helmet = require('helmet');
var path = require('path');
const winston = require('winston');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// CORS Setting
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, PATCH');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.disable('x-powered-by');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
