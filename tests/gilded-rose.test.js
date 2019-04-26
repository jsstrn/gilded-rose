const { Shop, Item } = require("../src/gilded-rose");

describe("Gilded Rose", () => {
  it("should degrade the quality twice as fast after sell by date", () => {
    const shop = new Shop([new Item("Normal Item", 0, 5)]);
    const items = shop.updateQuality();

    expect(items[0]).toEqual(new Item("Normal Item", -1, 3));
  });

  it("should not decrease an item's quality below zero", () => {
    const shop = new Shop([new Item("Normal Item", 0, 1)]);
    const items = shop.updateQuality();

    expect(items[0]).toEqual(new Item("Normal Item", -1, 0));
  });

  it("should increase the quality of 'Aged Brie' the older it gets", () => {
    const shop = new Shop([new Item("Aged Brie", 10, 10)]);
    const items = shop.updateQuality();

    expect(items[0].quality).toBe(11);
  });

  it("should not increase an item's quality above 50", () => {
    const shop = new Shop([new Item("Aged Brie", 9, 50)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should not decrease or increase the sell in or quality of Sulfuras a legendary item with quality < 50 ", () => {
    const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 9, 49)]);
    const items = shop.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(49);
  });

  it("should not decrease or increase the sell in or quality of Sulfuras a legendary item with quality > 50", () => {
    const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 9, 51)]);
    const items = shop.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(51);
  });

  it("should increase the quality of 'Backstage passes' by 2, 10 - 6 days before the concert", () => {
    const shop = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)
    ]);
    const quality = 0;
    let items;
    // eslint-disable-next-line
    for (let i = 10; i <= 6; i--) {
      items = shop.updateQuality();
      expect(items[0]).toEqual(
        new Item(
          "Backstage passes to a TAFKAL80ETC concert",
          i - 1,
          quality + 2
        )
      );
    }
  });

  it("should not increase the quality of 'Backstage passes' by 2, 11  days before the concert", () => {
    const shop = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5)
    ]);
    const items = shop.updateQuality();

    expect(items[0].quality).toBe(6);
  });

  it("should increase the quality of 'Backstage passes' by 3, 5 days before the concert", () => {
    const shop = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5)
    ]);
    const items = shop.updateQuality();

    expect(items[0].quality).toBe(8);
  });

  it("should not increase the quality of 'Backstage passes' by 3, 4 day before the concert", () => {
    const shop = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 5)
    ]);
    const items = shop.updateQuality();

    expect(items[0].quality).toBe(8);
  });

  it("should decrease the quality of 'Backstage passes' to 0, after the concert", () => {
    const shop = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5)
    ]);
    const items = shop.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it.skip("should decrease the quality of 'conjured' twice as fast as normal items before expiry", () => {
    const shop = new Shop([new Item("Conjured stuff", 4, 5)]);
    const items = shop.updateQuality();

    expect(items[0].quality).toBe(3);
  });
});
