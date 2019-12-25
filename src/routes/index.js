import express from 'express';
import logger from 'Middlewares/logger';
const router = express.Router();

router.get('/', (req, res, next) => {
  throw new Error('catch this error');
});

router.get('/login', (req, res, next) => {
  logger.log({ level: 'info', message: 'Login URL requested', request: req.params });
  res.json({ info: 'Login URL' });
});

module.exports = router;