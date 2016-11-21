'use strict';

function getDiglett() {
  var diglett = ':digletthead:\n:diglettdirt:\n Hoppla, ein Digda hat den Kranplatz entdichtet.';
  return diglett;
}

function isDigglettInDisguise(pokemoji) {
  var rng = Math.random();
  if (rng < 0.05) {
    return true;
  }
  return false;
}

function getKokoBody(height) {
  var exeggBody = '';
  for (var i = 0; i < height; i++) {
    var rng = Math.random();
    if (rng < 0.66) {
      exeggBody += ':kokoneck:\n';
    } else if (rng < 0.77) {
      exeggBody += ':kokokoala:\n';
    } else if (rng < 0.85) {
      exeggBody += ':kokocloud:\n';
    } else if (rng < 0.9) {
      exeggBody += ':kokotwist:\n';
    } else if (rng < 0.945) {
      exeggBody += ':kokousa:\n';
    } else if (rng < 0.98) {
      exeggBody += ':kokobear:\n';
    } else {
      exeggBody += (':kokoportal:\n');
    }
  }
  return exeggBody;
}

exports.getKoko = function() {
  if (isDigglettInDisguise()) {
    return getDiglett();
  }
  var pokemoji;
  var rng = Math.random();
  if (rng > 0.9) {
    pokemoji = ':kokomohr:\n';
  } else {
    pokemoji = ':kokohead:\n';
  }
  rng = Math.floor((Math.random() * 5) + 1);
  pokemoji += getKokoBody(rng);
  pokemoji += ':kokolegs:';
  return pokemoji;
};

exports.getDatepalm = function() {
  var pokemoji;
  var rng = Math.random();
  pokemoji = ':derficker8:\n';
  rng = Math.floor((Math.random() * 5) + 1);
  pokemoji += getKokoBody(rng);
  pokemoji += ':kokolegs:';
  return pokemoji;
};
