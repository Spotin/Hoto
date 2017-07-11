'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _paramValidation = require('../../config/param-validation');

var _paramValidation2 = _interopRequireDefault(_paramValidation);

var _log = require('../controllers/log.controller');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

router.route('/')
/** GET /api/users - Get list of users */
.get(_log2.default.list)

/** POST /api/users - Create new user */
.post((0, _expressValidation2.default)(_paramValidation2.default.createLog), _log2.default.create);

router.route('/:userId')
/** GET /api/users/:userId - Get user */
.get(_log2.default.get)

/** DELETE /api/users/:userId - Delete user */
.delete(_log2.default.remove);

/** Load user when API with userId route parameter is hit */
router.param('userId', _log2.default.load);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=log.route.js.map
