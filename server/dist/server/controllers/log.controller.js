'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = require('../models/log.model');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Load log and append to req.
 */
function load(req, res, next, id) {
  _log2.default.get(id).then(function (log) {
    req.log = log; // eslint-disable-line no-param-reassign
    return next();
  }).catch(function (e) {
    return next(e);
  });
}

/**
 * Get log
 * @returns {Log}
 */
function get(req, res) {
  return res.json(req.log);
}

/**
 * Create new log
 * @property {string} req.body.uuid - The uuid of the log.
 * @property {string} req.body.machine - The the name of the machine in which he log was generated.
 * @property {string} req.body.machineHost - The the host of the machine in which he log was generated.
 * @property {string} req.body.logbook - The logbook on which to store the log.
 * @property {string} req.body.severity - The the severity of the log.
 * @property {string} req.body.value - The value of the log (the message).
 * @returns {Log}
 */
function create(req, res, next) {
  var log = new _log2.default({
    uuid: req.body.uuid,
    machine: req.body.machine,
    machineHost: req.body.machineHost,
    logbook: req.body.logbook,
    severity: req.body.severity,
    value: req.body.value
  });

  log.save().then(function (savedUser) {
    return res.json(savedUser);
  }).catch(function (e) {
    return next(e);
  });
}

/**
 * Get log list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {Log[]}
 */
function list(req, res, next) {
  var _req$query = req.query,
      _req$query$limit = _req$query.limit,
      limit = _req$query$limit === undefined ? 50000 : _req$query$limit,
      _req$query$skip = _req$query.skip,
      skip = _req$query$skip === undefined ? 0 : _req$query$skip;

  _log2.default.list({ limit: limit, skip: skip }).then(function (logs) {
    return res.json(logs);
  }).catch(function (e) {
    return next(e);
  });
}

/**
 * Delete log.
 * @returns {Log}
 */
function remove(req, res, next) {
  var log = req.log;
  log.remove().then(function (deletedUser) {
    return res.json(deletedUser);
  }).catch(function (e) {
    return next(e);
  });
}

exports.default = { load: load, get: get, create: create, list: list, remove: remove };
module.exports = exports['default'];
//# sourceMappingURL=log.controller.js.map
