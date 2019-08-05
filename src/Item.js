const { AGED_BRIE, SULFURAS, BACKSTAGE_PASS } = require("./constants");
const { AgedBrie, BackstagePass, RegularItem, Sulfuras } = require("./types");

const Item = function(type, daysRemaining, quality) {
  switch (type) {
    case SULFURAS:
      return new Sulfuras({ daysRemaining, quality });
    case AGED_BRIE:
      return new AgedBrie({ daysRemaining, quality });
    case BACKSTAGE_PASS:
      return new BackstagePass(daysRemaining, quality);
    default:
      return new RegularItem(daysRemaining, quality, type);
  }
};

module.exports = Item;
