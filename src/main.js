'use strict';

require('./index');

const SlackBot = require('slackbots');
const bus = require('./bus');

//Personalize bot parameters
let botToken, botId;

try {
  const config = require('../config.json');
  botToken = config.apiToken;
  botId = config.botId;
} catch (exception) {
  if (process.env.BOT_TOKEN && process.env.BOT_ID) {
    botToken = process.env.BOT_TOKEN;
    botId = process.env.BOT_ID;
  } else {
    console.log('Initialisation Error: Please provide configuration options for your ronnybot');
    process.exit(1);
  }
}

// create a bot
const bot = new SlackBot({
  token: botToken,
  name: 'Ronnie Schäfer'
});

bot.on('message', function (data) {
  bus.publish('log', data);
  switch (data.type) {
    case 'presence_change': {
      bus.publish('presenceChange', data);
      break;
    }
    case 'message': {
      if (data.bot_id !== botId)
        bus.publish('message', data);
      break;
    }
  }
});

bus.subscribe('write', (data) => {
  bot.postMessage(data.id, data.message, data.params);
});

