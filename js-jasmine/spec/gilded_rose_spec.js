const BackstagePass = require('../src/backstage_passes');
const AgedBrie = require('../src/aged_brie');
const Sulfuras = require('../src/sulfuras');
const NormalItem = require('../src/normal_item');
const ConjuredItem = require('../src/conjured_item');
const Item = require('../src/item');

describe('Gilded Rose', function() {

  it('Normal items quality reduces in intervals of 1', function() {
    let normalItem = new NormalItem([ new Item('test1', 5, 10) ]);
    const items = normalItem.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(9);
  });

  it('After sellIn, quality reduces 2x as fast', function() {
    let normalItem = new NormalItem([ new Item('test1', -1, 10) ]);
    const items = normalItem.updateQuality();
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(8);
  });

  it('Item quality is never negative', function() {
    let normalItem = new NormalItem([ new Item('test1', -1, 0) ]);
    const items = normalItem.updateQuality();
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(0);
  });

  it('Aged Brie increases in quality as it ages', function() {
    let agedBrie = new AgedBrie([ new Item('Aged Brie', 3, 10) ]);
    let items = agedBrie.updateQuality();
    expect(items[0].sellIn).toEqual(2);
    expect(items[0].quality).toEqual(11);
  });

  it('Sulfuras never decrease in quality and never has to be sold - quality always 80', function() {
    let sulfuras = new Sulfuras([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
    let items = sulfuras.updateQuality();
    expect(items[0].sellIn).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

  it('Backstage passes quality increases by 2 when there are 10 days or less', function() {
    let backstagePass = new BackstagePass([ new Item('Backstage passes to a TAFKAL80ETC concert', 9, 12) ]);
    let items = backstagePass.updateQuality();
    expect(items[0].sellIn).toEqual(8);
    expect(items[0].quality).toEqual(14);
  });
  
  it('Backstage passes quality increases by 3 when there are 5 days or less', function() {
    let backstagePass = new BackstagePass([ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20) ]);
    let items = backstagePass.updateQuality();
    expect(items[0].sellIn).toEqual(3);
    expect(items[0].quality).toEqual(23);
  });

  it('Backstage passes quality drops to zero after concert', function() {
    let backstagePass = new BackstagePass([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20) ]);
    let items = backstagePass.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it('Item quality is never over 50', function() {
    let normalItem = new AgedBrie([ new Item('Aged Brie', 5, 50) ]);
    const items = normalItem.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(50);
  });

  it('Conjured item decreases in quality twice as fast', function() {
    let conjured = new ConjuredItem([ new Item('Conjured Item', 5, 10) ]);
    const items = conjured.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(8);
  });
});

/*
Need tests to check:
After sell by date quality decreases twice as fast
The quality of an item is never negative
Aged Brie increases in quality the older it gets
Sulfuras never has to be sold
Sulfuras never decreases in quality
Backstage passes increase in quality as sellIn value approaches
  Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert
Item never has a quality of over 50 
Sulfuras has a quality of 80 which never alters
Test for conjured items, quality decreases twice as fast as normal items
*/