var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose initial criteria checks:\n", function() {

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

  it("Lower sellIn for standard item at end of day:", function() {

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

  it("Aged brie sellIn reduces by 1:", function() {

    const gildedRose = new Shop([ new Item('Aged Brie', 1, 1) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toEqual(0);
  });

  it("Aged brie cannot start with a negative quality:", function() {

    const gildedRose = new Shop([ new Item('Aged Brie', 1, -5) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(1);
  });

  it("Aged brie cannot start with a quality above 50:", function() {

    const gildedRose = new Shop([ new Item('Aged Brie', 1, 56) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(50);
  });

  it("The quality of an item is never more than 50:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(50);
  });

  it("The quality of an item cannot start at more than 50:", function() {

    const gildedRose = new Shop([ new Item('foo', 1, 55) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(49);
  });

  it("The quality of an item cannot start negative:", function() {

    const gildedRose = new Shop([ new Item('foo', 2, -1) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it("Sulfuras has no sellIn:", function() {

    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 1, 80) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toEqual(0);
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

  it("Backstage passes sellIn drops by 1:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 5) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toEqual(5);
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

  it("Quality cannot stat at more than 50:", function() {

    const gildedRose = new Shop([ new Item('Conjured', 5, 55) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(48);
  });

  it("Quality cannot start at less than 0:", function() {

    const gildedRose = new Shop([ new Item('Conjured', 6, -5) ]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

});

describe("Checking array of multiple items:\n", function() {

  it("test one:", function() {

    const gildedRose = new Shop([ new Item('Conjured', 2, 3), new Item('anything', 6, 5) ]);
    const items = gildedRose.updateQuality();

    expect(JSON.stringify(items)).toEqual(JSON.stringify([{ name: 'Conjured', sellIn: 1, quality: 1 },{ name: 'anything', sellIn: 5, quality: 4 }]));
  });

  it("test two:", function() {

    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) , new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20) , new Item('Aged Brie', 12, 10) , new Item('Conjured', 32, 43), new Item('anything', 7, 2) ]);
    const items = gildedRose.updateQuality();

    expect(JSON.stringify(items)).toEqual(JSON.stringify([{ name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 14, quality: 21 },{ name: 'Aged Brie', sellIn: 11, quality: 11 },{ name: 'Conjured', sellIn: 31, quality: 41 },{ name: 'anything', sellIn: 6, quality: 1 }]));
  });

  it("test three:", function() {

    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 5, 80) , new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20) , new Item('Aged Brie', 0, 10) , new Item('Conjured', 0, 43), new Item('anything', 0, 2) ]);
    const items = gildedRose.updateQuality();

    expect(JSON.stringify(items)).toEqual(JSON.stringify([{ name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 9, quality: 22 },{ name: 'Aged Brie', sellIn: -1, quality: 11 },{ name: 'Conjured', sellIn: -1, quality: 39 },{ name: 'anything', sellIn: -1, quality: 0 }]));
  });

  it("test four:", function() {

    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 60) , new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20) , new Item('Aged Brie', 4, 55) , new Item('Conjured', 2, 54), new Item('anything', 3, 53) ]);
    const items = gildedRose.updateQuality();

    expect(JSON.stringify(items)).toEqual(JSON.stringify([{ name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 4, quality: 23 },{ name: 'Aged Brie', sellIn: 3, quality: 50 },{ name: 'Conjured', sellIn: 1, quality: 48 },{ name: 'anything', sellIn: 2, quality: 49 }]));
  });

  it("test five:", function() {

    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 88) , new Item('Backstage passes to a TAFKAL80ETC concert', 0, 43) , new Item('Aged Brie', 4, -1) , new Item('Conjured', 2, -3), new Item('anything', 3, -7) ]);
    const items = gildedRose.updateQuality();

    expect(JSON.stringify(items)).toEqual(JSON.stringify([{ name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: -1, quality:0 },{ name: 'Aged Brie', sellIn: 3, quality: 1 },{ name: 'Conjured', sellIn: 1, quality: 0 },{ name: 'anything', sellIn: 2, quality: 0 }]));
  });

  it("test six:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 12, -2) , new Item('Aged Brie', 4, -1) , new Item('Conjured', 2, -3), new Item('anything', 3, -7) ]);
    const items = gildedRose.updateQuality();

    expect(JSON.stringify(items)).toEqual(JSON.stringify([{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 11, quality:1 },{ name: 'Aged Brie', sellIn: 3, quality: 1 },{ name: 'Conjured', sellIn: 1, quality: 0 },{ name: 'anything', sellIn: 2, quality: 0 }]));
  });

  it("test seven:", function() {

    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 55) , new Item('Conjured', 2, -3), new Item('anything', 3, -7) ]);
    const items = gildedRose.updateQuality();

    expect(JSON.stringify(items)).toEqual(JSON.stringify([{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 7, quality:50 },{ name: 'Conjured', sellIn: 1, quality: 0 },{ name: 'anything', sellIn: 2, quality: 0 }]));
  });

});