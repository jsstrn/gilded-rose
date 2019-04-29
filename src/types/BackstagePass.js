const { BACKSTAGE_PASS } = require("../constants");

const BackstagePass = function(daysRemaining, quality) {
  this.name = BACKSTAGE_PASS;
  this.daysRemaining = daysRemaining;
  this.quality = quality;

  this.update = () => {};
};

module.exports = BackstagePass;
