const AgedBrie = require("../src/agedBrie.js");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}

describe("Aged Brie", function () {

  it("1. quality increases the older it gets", function() {
    let itemDouble = new ItemDouble("Aged Brie", 0, 20);
    let agedBrie = new AgedBrie(itemDouble)
    let item = agedBrie.update()
    expect(item.quality).toEqual(21);
  });
  it("2. quality drops to 0 after the concert", function() {
     let itemDouble = new ItemDouble("Aged Brie", -1, 20);
    let agedBrie = new AgedBrie(itemDouble)
    let item = agedBrie.update()
    expect(item.quality).toEqual(0);
  });
   });
