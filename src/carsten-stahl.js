'use strict';

const config = require('../config.json');
const fs = require('fs');
const monitoredPersons = config.monitoredPersons;

fs.access('./presence.log', err => {
  if (err) {
    fs.writeFile('./presence.log', 'Eine Chronik der Feigheit:\n');
  }
});

exports.sniff = function (data) {
  for (const suspect of monitoredPersons) {
    if (suspect.userId == data.user) {
      fs.appendFile('./presence.log', new Date().toString() + ' : ' + suspect.userName + ' is '
        + data.presence.toString() + '\n');
    }
  }
};
