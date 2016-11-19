var dict = [];

function add(keys, message) {
  dict.push({
    keys: keys,
    message: message
  })
}

add(['verantwortung', 'ver'], 'Ich hab doch die Verantwortung über 20 Leute!');
add(['verdichtet'], 'Da soll ich jetzt 60 Tonnen drauf abstellen?!');
add(['norwegen'], 'Darum sind die auch nicht in der EU, weil die am Leben vorbeilaufen ... diese Spinnerbande!');
add(['zu hause'], 'Sollen wir nach Hause fahr\'n oder wat?');
add(['kann nichts'], 'Junge, Junge, Junge, Junge, Junge, Junge, Junge, Junge, Junge, Junge!');

module.exports = dict;
