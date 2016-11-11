Koko.prototype.print = function () {
  var res = ":kokohead:"
  for (var i =0; i < 100;i++)
    res.concat(":kokoneck:");
  res.concat(":kokolegs:");
};

module.exports(Koko)
