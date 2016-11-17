var SlackBot = require('slackbots');
var dict = require('./answer.js')
 
// create a bot 
var bot = new SlackBot({
    token: 'xoxb-99562714261-fC6JuSV19uhowciMrAMh8ttw',
});

var params = {as_user:true};

bot.on('start', function (data) {
	bot.postMessageToGroup('dev', 'BOT RUNNING', params)
});

bot.on('message', function(data) {
    	
	//if (data.)
	console.log("=============================================");
	console.log(data);
	switch (data.type) {
		case 'message' : {
			toChannel = data.channel
			console.log(bot.getChannelId('dev2'));

			if(data.channel == data.channel ) {
				msg = data.text.toLowerCase()
				if (msg.indexOf('verantwortung') !== -1)	{		
					bot.postMessageToChannel(toChannel, dict['verantwortung'], params);
					console.log("VERANTWORTUNG");
				}
				if (msg.indexOf('verdichtet') !== -1) {
					bot.postMessageToChannel(toChannel, 'Da soll ich jetzt 60 Tonnen drauf abstellen?!', params);
				}
				if (msg.indexOf('norwegen') !== -1) {
					bot.postMessageToChannel(toChannel, 'Spinnerbande!', params);
				}
				if (msg.indexOf('zu hause') !== -1) {
					bot.postMessageToChannel(toChannel, 'Sollen wir nach Hause fahren oder was?!', params);
				}
				/*if (msg.indexOf('nach hause') !== -1) {
					bot.postMessageToChannel(toChannel, 'Sollen wir nach Hause fahren oder was?!', params);
				}*/
				if (msg.indexOf('kann nichts') !== -1) {
					bot.postMessageToChannel(toChannel, 'JUNGE! JUNGE! JUNGE!', params);
				}
			}		
		}
	}
});
