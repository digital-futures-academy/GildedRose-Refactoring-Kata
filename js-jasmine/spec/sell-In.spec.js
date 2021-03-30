const SellIn = require("../src/sell-In");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Making sure sellIn is reduced for all items except Sulfuras:\n", function() {

    it("should change the sellIn by -1 for a normal item", function() {
        let itemDouble = new ItemDouble('foo',2,49)
        const sellIn = new SellIn(itemDouble)
        let item = sellIn.reduce()
  
      expect(item.sellIn).toEqual(1);
    });

    it("should change the sellIn by -1 for a Aged Brie", function() {
        let itemDouble = new ItemDouble('Aged Brie',3,49)
        const sellIn = new SellIn(itemDouble)
        let item = sellIn.reduce()
  
      expect(item.sellIn).toEqual(2);
    });

    it("should keep the sellIn the same for Sulfuras", function() {
        let itemDouble = new ItemDouble('Sulfuras, Hand of Ragnaros',1,80)
        const sellIn = new SellIn(itemDouble)
        let item = sellIn.reduce()
  
      expect(item.sellIn).toEqual(1);
    });

});