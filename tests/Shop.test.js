const { Shop, Item } = require("../src");
const { AGED_BRIE, SULFURAS, BACKSTAGE_PASS } = require("../src/constants");

describe("Shop", () => {
  it("creates an empty list of items when no items are provided", () => {
    const shop = new Shop();
    expect(shop.items).toEqual([]);
  });

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
    expect(items[0].daysRemaining).toBe(-1);
    expect(items[0].quality).toBe(0);

    expect(items[1].name).toBe(AGED_BRIE);
    expect(items[1].daysRemaining).toBe(-1);
    expect(items[1].quality).toBe(1);

    expect(items[2].name).toBe(SULFURAS);
    expect(items[2].daysRemaining).toBe(0);
    expect(items[2].quality).toBe(0);

    expect(items[3].name).toBe(BACKSTAGE_PASS);
    expect(items[3].daysRemaining).toBe(-1);
    expect(items[3].quality).toBe(0);
  });
});
