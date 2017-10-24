'use strict';

const bus = require('./bus');

bus.subscribe('log', data => {
  console.log('=============================================');
  console.log(data);
});
