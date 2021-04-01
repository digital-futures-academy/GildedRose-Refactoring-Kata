var Shop = require('../src/shop.js');
var Item = require('../src/item');

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.quality();
    expect(items[0].name).toEqual("foo");
  });

  it('Quality should be positive', function(){
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.quality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  })
  
  it('Lower sellIn at end of day', function(){
    const gildedRose = new Shop([ new Item("foo", 1, 0) ]);
    const items = gildedRose.quality();
    expect(items[0].sellIn).toEqual(0);
  })

  it('Lower Quality at end of day', function(){
    const gildedRose = new Shop([ new Item("foo", 0, 1) ]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(0);
  })

  it('Double quality loss when sellIn has been hit -1', function(){
    const gildedRose = new Shop([new Item("foo", -1, 4)]);
    const items = gildedRose.quality();
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(2);
  })

  it('Quality can never exceed 50 when starting at 50', function(){
    const gildedRose = new Shop([new Item('Aged Brie', 1, 50)]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(50);
  })

  it('Aged Brie increases in quality as it gets older', function(){
    const gildedRose = new Shop([new Item('Aged Brie', 1, 49)]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(50);
  })

  it('Sulfuras, Hand of Ragnaros never decreases in sellIn or quality', function(){
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sellIn).toEqual(1);
  })

  it('Quality increases for Backstage passes to a TAFKAL80ETC concert when there are 10 days or less by 2', function(){
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(42);
  })

  it('Quality increases for Backstage passes to a TAFKAL80ETC concert when 5 days or less by 3', function(){
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 40)]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(43);
  })

  it('Quality to hit zero when sellIn is past for Backstage passes to a TAFKAL80ETC concert', function(){
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(0);
  })
  
  it('Conjured items deplete at faster rates', function(){
    const gildedRose = new Shop([new Item('Conjured', 1, 4)]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(2);
  })

  it('Conjured items deplete at faster rates', function(){
    const gildedRose = new Shop([new Item('Conjured', 0, 4)]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(0);
  })

  it('Multiple items', function(){
    const gildedRose = new Shop([new Item('Conjured', 0, 4), new Item('Aged Brie', 1, 49)]);
    const items = gildedRose.quality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sellIn).toEqual(-1);
    expect(items[1].quality).toEqual(50);
    expect(items[1].sellIn).toEqual(0);
  })
});
