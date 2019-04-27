const { Shop, Item } = require("../src/gilded-rose");

function itemAfterUpdate(itemName, daysTillSellByDate, quality) {
  const items = [new Item(itemName, daysTillSellByDate, quality)];
  const shop = new Shop(items);
  const item = shop.updateQuality()[0];
  return item;
}

describe("Gilded Rose", () => {
  const itemName = "Regular Item";

  describe("For regular items", () => {
    it("degrades quality by 2 if it is past its sell by date", () => {
      const daysTillSellByDate = 0;
      const quality = 5;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.quality).toBe(3);
    });

    it("should not degrade quality to less than 0", () => {
      const daysTillSellByDate = 0;
      const quality = 0;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.quality).toBe(0);
    });
  });

  describe("For items labeled Aged Brie", () => {
    const itemName = "Aged Brie";

    it("increases quality the older it gets", () => {
      const daysTillSellByDate = 5;
      const quality = 0;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.quality).toBe(1);
    });

    it("should not increase quality above 50", () => {
      const daysTillSellByDate = 5;
      const quality = 50;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.quality).toBe(50);
    });
  });

  describe("For items labeled Sulfaras", () => {
    const itemName = "Sulfuras, Hand of Ragnaros";

    it("should not alter sell by date", () => {
      const daysTillSellByDate = 5;
      const quality = 40;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.sellIn).toBe(5);
    });

    it("should not alter quality", () => {
      const daysTillSellByDate = 5;
      const quality = 40;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.quality).toBe(40);
    });
  });

  describe("For items labeled Backstage Passes", () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";

    it("increases quality by 1 when sell by date is 15 days", () => {
      const daysTillSellByDate = 15;
      const quality = 20;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.quality).toBe(21);
    });

    it("increases quality by 2 when sell by date is 10 days", () => {
      const daysTillSellByDate = 10;
      const quality = 20;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.quality).toBe(22);
    });

    it("increases quality by 3 when sell by date is 5 days", () => {
      const daysTillSellByDate = 5;
      const quality = 20;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.quality).toBe(23);
    });

    it("decreases the quality to 0 when sell by date is 0 days", () => {
      const daysTillSellByDate = 0;
      const quality = 20;
      const item = itemAfterUpdate(itemName, daysTillSellByDate, quality);

      expect(item.quality).toBe(0);
    });
  });

  describe("For items labeled Conjured", () => {
    it.todo("decreases quality by 2 before expiry");
  });
});
