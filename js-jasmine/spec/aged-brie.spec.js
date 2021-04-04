const AgedBrie = require("../src/aged-brie");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Checking Aged Brie class requirements:\n", function() {

    it("should increase the quality by 1 if under 50", function() {
        let itemDouble = new ItemDouble('Aged Brie',2,48)
        const agedBrie = new AgedBrie(itemDouble)
        let item = agedBrie.update()
  
      expect(item.quality).toEqual(49);
    });

    it("should keep the quality at 50", function() {
        let itemDouble = new ItemDouble('Aged Brie',2,50)
        const agedBrie = new AgedBrie(itemDouble)
        let item = agedBrie.update()  
  
      expect(item.quality).toEqual(50);
    });

    it("should reduce sellIn by 1", function() {
        let itemDouble = new ItemDouble('Aged Brie',2,50)
        const agedBrie = new AgedBrie(itemDouble)
        let item = agedBrie.update()  
  
      expect(item.sellIn).toEqual(1);
    });

    it("should never start with a quality more than 50", function() {
      let itemDouble = new ItemDouble('Aged Brie',2,55)
      const agedBrie = new AgedBrie(itemDouble)
      let item = agedBrie.update()  

    expect(item.quality).toEqual(50);
  });

  it("should never start with a negative quality", function() {
    let itemDouble = new ItemDouble('Aged Brie',2,-3)
    const agedBrie = new AgedBrie(itemDouble)
    let item = agedBrie.update()  

  expect(item.quality).toEqual(1);
});

});