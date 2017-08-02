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
var cranefriend = require('./ronny.js');

exports.remind = function (data) {
  var time = data.text.toLowerCase().split(' ')[1];
  console.log('reminding at: ' + time);
  message.msgString = 'Alles klar werde pünktlich beim :A5: sein!';
  //format "remind HH:MM name"
  var remind = new Reminder();

  remind.at(time, function (date) {
    message.msgString = 'Gehe jetzt schnell duschen.';
    cranefriend.send(message, data.channel);
  });
  return message;
};