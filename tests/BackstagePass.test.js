const { BackstagePass } = require("../src/types");

describe("Backstage Pass", () => {
  it("has correct item name", () => {
    const item = new BackstagePass({});
    expect(item.name).toBe("Backstage passes to a TAFKAL80ETC concert");
  });

  it("decreases remaining days by 1", () => {
    const daysRemaining = 1;
    const quality = 0;
    const item = new BackstagePass({ daysRemaining, quality });

    item.update();
    expect(item.daysRemaining).toBe(0);
  });

  it("increases quality by 1 when sell by date is 15 days", () => {
    const daysRemaining = 15;
    const quality = 20;
    const item = new BackstagePass({ daysRemaining, quality });

    item.update();
    expect(item.quality).toBe(21);
  });

  it("increases quality by 2 when sell by date is 10 days", () => {
    const daysRemaining = 10;
    const quality = 20;
    const item = new BackstagePass({ daysRemaining, quality });

    item.update();
    expect(item.quality).toBe(22);
  });

  it("increases quality by 2 when sell by date is 8 days", () => {
    const daysRemaining = 8;
    const quality = 20;
    const item = new BackstagePass({ daysRemaining, quality });

    item.update();
    expect(item.quality).toBe(22);
  });

  it("increases quality by 3 when sell by date is 5 days", () => {
    const daysRemaining = 5;
    const quality = 20;
    const item = new BackstagePass({ daysRemaining, quality });

    item.update();
    expect(item.quality).toBe(23);
  });

  it("increases quality by 3 when sell by date is 2 days", () => {
    const daysRemaining = 2;
    const quality = 20;
    const item = new BackstagePass({ daysRemaining, quality });

    item.update();
    expect(item.quality).toBe(23);
  });

  it("decreases the quality to 0 when sell by date is 0 days", () => {
    const daysRemaining = 0;
    const quality = 20;
    const item = new BackstagePass({ daysRemaining, quality });

    item.update();
    expect(item.quality).toBe(0);
  });
});
