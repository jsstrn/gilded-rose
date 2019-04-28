const { AGED_BRIE, SULFURAS, BACKSTAGE_PASS } = require("./constants");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    if (this.name != AGED_BRIE && this.name != BACKSTAGE_PASS) {
      if (this.quality > 0) {
        if (this.name != SULFURAS) {
          this.quality = this.quality - 1;
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
        if (this.name == BACKSTAGE_PASS) {
          if (this.sellIn < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
          if (this.sellIn < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
        }
      }
    }
    if (this.name != SULFURAS) {
      this.sellIn = this.sellIn - 1;
    }
    if (this.sellIn < 0) {
      if (this.name != AGED_BRIE) {
        if (this.name != BACKSTAGE_PASS) {
          if (this.quality > 0) {
            if (this.name != SULFURAS) {
              this.quality = this.quality - 1;
            }
          }
        } else {
          this.quality = this.quality - this.quality;
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
