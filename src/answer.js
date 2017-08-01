'use strict';

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
add('kokowei', require('./koko-builder.js').getKoko);
add(['dattel', 'sultan', 'großwesir'], require('./koko-builder.js').getDatepalm);
add(['a5', 'rhein', 'main', 'breakdance', 'club', 'feiern', '11:30'], require('./chris.js').safe);
add(['safe'], require('./chris.js').inverseSafe);
add(['remind'], require('./chris.js').remind);

module.exports = dict;
