import Log from '../models/log.model';

/**
 * Load log and append to req.
 */
function load(req, res, next, id) {
  Log.get(id)
    .then((log) => {
      req.log = log; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
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
  const log = new Log({
    uuid: req.body.uuid,
    machine: req.body.machine,
    machineHost: req.body.machineHost,
    logbook: req.body.logbook,
    severity: req.body.severity,
    value: req.body.value,
  });

  log.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

/**
 * Get log list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {Log[]}
 */
function list(req, res, next) {
  const { limit = 50000, skip = 0 } = req.query;
  Log.list({ limit, skip })
    .then(logs => res.json(logs))
    .catch(e => next(e));
}

/**
 * Delete log.
 * @returns {Log}
 */
function remove(req, res, next) {
  const log = req.log;
  log.remove()
    .then(deletedUser => res.json(deletedUser))
    .catch(e => next(e));
}

export default { load, get, create, list, remove };
