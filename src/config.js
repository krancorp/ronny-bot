'use strict';

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
    console.log('Initialisation Error: Please provide configuration options');
    process.exit(1);
  }
}

exports.botToken = botToken;
exports.botId = botId;
