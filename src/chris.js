'use strict';

const bus = require('./bus');
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

add(['a5', 'rhein', 'main', 'breakdance', 'club', 'feiern', '11:30'], 'Also safe?');
add(['safe'], 'Hab ich da :A5: gehört?');
add(['broken'], 'was heißt broken, es geht nur einfach nicht\nbroken is da nix');

const params = {
  as_user: false,
  icon_emoji: ':derfickerx:',
  username: 'Chris'
};

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
