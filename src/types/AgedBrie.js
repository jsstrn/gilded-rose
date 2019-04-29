const { AGED_BRIE } = require("../constants");

const AgedBrie = function(daysRemaining, quality) {
  this.name = AGED_BRIE;
  this.daysRemaining = daysRemaining;
  this.quality = quality;

  this.update = () => {};
};

module.exports = AgedBrie;
