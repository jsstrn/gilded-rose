const { RegularItem } = require("../src/types");

describe("Regular Item", () => {
  it("has correct item name", () => {
    const item = new RegularItem({ name: "Regular Item" });
    expect(item.name).toBe("Regular Item");
  });

  it("degrades quality by 1 if it is before its sell by date", () => {
    const item = new RegularItem({
      daysRemaining: 10,
      quality: 5,
      name: "Regular Item"
    });

    item.update();
    expect(item.quality).toBe(4);
  });

  it("degrades quality by 2 if it is past its sell by date", () => {
    const item = new RegularItem({
      daysRemaining: 0,
      quality: 5,
      name: "Regular Item"
    });

    item.update();
    expect(item.quality).toBe(3);
  });

  it("should not degrade quality to less than 0", () => {
    const item = new RegularItem({
      daysRemaining: 0,
      quality: 0,
      name: "Regular Item"
    });

    item.update();
    expect(item.quality).toBe(0);
  });
});
