var SlackBot = require('slackbots');
var kokoBuilder = require('./kokoBuilder.js');
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
        if(~msg.indexOf('kokowei')){
          bot.postMessage(toChannel, kokoBuilder.getKoko(), params);
        }
        dict.forEach(d => {
          if (d.keys.some(k => ~msg.indexOf(k))) {
            bot.postMessage(toChannel, d.message, params);
          }
        });
			}
		}
	}
});
