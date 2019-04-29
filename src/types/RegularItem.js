const RegularItem = function(daysRemaining, quality, name) {
  this.name = name;
  this.daysRemaining = daysRemaining;
  this.quality = quality;

  this.update = () => {};
};

module.exports = RegularItem;
