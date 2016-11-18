exports.getKoko = function(){
  var exeggutor;
  var rng = Math.random();
  if(rng > 0.9){
    exeggutor = ":kokomohr:\n";
  }
  else {
    exeggutor = ":kokohead:\n";
  }
  rng = Math.floor((Math.random() * 5) + 1);
  exeggutor += getKokoBody(rng);
  exeggutor += ":kokolegs:";
  return exeggutor;
};

exports.getDatepalm = function(){
	var exeggutor;
	var rng = Math.random();
	exeggutor = ":derficker8:\n";
	rng = Math.floor((Math.random() * 5) + 1);
	exeggutor += getKokoBody(rng);
	exeggutor += ":kokolegs:";
	return exeggutor;
}

function getKokoBody(height){
  var exeggBody = "";
  for(var i = 0; i < height; i++){
    var rng = Math.random();
    if(rng < 0.66){
      exeggBody += ":kokoneck:\n";
    }
    else if(rng < 0.77){
      exeggBody += ":kokokoala:\n";
    }
    else if (rng < 0.85) {
      exeggBody += ":kokocloud:\n";
    }
    else if (rng < 0.9) {
      exeggBody += ":kokotwist:\n";
    }
    else if (rng < 0.945) {
      exeggBody += ":kokousa:\n";
    }
    else if (rng < 0.98) {
      exeggBody += ":kokobear:\n";
    }
    else {
      exeggBody += (":kokoportal:\n");
    }
  }
  return exeggBody;
}
