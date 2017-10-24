'use strict';

require('./index');

const RtmClient = require('@slack/client').RtmClient;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
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
const bot = new RtmClient(botToken);
bot.start();
bot.on(RTM_EVENTS., function handle(data) {
  bus.publish('log', data);
  switch (data.type) {
    case 'presence_change': {

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
  // bot.postMessage(data.id, data.message, data.params);
});

