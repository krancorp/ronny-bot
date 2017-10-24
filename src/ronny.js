'use strict';

const bus = require('./bus');
const kokoBuilder = require('./koko-builder');
const dict = [];

//noinspection JSValidateJSDoc
/**
 * Adds a message to ronny
 * @param {string|[string]} keys   And array of keys to trigger the message
 * @param {string|function} message to send or a function to return the message
 */
function add(keys, message) {
  if (typeof keys === 'string') keys = [keys];
  dict.push({
    keys: keys,
    message: message
  });
}

add('verantwortung', 'Ich hab doch die Verantwortung über 20 Leute!');
add(['verdichtet', 'kranplatz'], 'Da soll ich jetzt 60 Tonnen drauf abstellen?!');
add('norwegen', 'Darum sind die auch nicht in der EU, weil die am Leben vorbeilaufen ... diese Spinnerbande!');
add('hause', 'Sollen wir nach Hause fahr\'n oder wat?');
add(['können nichts', 'kann nichts'], 'Junge, Junge, Junge, Junge, Junge, Junge, Junge, Junge, Junge, Junge!');
add('kokowei', kokoBuilder.getKoko);
add(['dattel', 'sultan', 'großwesir'], kokoBuilder.getDatepalm);

const params = {as_user: true};

bus.subscribe('message', data => {
  const toChannel = data.channel;
  const msg = data.text.toLowerCase();
  dict.forEach(d => {
    if (d.keys.some(k => ~msg.indexOf(k))) {
      let message = d.message;
      if (typeof message === 'function')
        message = message(data);
      bus.publish('write', {id: toChannel, message: message, params: params});
    }
  });
});
