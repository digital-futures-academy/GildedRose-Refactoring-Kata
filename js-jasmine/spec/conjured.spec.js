const Conjured = require("../src/conjured");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Checking the requirements of a regular item:\n", function() {

    it("Should decrease in quality by 2", function() {
        let itemDouble = new ItemDouble('Conjured',12,30)
        const conjured = new Conjured(itemDouble)
        let item = conjured.update()
  
      expect(item.quality).toEqual(28);
    });

    it("Should decrease sellIn by 1", function() {
        let itemDouble = new ItemDouble('Conjured',10,30)
        const conjured = new Conjured(itemDouble)
        let item = conjured.update()
  
      expect(item.sellIn).toEqual(9);
    });

    it("Should decrease the quality by 4", function() {
        let itemDouble = new ItemDouble('Conjured',-1,26)
        const conjured = new Conjured(itemDouble)
        let item = conjured.update()
  
      expect(item.quality).toEqual(22);
    });

    it("Quality should never start at more than 50", function() {
        let itemDouble = new ItemDouble('Conjured',20,55)
        const conjured = new Conjured(itemDouble)
        let item = conjured.update()
  
      expect(item.quality).toEqual(48);
    });

    it("Quality should never be less than zero", function() {
        let itemDouble = new ItemDouble('Conjured',5,0)
        const conjured = new Conjured(itemDouble)
        let item = conjured.update()
  
      expect(item.quality).toEqual(0);
    });

    it("Quality should never start at less than zero", function() {
        let itemDouble = new ItemDouble('Conjured',22,-5)
        const conjured = new Conjured(itemDouble)
        let item = conjured.update()
  
      expect(item.quality).toEqual(0);
    });

});