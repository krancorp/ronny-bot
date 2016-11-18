var SlackBot = require('slackbots');
var dict = require('./answer.js');

// create a bot
var bot = new SlackBot({
    token: 'xoxb-99562714261-fC6JuSV19uhowciMrAMh8ttw',
    name: 'Ronnie Schäfer'
});

var params = {as_user:true};

bot.on('start', function (data) {
	bot.postMessageToGroup('dev', 'BOT RUNNING', params);
});

bot.on('message', function(data) {

	console.log("=============================================");
	console.log(data);

	switch (data.type) {
		case 'message' : {
			toChannel = data.channel;
			if(toChannel && data.subtype !== 'bot_message') {
				msg = data.text.toLowerCase();
				if (msg.indexOf('verantwortung') !== -1)	{
					bot.postMessage(toChannel, dict['verantwortung'], params);
				}
				if (msg.indexOf('verdichtet') !== -1) {
					bot.postMessage(toChannel, dict['verdichtet'], params);
				}
				if (msg.indexOf('norwegen') !== -1) {
					bot.postMessage(toChannel, dict['norwegen'], params);
				}
				if (msg.indexOf('zu hause') !== -1) {
					bot.postMessage(toChannel, dict['zu hause'], params);
				}
				/*if (msg.indexOf('nach hause') !== -1) {
					bot.postMessageToChannel(toChannel, dict['zu hause'], params);
				}*/
				if (msg.indexOf('kann nichts') !== -1) {
					bot.postMessage(toChannel, dict['kann nichts'], params);
				}
			}
		}
	}
});
