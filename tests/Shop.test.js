const { Shop, Item } = require("../src");
const { AGED_BRIE, SULFURAS, BACKSTAGE_PASS } = require("../src/constants");

describe("Shop", () => {
  it("updates items correctly", () => {
    const items = [
      new Item("Regular Item", 0, 0),
      new Item(AGED_BRIE, 0, 0),
      new Item(SULFURAS, 0, 0),
      new Item(BACKSTAGE_PASS, 0, 0)
    ];

    const shop = new Shop(items);
    shop.updateQuality();

    expect(items[0].name).toBe("Regular Item");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);

    expect(items[1].name).toBe(AGED_BRIE);
    expect(items[1].sellIn).toBe(-1);
    expect(items[1].quality).toBe(2);

    expect(items[2].name).toBe(SULFURAS);
    expect(items[2].sellIn).toBe(0);
    expect(items[2].quality).toBe(0);

    expect(items[3].name).toBe(BACKSTAGE_PASS);
    expect(items[3].sellIn).toBe(-1);
    expect(items[3].quality).toBe(0);
  });
});