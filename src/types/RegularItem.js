const RegularItem = function(daysRemaining, quality, name) {
  this.name = name;
  this.daysRemaining = daysRemaining;
  this.quality = quality;

  this.update = () => {
    this.daysRemaining = this.daysRemaining - 1;

    if (this.daysRemaining < 1) {
      this.quality = Math.max(this.quality - 2, 0);
      return;
    }

    this.quality = Math.max(this.quality - 1, 0);
  };
};

module.exports = RegularItem;
