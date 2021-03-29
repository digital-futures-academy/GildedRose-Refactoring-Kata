var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose intial criteria checks:\n", function() {

  it("should foo", function() {

    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toEqual("foo");
  });

  it("Quality should be a positive integer:", function() {

    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBeGreaterThan(-1);
  });

  it("Lower sellIN for standard item at end of day:", function() {

    const gildedRose = new Shop([ new Item("foo", 1, 0) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toEqual(0);
  });

  it("Lower quality for standard item at end of day:", function() {

    const gildedRose = new Shop([ new Item("foo", 0, 1) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it("For a standard item once sell by date passes, quality degrades twice as fast:", function() {

    const gildedRose = new Shop([ new Item("foo", -1, 2) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it("Aged brie increases in quality:", function() {

    const gildedRose = new Shop([ new Item('Aged Brie', 1, 1) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(2);
  });

  it("The quality of an item is never more than 50:", function() {

    const gildedRose = new Shop([ new Item('Aged Brie', 1, 50) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(50);
  });

  it("The quality of an item cannot start at more than 50:", function() {

    const gildedRose = new Shop([ new Item('foo', 1, 55) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(50);
  });

  it("Sulfuras has no sellIn:", function() {

    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 1, 80) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toEqual(1);
  });

  it("Sulfuras never loses quality:", function() {

    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 1, 80) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(80);
  });

  it("Sulfuras always has quality of 80:", function() {

    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 1, 60) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(80);
  });

  it("Backstage passes increase in quality by 1 for sellIn larger than 10:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 1) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(2);
  });

  it("Backstage passes increase in quality by 2 for sellIn between 6 and 10:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 1) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(3);
  });

  it("Backstage passes increase in quality by 3 for sellIn between 1 and 5:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 1) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(4);
  });

  it("Backstage passes quality drops to zero after concert:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 1) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it("Backstage passes quality drops to zero after concert 2:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it("The quality of an item is never more than 50 no.2:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 2, 49) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(50);
  });

});

describe("Conjured item checks:\n", function() {

  it("Lower quality by 2 each day:", function() {

    const gildedRose = new Shop([ new Item('Conjured', 2, 3) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(1);
  });

  it("Lower sellIn by 1 each day:", function() {

    const gildedRose = new Shop([ new Item('Conjured', 2, 3) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toEqual(1);
  });

  it("Quality can not go below 0:", function() {

    const gildedRose = new Shop([ new Item('Conjured', 2, 0) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it("Once sell by date passes, degrades twice as fast as a normal item:", function() {

    const gildedRose = new Shop([ new Item('Conjured', -1, 4) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

});