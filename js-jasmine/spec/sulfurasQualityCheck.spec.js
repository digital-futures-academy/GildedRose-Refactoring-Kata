const SulfurasQuality = require("../src/sulfurasQualityCheck");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Making sure Sulfuras has quality of 80:\n", function() {

    it("should change the quality to 80", function() {
        let itemDouble = new ItemDouble('Sulfuras, Hand of Ragnaros',1,49)
        const sulfurasQuality = new SulfurasQuality(itemDouble)
        let item = sulfurasQuality.check()
  
      expect(item.quality).toEqual(80);
    });

    it("should keep the quality at 80", function() {
        let itemDouble = new ItemDouble('Sulfuras, Hand of Ragnaros',1,80)
        const sulfurasQuality = new SulfurasQuality(itemDouble)
        let item = sulfurasQuality.check()
  
      expect(item.quality).toEqual(80);
    });

    it("should keep the quality the same for a normal item", function() {
      let itemDouble = new ItemDouble('foo',1,45)
      const sulfurasQuality = new SulfurasQuality(itemDouble)
      let item = sulfurasQuality.check()

    expect(item.quality).toEqual(45);
  });

});