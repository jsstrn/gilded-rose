const { Sulfuras } = require("../src/types");

describe("Sulfuras", () => {
  it("has correct item name", () => {
    const item = new Sulfuras({});
    expect(item.name).toBe("Sulfuras, Hand of Ragnaros");
  });

  it("does not change days remaining after update", () => {
    const item = new Sulfuras({ daysRemaining: 100, quality: 5 });

    item.update();
    expect(item.daysRemaining).toBe(100);
  });

  it("does not change quality after update", () => {
    const item = new Sulfuras({ daysRemaining: 10, quality: 50 });

    item.update();
    expect(item.quality).toBe(50);
  });
});
