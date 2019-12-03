import express from 'express';
import logger from 'Utils/logger';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ status: 'User Details' });
});

router.get('/:id', (req, res, next) => {
  logger.log({ level: 'info', message: `User Details request ${req.params.id}`, request: req.params });
  res.json({ status: `User ${req.params.id} Details` });
});

router.delete('/:id', (req, res, next) => {
  logger.log({ level: 'info', message: `User Details Delete request ${req.params.id}`, request: req.params });
  res.json({ status: `User ${req.params.id} Details deleted` });
});

module.exports = router;