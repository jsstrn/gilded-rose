const { Shop, Item } = require("../src/gilded-rose");

describe("Gilded Rose", () => {
  it("should degrade the quality twice as fast after sell by date", () => {
    const shop = new Shop([new Item("Normal Item", 0, 5)]);
    const items = shop.updateQuality();

    expect(items[0]).toEqual(new Item("Normal Item", -1, 3));
  });

  it.todo("should not decrease an item's quality below zero");

  it.todo("should increase the quality of 'Aged Brie' the older it gets");

  it.todo("should not increase an item's quality above 50");

  it.todo(
    "should not decrease or increase the sell in or quality of Sulfuras a legendary item with quality < 50 "
  );

  it.todo(
    "should not decrease or increase the sell in or quality of Sulfuras a legendary item with quality > 50"
  );

  it.todo(
    "should increase the quality of 'Backstage passes' by 2, 10 - 6 days before the concert"
  );

  it.todo(
    "should not increase the quality of 'Backstage passes' by 2, 9  days before the concert"
  );

  it.todo(
    "should not increase the quality of 'Backstage passes' by 2, 5 days before the concert"
  );

  it.todo(
    "should increase the quality of 'Backstage passes' by 3, 5 - 1 day before the concert"
  );

  it.todo(
    "should not increase the quality of 'Backstage passes' by 3, 4 day before the concert"
  );

  it.todo(
    "should decrease the quality of 'Backstage passes' to 0, after the concert"
  );

  it.todo(
    "should decrease the quality of 'conjured' twice as fast as normal items before expiry"
  );
});
