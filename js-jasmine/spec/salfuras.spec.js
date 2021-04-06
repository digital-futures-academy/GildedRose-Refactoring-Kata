const Sulfuras = require('../src/sulfuras.js');

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}
describe("sulfuras", function() {

  it("1. sulfuras quality is always 80", function () {
    let itemDouble = new ItemDouble("salfuras", 10, 20);
    let salfuras = new Sulfuras(itemDouble);
    let item = salfuras.update()
    expect(item.quality).toEqual(80);
  });
  });
