'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // POST /api/users
  createLog: {
    body: {
      uuid: _joi2.default.string().required(),
      machine: _joi2.default.string().required(),
      machineHost: _joi2.default.string().required(),
      logbook: _joi2.default.string().required(),
      severity: _joi2.default.string().regex(/^(debug|info|error|fatal|warn)$/).required(),
      value: _joi2.default.string().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: _joi2.default.string().required(),
      password: _joi2.default.string().required()
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=param-validation.js.map
