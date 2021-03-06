'use strict';

const SlackBot = require('slackbots');
const dict = require('./answer.js');
const CarstenStahl = require('./carsten-stahl');

const config = require('./config.js');

// create a bot
const bot = new SlackBot({
  token: config.botToken,
  name: 'Ronnie Schäfer'
});

const default_params = {
  as_user: true
};

exports.send = function (message, toChannel) {
  const params = {as_user: default_params.as_user};
  if (message.params) {
    for (const attrname in message.params) {
      params[attrname] = message.params[attrname];
    }
  }
  bot.postMessage(toChannel, message.msgString, params);
};

bot.on('start', function () {
  bot.postMessageToGroup('dev', 'BOT RUNNING', default_params, null);
});

bot.on('message', function (data) {

  console.log('=============================================');
  console.log(data);
  switch (data.type) {
    case 'presence_change': {
      CarstenStahl.sniff(data);
      break;
    }
    case 'message': {
      const toChannel = data.channel;
      if (toChannel && data.bot_id !== config.botId) {
        const msg = data.text.toLowerCase();
        dict.forEach(d => {
          if (d.keys.some(k => ~msg.indexOf(k))) {
            let message = d.message;
            const params = {as_user: default_params.as_user};
            if (typeof message === 'function')
              message = message(data);
            if (message.params) {
              for (const attrname in message.params) {
                params[attrname] = message.params[attrname];
              }
              message = message.msgString;
            }
            bot.postMessage(toChannel, message, params);
          }
        });
      }
    }
  }
});
