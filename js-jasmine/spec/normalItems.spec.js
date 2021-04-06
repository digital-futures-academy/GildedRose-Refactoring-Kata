const NormalItems = require('../src/normalItems.js');

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}
describe("Normal Items", function() {

  it("Normal Items quality lowers by 1 at the end of each day", function () {
    let itemDouble = new ItemDouble("milkshake", 10, 20);
    let milkshake= new NormalItems(itemDouble);
    let item = milkshake.update()
    expect(item.quality).toEqual(19);
  });
    it("Normal Items quality degrades twice as fast after sell by date", function () {
    let itemDouble = new ItemDouble("milkshake", -1, 20);
    let milkshake = new NormalItems(itemDouble);
    let item = milkshake.update()
    expect(item.quality).toEqual(18);
  });
  });
