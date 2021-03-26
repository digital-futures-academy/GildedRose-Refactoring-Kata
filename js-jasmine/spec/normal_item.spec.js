describe("Normal item", () => {
    it("Checking that a normal item has its quality value decreased by 1", () => {
      let item = [new NormalItem(50, 50)]
      const gildedRose = new Shop(item);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(49);
    })

    it("Checking that a normal item that has a sellIn value of 0 will have it's quality decreased by 2", () => {
      let item = [new NormalItem(0, 9)]
      const gildedRose = new Shop(item);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(7);
    })

    it("Checking that every normal items sellIn decreases by 1 regardless of quality", () => {
      let item = [new NormalItem(9, 0)]
      const gildedRose = new Shop(item);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(8);
    })
    
  })