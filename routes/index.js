var express = require('express');
var logger = require('../utils/logger');
var router = express.Router();

router.use(function (req, res, next) {
  logger.log({ level: 'info', message: 'Root Route Middleware called', request: req.body });
  next();
});

router.get('/', function (req, res, next) {
  res.json({ info: 'Root URL' });
});

module.exports = router;
