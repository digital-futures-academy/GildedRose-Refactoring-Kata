const AgedBrie = require("../src/agedBrie");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Making sure the quality improves by 1 if it's under 50:\n", function() {

    it("should increase the quality by 1", function() {
        let itemDouble = new ItemDouble('Aged Brie',2,48)
        const agedBrie = new AgedBrie(itemDouble)
        let item = agedBrie.increaseQuality()
  
      expect(item.quality).toEqual(49);
    });

    it("should keep the quality at 50", function() {
        let itemDouble = new ItemDouble('Aged Brie',2,50)
        const agedBrie = new AgedBrie(itemDouble)
        let item = agedBrie.increaseQuality()  
  
      expect(item.quality).toEqual(50);
    });

});