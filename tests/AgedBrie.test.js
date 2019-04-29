const { AgedBrie } = require("../src/types");

describe("Aged Brie", () => {
  it("has correct item name", () => {
    const item = new AgedBrie();
    expect(item.name).toBe("Aged Brie");
  });

  it("increases quality the older it gets", () => {
    const daysRemaining = 5;
    const quality = 0;
    const item = new AgedBrie(daysRemaining, quality);

    item.update();
    expect(item.quality).toBe(1);
  });

  it("decreases days remaining by 1", () => {
    const daysRemaining = 5;
    const quality = 50;
    const item = new AgedBrie(daysRemaining, quality);

    item.update();
    expect(item.daysRemaining).toBe(4);
  });

  it("should not increase quality above 50", () => {
    const daysRemaining = 5;
    const quality = 50;
    const item = new AgedBrie(daysRemaining, quality);

    item.update();
    expect(item.quality).toBe(50);
  });
});
