const NormalItemQuality = require("../src/normalItemQualityCheck");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("The quality of an item cannot start at more than 50:\n", function() {

    it("should be the same output as input", function() {
        let itemDouble = new ItemDouble('foo',1,49)
        const normalItemQuality = new NormalItemQuality(itemDouble)
        let item = normalItemQuality.check()
  
      expect(item.quality).toEqual(49);
    });

    it("should reduce the quality to 50", function() {
        let itemDouble = new ItemDouble('foo',1,55)
        const normalItemQuality = new NormalItemQuality(itemDouble)
        let item = normalItemQuality.check()
  
      expect(item.quality).toEqual(50);
    });

    it("should keep the quality at 80 for Sulfuras", function() {
      let itemDouble = new ItemDouble('Sulfuras, Hand of Ragnaros',1,80)
      const normalItemQuality = new NormalItemQuality(itemDouble)
      let item = normalItemQuality.check()

    expect(item.quality).toEqual(80);
  });

});