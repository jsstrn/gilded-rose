const { RegularItem } = require("../src/types");

describe("Regular Item", () => {
  it("has correct item name", () => {
    const item = new RegularItem(null, null, "Regular Item");
    expect(item.name).toBe("Regular Item");
  });

  it("degrades quality by 1 if it is before its sell by date", () => {
    const daysTillSellByDate = 10;
    const quality = 5;
    const item = new RegularItem(daysTillSellByDate, quality, "Regular Item");

    item.update();
    expect(item.quality).toBe(4);
  });

  it("degrades quality by 2 if it is past its sell by date", () => {
    const daysTillSellByDate = 0;
    const quality = 5;
    const item = new RegularItem(daysTillSellByDate, quality, "Regular Item");

    item.update();
    expect(item.quality).toBe(3);
  });

  it("should not degrade quality to less than 0", () => {
    const daysTillSellByDate = 0;
    const quality = 0;
    const item = new RegularItem(daysTillSellByDate, quality, "Regular Item");

    item.update();
    expect(item.quality).toBe(0);
  });
});
