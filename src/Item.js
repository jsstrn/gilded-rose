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
        this.type = new RegularItem(this.daysRemaining, this.quality);
        break;
    }
  }

  update() {
    if (
      this.name === SULFURAS ||
      this.name === AGED_BRIE ||
      this.name === BACKSTAGE_PASS
    ) {
      this.type.update();
      return;
    }

    if (this.name != AGED_BRIE && this.name != BACKSTAGE_PASS) {
      if (this.quality > 0) {
        this.quality = this.quality - 1;
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
        if (this.name == BACKSTAGE_PASS) {
          if (this.daysRemaining < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
          if (this.daysRemaining < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
        }
      }
    }

    this.daysRemaining = this.daysRemaining - 1;

    if (this.daysRemaining < 0) {
      if (this.name != AGED_BRIE) {
        if (this.name != BACKSTAGE_PASS) {
          this.quality = this.quality > 0 ? this.quality - 1 : this.quality;
        } else {
          this.quality = 0;
        }
      } else {
        if (this.quality < 50) {
          this.quality = this.quality + 1;
        }
      }
    }
  }
}

module.exports = Item;
