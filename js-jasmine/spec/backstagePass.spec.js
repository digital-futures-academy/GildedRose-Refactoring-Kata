const BackstagePass = require("../src/backstagePass");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Making sure quality improves at a faster rate for the last 10 days before SellIn of a backstage pass:\n", function() {

    it("The quality should increase by an extra 1 between sellIn 6 and 10", function() {
        let itemDouble = new ItemDouble('Backstage passes to a TAFKAL80ETC concert',10,5)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.check();
  
      expect(item.quality).toEqual(6);
    });

    it("The quality should increase by an extra 2 between sellIn 5 and 1", function() {
        let itemDouble = new ItemDouble('Backstage passes to a TAFKAL80ETC concert',5,7)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.check();
  
      expect(item.quality).toEqual(9);
    });

    it("should keep the quality the same for a normal item", function() {
        let itemDouble = new ItemDouble('foo',3,48)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.check();
   
      expect(item.quality).toEqual(48);
    });

    it("should keep the quality the same for Sulfuras", function() {
        let itemDouble = new ItemDouble('Sulfuras, Hand of Ragnaros',1,80)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.check();
   
      expect(item.quality).toEqual(80);
    });

});