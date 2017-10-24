'use strict';

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

exports.publish = function (topic, data) {
  myEmitter.emit(topic, data);
};

exports.subscribe = function (topic, data) {
  myEmitter.on(topic, data);
};

