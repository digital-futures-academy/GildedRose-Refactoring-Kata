const Conjured = require("../src/conjured");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Making sure quality is reduced twice as fast for conjured items:\n", function() {

    it("should change the quality by -1 for a conjured item", function() {
        let itemDouble = new ItemDouble('Conjured',2,49)
        const conjured = new Conjured(itemDouble)
        let item = conjured.check();
  
      expect(item.quality).toEqual(48);
    });

    it("should keep the quality the same for Aged Brie", function() {
        let itemDouble = new ItemDouble('Aged Brie',2,49)
        const conjured = new Conjured(itemDouble)
        let item = conjured.check();
  
      expect(item.quality).toEqual(49);
    });

    it("should keep the quality the same for a normal item", function() {
        let itemDouble = new ItemDouble('foo',3,48)
        const conjured = new Conjured(itemDouble)
        let item = conjured.check();
   
      expect(item.quality).toEqual(48);
    });

    it("should keep the quality the same for Sulfuras", function() {
        let itemDouble = new ItemDouble('Sulfuras, Hand of Ragnaros',1,80)
        const conjured = new Conjured(itemDouble)
        let item = conjured.check();
   
      expect(item.quality).toEqual(80);
    });

});