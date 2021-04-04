const Regular = require("../src/regular");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Checking the requirements of a regular item:\n", function() {

    it("Should decrease in quality by 1", function() {
        let itemDouble = new ItemDouble('foo',12,30)
        const regular = new Regular(itemDouble)
        let item = regular.update()
  
      expect(item[0].quality).toEqual(29);
    });

    it("Should decrease sellIn by 1", function() {
        let itemDouble = new ItemDouble('foo',12,30)
        const regular = new Regular(itemDouble)
        let item = regular.update()
  
      expect(item[0].sellIn).toEqual(11);
    });

    it("Should decrease the quality by 2", function() {
        let itemDouble = new ItemDouble('foo',-1,30)
        const regular = new Regular(itemDouble)
        let item = regular.update()
  
      expect(item[0].quality).toEqual(28);
    });

    it("Quality should never start at more than 50", function() {
        let itemDouble = new ItemDouble('foo',12,55)
        const regular = new Regular(itemDouble)
        let item = regular.update()
  
      expect(item[0].quality).toEqual(49);
    });

    it("Quality should never be less than zero", function() {
        let itemDouble = new ItemDouble('foo',7,0)
        const regular = new Regular(itemDouble)
        let item = regular.update()
  
      expect(item[0].quality).toEqual(0);
    });

    it("Quality should never start at less than zero", function() {
        let itemDouble = new ItemDouble('foo',15,-2)
        const regular = new Regular(itemDouble)
        let item = regular.update()
  
      expect(item[0].quality).toEqual(0);
    });

});