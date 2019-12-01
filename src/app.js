import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import logger from './utils/logger';

import rootRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());

app.use('/', rootRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  logger.log({ level: 'error', message: 'API Not Found', request: req.url });
  res.json({ status: 'API Not Found' });
});

// error handler
app.use(function (err, req, res, next) {
  console.error('Error in Application', err);
});

module.exports = app;
