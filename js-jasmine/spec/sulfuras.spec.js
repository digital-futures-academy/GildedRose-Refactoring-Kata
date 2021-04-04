const Sulfuras = require("../src/sulfuras");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Checking Sulfuras class requirements:\n", function() {

    it("should only have a quality of 80:", function() {
        let itemDouble = new ItemDouble('Sulfuras',2,12)
        const sulfuras = new Sulfuras(itemDouble)
        let item = sulfuras.update()
  
      expect(item[0].quality).toEqual(80);
    });

    it("should only have a quality of 80 part 2:", function() {
        let itemDouble = new ItemDouble('Sulfuras',5,93)
        const sulfuras = new Sulfuras(itemDouble)
        let item = sulfuras.update()
  
      expect(item[0].quality).toEqual(80);
    });

    it("sellIn stays the same", function() {
        let itemDouble = new ItemDouble('Sulfuras',5,80)
        const sulfuras = new Sulfuras(itemDouble)
        let item = sulfuras.update() 
  
      expect(item[0].sellIn).toEqual(5);
    });

    it("should keep quality at 80", function() {
        let itemDouble = new ItemDouble('Sulfuras',6,80)
        const sulfuras = new Sulfuras(itemDouble)
        let item = sulfuras.update()

    expect(item[0].quality).toEqual(80);
  });

});