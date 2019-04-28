const { AGED_BRIE, SULFURAS, BACKSTAGE_PASS } = require("./constants");

const Sulfuras = function() {
  this.update = () => {};
};

const AgedBrie = function() {
  this.update = () => {};
};

const BackstagePass = function() {
  this.update = () => {};
};

const RegularItem = function() {
  this.update = () => {};
};

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.type = null;
    this.setType(name);
  }

  setType(type) {
    switch (type) {
      case SULFURAS:
        this.type = new Sulfuras();
        break;
      case AGED_BRIE:
        this.type = new AgedBrie();
        break;
      case BACKSTAGE_PASS:
        this.type = new BackstagePass();
        break;
      default:
        this.type = new RegularItem();
        break;
    }
  }

  update() {
    if (this.name === SULFURAS) {
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

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      if (this.name != AGED_BRIE) {
        if (this.name != BACKSTAGE_PASS) {
          if (this.quality > 0) {
            this.quality = this.quality - 1;
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
