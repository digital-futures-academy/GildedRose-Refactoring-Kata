const Conjured = require('../src/conjured.js');

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}
describe("Conjured Items", function() {

  it("conjured Items quality degrades twice as fast as normal items", function () {
    let itemDouble = new ItemDouble("Conjured", 10, 20);
    let conjured = new Conjured(itemDouble);
    let item = conjured.update()
    expect(item.quality).toEqual(18);
  });
    it("conjured Items quality degrades twice as fast as normal items after sell by date", function () {
    let itemDouble = new ItemDouble("Conjured", -1, 20);
    let conjured = new Conjured(itemDouble);
    let item = conjured.update()
    expect(item.quality).toEqual(16);
  });
  });