const { AgedBrie } = require("../src/types");

describe("Aged Brie", () => {
  it("has correct item name", () => {
    const item = new AgedBrie();
    expect(item.name).toBe("Aged Brie");
  });
});
