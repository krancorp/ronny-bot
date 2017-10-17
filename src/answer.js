'use strict';

const kokoBuilder = require('./koko-builder.js');
const chris = require('./chris.js');

const dict = [];

//noinspection JSValidateJSDoc
/**
 * Adds a message to ronny
 * @param {string|[string]} keys   And array of keys to trigger the message
 * @param {string|function} The message to send or a function to return the message
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
add(['a5', 'rhein', 'main', 'breakdance', 'club', 'feiern', '11:30'], chris.safe);
add(['safe'], chris.inverseSafe);
add(['remind'], chris.remind);
add(['broken'], chris.daIsDochNixBroken);

module.exports = dict;
