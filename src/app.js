import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import logger from 'Middlewares/logger';

import rootRouter from 'Routes/index';
import usersRouter from 'Routes/users';

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

app.use(function (req, res, next) {
  logger.log({ level: 'error', message: 'API Not Found', request: req.url });
  res.status(404).json({ status: 'API Not Found' });
});

app.use(function (err, req, res, next) {
  console.log('Got error', err.message);
});

module.exports = app;