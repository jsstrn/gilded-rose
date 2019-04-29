const { AGED_BRIE, SULFURAS, BACKSTAGE_PASS } = require("./constants");
const { AgedBrie, BackstagePass, RegularItem, Sulfuras } = require("./types");

class Item {
  constructor(name, daysRemaining, quality) {
    this.name = name;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
    this.type = null;
    this.setType(name);
  }

  setType(type) {
    switch (type) {
      case SULFURAS:
        this.type = new Sulfuras(this.daysRemaining, this.quality);
        break;
      case AGED_BRIE:
        this.type = new AgedBrie(this.daysRemaining, this.quality);
        break;
      case BACKSTAGE_PASS:
        this.type = new BackstagePass(this.daysRemaining, this.quality);
        break;
      default:
        this.type = new RegularItem(
          this.daysRemaining,
          this.quality,
          this.name
        );
        break;
    }
  }

  update() {
    this.type.update();
  }
}

module.exports = Item;
