const { BACKSTAGE_PASS } = require("../constants");

const BackstagePass = function({ daysRemaining, quality }) {
  this.name = BACKSTAGE_PASS;
  this.daysRemaining = daysRemaining;
  this.quality = quality;

  this.update = () => {
    this.daysRemaining = this.daysRemaining - 1;

    if (this.daysRemaining >= 6 && this.daysRemaining <= 10) {
      this.quality = this.quality + 2;
      return;
    }

    if (this.daysRemaining >= 1 && this.daysRemaining <= 5) {
      this.quality = this.quality + 3;
      return;
    }

    if (this.daysRemaining <= 0) {
      this.quality = 0;
      return;
    }

    this.quality = this.quality + 1;
  };
};

module.exports = BackstagePass;
