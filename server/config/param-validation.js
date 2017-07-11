import Joi from 'joi';

export default {
  // POST /api/users
  createLog: {
    body: {
      uuid: Joi.string().required(),
      machine: Joi.string().required(),
      machineHost: Joi.string().required(),
      logbook: Joi.string().required(),
      severity: Joi.string().regex(/^(debug|info|error|fatal|warn)$/).required(),
      value: Joi.string().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
