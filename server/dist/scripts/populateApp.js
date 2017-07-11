'use strict';

var request = require('request');
var _ = require('lodash');
var uuid = require('uuid');
var async = require('async');

var args = process.argv.slice(2);

var logs = [{
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices 5",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices 5",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "fatal",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices 4",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "fatal",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices 4",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices 2",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices 2",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices 2",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "error",
  "value": "offload to child microservice ATH successful"
}, {
  "machine": "Payment Microservices 2",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "warn",
  "value": "offload to child microservice ATH successful"
}];

function uploadEverything() {
  // assuming openFiles is an array of file names
  async.each(logs, function (log, callback1) {
    log.uuid = uuid.v4();
    setTimeout(function () {
      request({
        url: args[0] + '/api/logs',
        method: 'POST',
        json: log
      }, function (error, response, body) {
        if (error) return console.log(error);
        console.log('done');
        callback1();
      });
    }, 4000);
  });
}

uploadEverything();
//# sourceMappingURL=populateApp.js.map
