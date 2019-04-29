const { SULFURAS } = require("../constants");

const Sulfuras = function(daysRemaining, quality) {
  this.name = SULFURAS;
  this.daysRemaining = daysRemaining;
  this.quality = quality;

  this.update = () => {};
};

module.exports = Sulfuras;
