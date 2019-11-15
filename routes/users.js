var express = require('express');
var logger = require('../utils/logger');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ status: 'User Details' });
});

router.get('/:id', function (req, res, next) {
  logger.log({ level: 'info', message: `User Details request ${req.params.id}`, request: req.params });
  res.json({ status: `User ${req.params.id} Details` });
});

router.delete('/:id', function (req, res, next) {
  logger.log({ level: 'info', message: `User Details Delete request ${req.params.id}`, request: req.params });
  res.json({ status: 'User ${req.params.id} Details deleted' });
});

module.exports = router;
