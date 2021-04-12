var {Shop, Item} = require('../../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("updating a normal item", function() {
    let test = new Shop([ new Item("random item", 5, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("random item", 4, 9) ]);
  });

  it("updating brie", function() {
    let test = new Shop([ new Item("Aged Brie", 5, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("Aged Brie", 4, 11) ]);
  });

  it("updating brie when none are selling", function() {
    let test = new Shop([ new Item("Aged Brie", 0, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("Aged Brie", -1, 12) ]);
  });

  it("updating concert when there are under 6 left", function() {
    let test = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 13) ]);
  });

  it("updating concert when there are under 11 left", function() {
    let test = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 12) ]);
  });

  it("updating concert when there are over 11 left", function() {
    let test = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("Backstage passes to a TAFKAL80ETC concert", 14, 11) ]);
  });

  it("updating concert when the quality is over 50", function() {
    let test = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 8, 55) ]);
    expect(test.updateQuality()).toEqual([new Item("Backstage passes to a TAFKAL80ETC concert", 7, 55) ]);
  });

  it("updating a normal when the quality is over 50", function() {
    let test = new Shop([ new Item("test", 8, 55) ]);
    expect(test.updateQuality()).toEqual([new Item("test", 7, 54) ]);
  });

  it("updating brie when the quality is over 50", function() {
    let test = new Shop([ new Item("Aged Brie", 8, 55) ]);
    expect(test.updateQuality()).toEqual([new Item("Aged Brie", 7, 55) ]);
  });

  it("updating sulfuras when the quality is over 50", function() {
    let test = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 8, 55) ]);
    expect(test.updateQuality()).toEqual([new Item("Sulfuras, Hand of Ragnaros", 8, 55) ]);
  });

  it("updating a concert when none are selling", function() {
    let test = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0) ]);
  });

  it("updating hand of ragnaros", function() {
    let test = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("Sulfuras, Hand of Ragnaros", 5, 10) ]);
  });

  it("updating hand of ragnaros when none are selling", function() {
    let test = new Shop([ new Item("Sulfuras, Hand of Ragnaros", -1, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("Sulfuras, Hand of Ragnaros", -1, 11) ]);
  });

  it("updating a normal item when none are selling", function() {
    let test = new Shop([ new Item("random item", 0, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("random item", -1, 8) ]);
  });

  it("updating multiple items", function() {
    let test = new Shop([ new Item("random item", 5, 10), new Item("random item", 5, 10), new Item("random item", 5, 10) ]);
    expect(test.updateQuality()).toEqual([new Item("random item", 4, 9), new Item("random item", 4, 9), new Item("random item", 4, 9) ]);
  });

});
