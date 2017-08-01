'use strict';

var message = {
  msgString: 'Alles klar werde pünktlich beim :A5: sein!',
  params: {
    as_user: false,
    icon_emoji: ':derfickerx:',
    username: 'Chris'
  }
};

exports.safe = function () {
  message.msgString = 'Also safe?';
  return message;
};

exports.inverseSafe = function () {
  message.msgString = 'Hab ich da :A5: gehört?';
  return message;
};

var Reminder = require('reminder');
exports.remind = function (data) {
  message.msgString = 'Alles klar werde pünktlich beim :A5: sein!';
  //format
  var remind = new Reminder();
  var stringArr = data.text.toLowerCase().split(' ');
  remind.at(stringArr[1], function (date) {
    console.log('ich erinnere deine mum hart');
  });
  return message;
};
