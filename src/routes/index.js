import express from 'express';
import logger from '../utils/logger';
const router = express.Router();

router.use((req, res, next) => {
  logger.log({ level: 'info', message: 'Root Route Middleware called', request: req.body });
  next();
});

router.get('/', (req, res, next) => {
  res.json({ info: 'Root URL' });
});

router.get('/login', (req, res, next) => {
  logger.log({ level: 'info', message: 'Login URL requested', request: req.params });
  res.json({ info: 'Login URL' });
});

module.exports = router;
