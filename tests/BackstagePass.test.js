const { BackstagePass } = require("../src/types");

describe("Backstage Pass", () => {
  it("has correct item name", () => {
    const item = new BackstagePass();
    expect(item.name).toBe("Backstage passes to a TAFKAL80ETC concert");
  });
});
