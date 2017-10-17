'use strict';

const Reminder = require('reminder');
const cranefriend = require('./ronny.js');

const message = {
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

exports.remind = function (data) {
  const time = data.text.toLowerCase().split(' ')[1];
  console.log('reminding at: ' + time);
  message.msgString = 'Alles klar werde pünktlich beim :A5: sein!';
  //format "remind HH:MM name"
  const remind = new Reminder();

  remind.at(time, function () {
    message.msgString = 'Gehe jetzt schnell duschen.';
    cranefriend.send(message, data.channel);
  });
  return message;
};

exports.daIsDochNixBroken = function (data) {
  message.msgString = 'was heißt broken, es geht nur einfach nicht. ';
  setTimeout(function () {
    message.msgString = 'Broken is da nix.';
    cranefriend.send(message, data.channel);
  }, 1500);
  return message;
};
