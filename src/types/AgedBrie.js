const { AGED_BRIE } = require("../constants");

const AgedBrie = function({ daysRemaining, quality }) {
  this.name = AGED_BRIE;
  this.daysRemaining = daysRemaining;
  this.quality = quality;

  this.update = () => {
    this.daysRemaining = this.daysRemaining - 1;

    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }
  };
};

module.exports = AgedBrie;
