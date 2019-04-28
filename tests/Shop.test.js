const { Shop, Item } = require("../src");

describe("Shop", () => {
  it("updates items correctly", () => {
    const items = [
      new Item("Regular Item", 0, 0),
      new Item("Aged Brie", 0, 0),
      new Item("Sulfuras, Hand of Ragnaros", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)
    ];

    const shop = new Shop(items);
    shop.updateQuality();

    expect(items[0].name).toBe("Regular Item");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);

    expect(items[1].name).toBe("Aged Brie");
    expect(items[1].sellIn).toBe(-1);
    expect(items[1].quality).toBe(2);

    expect(items[2].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[2].sellIn).toBe(0);
    expect(items[2].quality).toBe(0);

    expect(items[3].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[3].sellIn).toBe(-1);
    expect(items[3].quality).toBe(0);
  });
});
