import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import logCtrl from '../controllers/log.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(logCtrl.list)

  /** POST /api/users - Create new user */
  .post(validate(paramValidation.createLog), logCtrl.create);

router.route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(logCtrl.get)

  /** DELETE /api/users/:userId - Delete user */
  .delete(logCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('userId', logCtrl.load);

export default router;
