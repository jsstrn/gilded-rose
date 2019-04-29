const { RegularItem } = require("../src/types");

describe("Regular Item", () => {
  it("has correct item name", () => {
    const item = new RegularItem(null, null, "Regular Item");
    expect(item.name).toBe("Regular Item");
  });
});
