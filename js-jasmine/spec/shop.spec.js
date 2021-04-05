const Shop = require('../src/shop.js');
const Item = require('../src/item');

let gildedRose, item;

describe("Regular Item tests: ", () => {
  it('A regular item, quality and sellin drop by 1', () => {
    gildedRose = new Shop([new Item('testRegular', 10, 5)]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(9);
    expect(item.quality).toEqual(4);
  })

  it('A regular item quality decreases by 2 if sellin is 0 or less', () => {
    gildedRose = new Shop([new Item('testRegular', 0, 5)]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(-1);
    expect(item.quality).toEqual(3);
  })

  it('Item quality cannot be below 0', () => {
    gildedRose = new Shop([new Item('testRegular', -2, 0)]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(-3);
    expect(item.quality).toEqual(0);
  })
});

describe('Sulfuras tests: ', () => {
  it('Item quality or sellin does not change', () => {
    gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 40, 20)]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(40);
    expect(item.quality).toEqual(20);
  })

  it('Item quality can be above 50', () => {
    gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 40, 80)]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(40);
    expect(item.quality).toEqual(80);
  })

  it('Item sellin can be below 0', () => {
    gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', -10, 80)]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(-10);
    expect(item.quality).toEqual(80);
  })
})

describe('Testing Aged Brie: ', () => {
  it('Quality increases by 1 when sellin is above 0', () => {
    gildedRose = new Shop([new Item("Aged Brie", 5, 6),]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(4);
    expect(item.quality).toEqual(7);
  })

  it('Quality increases by 2 when sellin is below 0', () => {
    gildedRose = new Shop([new Item("Aged Brie", 0, 10),]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(-1);
    expect(item.quality).toEqual(12);
  })

  it('Quality cannot be above 50', () => {
    gildedRose = new Shop([new Item("Aged Brie", -2, 49),]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(-3);
    expect(item.quality).toEqual(50);
  })
})

describe('Testing backstage: ', () => {
  it('Item quality increases by 1 when sellin is above 10', () => {
    gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(14);
    expect(item.quality).toEqual(21); 
  })

  it('Item quality increases by 2 when sellin is 10 or below', () => {
    gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30),]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(9);
    expect(item.quality).toEqual(32); 
  })

  it('Item quality increases by 3 when sellin is 5 or below', () => {
    gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40),]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(4);
    expect(item.quality).toEqual(43); 
  })

  it('Item quality cannot be above 50', () => {
    gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(4);
    expect(item.quality).toEqual(50); 
  })

  it('Item quality drops to 0 when sellin is 0 or less', () => {
    gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40),]);
    item = gildedRose.updateQuality()[0];

    expect(item.sellIn).toEqual(-1);
    expect(item.quality).toEqual(0); 
  })
})

describe('Testing conjured functionality: ', () => {
    it('item quality drops by 2 when sellin is above 0', () => {
      gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
      item = gildedRose.updateQuality()[0];
  
      expect(item.sellIn).toEqual(2);
      expect(item.quality).toEqual(4); 
    })
  
    it('item quality drops by 4 when sellin is 0 or less', () => {
      gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 6)]);
      item = gildedRose.updateQuality()[0];
  
      expect(item.sellIn).toEqual(-1);
      expect(item.quality).toEqual(2); 
    })
  
    it('item quality cannot be below 0', () => {
      gildedRose = new Shop([new Item("Conjured Mana Cake", -2, 2)]);
      item = gildedRose.updateQuality()[0];
  
      expect(item.sellIn).toEqual(-3);
      expect(item.quality).toEqual(0); 
    })
})