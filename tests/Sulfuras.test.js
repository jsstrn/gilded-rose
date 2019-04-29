const { Sulfuras } = require("../src/types");

describe("Sulfuras", () => {
  it("has correct item name", () => {
    const item = new Sulfuras();
    expect(item.name).toBe("Sulfuras, Hand of Ragnaros");
  });

  it("does not change days remaining after update", () => {
    const daysRemaining = 100;
    const quality = 5;
    const item = new Sulfuras(daysRemaining, quality);

    item.update();
    expect(item.daysRemaining).toBe(100);
  });

  it("does not change quality after update", () => {
    const daysRemaining = 10;
    const quality = 50;
    const item = new Sulfuras(daysRemaining, quality);

    item.update();
    expect(item.quality).toBe(50);
  });
});
