'use strict';

const bus = require('./bus');
const fs = require('fs');
const monitoredPersons = require('../config.json').monitoredPersons;

fs.access('./presence.log', err => {
  if (err) {
    fs.writeFile('./presence.log', 'Eine Chronik der Feigheit:\n');
  }
});

function sniff(data) {
  for (const suspect of monitoredPersons) {
    if (suspect.userId === data.user) {
      fs.appendFile('./presence.log', new Date().toString() + ' : ' + suspect.userName + ' is '
        + data.presence.toString() + '\n');
    }
  }
}

bus.subscribe('presenceChange', data => {
  sniff(data);
});
