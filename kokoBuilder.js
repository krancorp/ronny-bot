var exeggutor = "Lorem";
exports.getKoko = function(){
  var rng = Math.random();
  if(rng > 0.9){
    exeggutor = ":kokomohr:\n";
  }
  else {
    exeggutor = ":kokohead:\n";
  }
  rng = Math.floor((Math.random() * 5) + 1);
  for (var i = 0; i < rng; i++) {
    exeggutor += getKokoBody();
  }

  exeggutor += ":kokolegs:";
  return exeggutor;
};

function getKokoBody(){
  console.log("hadijwoiawdjoi");
  var exegBody;
  var rng = Math.random();
  if(rng < 0.66){
    exegBody = ":kokoneck:\n";
  }
  else if(rng < 0.77){
    exegBody = ":kokokoala:\n";
  }
  else if (rng < 0.85) {
    exegBody = ":kokocloud:\n";
  }
  else if (rng < 0.9) {
    exegBody = ":kokotwist:\n";
  }
  else if (rng < 0.95) {
    exegBody = ":kokousa:\n";
  }
  else if (rng < 0.99) {
    exegBody = ":kokobear:\n";
  }
  else {
    exegBody = (":kokoportal:\n");
  }
  return exegBody;
}
