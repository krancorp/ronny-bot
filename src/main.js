'use strict';

require('./index');

const RtmClient = require('@slack/client').RtmClient;
const WebClient = require('@slack/client').WebClient;
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
const rtmClient = new RtmClient(botToken);
const webClient = new WebClient(botToken);
rtmClient.start();
rtmClient.on(RTM_EVENTS.MESSAGE, function handle(data) {
  bus.publish('log', data);
  if (data.bot_id !== botId)
    bus.publish('message', data);
});

bus.subscribe('write', data => {
  rtmClient.sendTyping(data.id);
  setTimeout(function () {
    webClient.chat.postMessage(data.id, data.message, data.params);
  }, Math.log2((data.message.length)) * 500);
});
