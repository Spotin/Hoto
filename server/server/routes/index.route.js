import express from 'express';
import logRoutes from './log.route';
import authRoutes from './auth.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/logs', logRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

export default router;
