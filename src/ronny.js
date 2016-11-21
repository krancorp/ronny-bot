'use strict';

const SlackBot = require('slackbots');
const dict = require('./answer.js');

const config = require('../config.json');

// create a bot
const bot = new SlackBot({
  token: config.apiToken,
  name: 'Ronnie Schäfer'
});

const params = {
  as_user: true
};

bot.on('start', function(data) {
  bot.postMessageToGroup('dev', 'BOT RUNNING', params);
});

bot.on('message', function(data) {

  console.log('=============================================');
  console.log(data);

  switch (data.type) {
    case 'message':
      {
        var toChannel = data.channel;
        if (toChannel && data.subtype !== 'bot_message'
          && data.user !== 'U2XGJM07P') {
          var msg = data.text.toLowerCase();
          dict.forEach(d => {
            if (d.keys.some(k => ~msg.indexOf(k))) {
              var message = d.message;
              if (typeof message === 'function')
                message = message();
              bot.postMessage(toChannel, message, params);
            }
          });
        }
      }
  }
});
