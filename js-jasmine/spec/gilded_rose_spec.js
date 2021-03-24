var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    console.log(gildedRose)
    const items = gildedRose.updateQuality();
    console.log(items)
    console.log(items[0].name)
    expect(items[0].name).toEqual("foo");
  });


});
