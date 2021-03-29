const Shop = require('../src/gilded_rose.js')
const Item = require('../src/item.js')

describe("Gilded Rose", function() {

  it("should foo", function() {
     let gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    let items = gildedRose.updateOrdinaryItems();
    expect(items[0].name).toEqual("foo");
  });

});

describe('Testing ordinary items', function(){
  it('Checks if quality is updated', function(){
    gildedRose = new Shop([ new Item("bike", 5, 10) ])
    items = gildedRose.updateOrdinaryItems();
    expect(items[0].quality).toEqual(9)
  })
  it('Checks if quality drops twice as fast after  sell by date passed', function(){
    gildedRose = new Shop([ new Item("bike", -1, 10)])
    items = gildedRose.updateOrdinaryItems();
    expect(items[0].quality).toEqual(8)

  })
    it('Checks if sell in day is updated', function(){
    gildedRose = new Shop([ new Item("bike", -1, 10)])
    items = gildedRose.updateOrdinaryItems();
    items = gildedRose.updateOrdinaryItems();
    items = gildedRose.updateOrdinaryItems();
    expect(items[0].sellIn).toEqual(-4)

  })
     it('Checks if quality is not a negative number', function(){
    gildedRose = new Shop([ new Item("bike", -1, 0)])
    items = gildedRose.updateOrdinaryItems();
    items = gildedRose.updateOrdinaryItems();
    items = gildedRose.updateOrdinaryItems();
    expect(items[0].quality).toEqual(0)

  })


})


describe('Testing Aged Brie', function(){
  it('Checks if its quality increases as days go by', function(){
    gildedRose = new Shop([ new Item("Aged Brie", 5, 8)])
      items = gildedRose.updateAgedBrie();
      items = gildedRose.updateAgedBrie();
      expect(items[0].quality).toEqual(10)

  })
    it('Checks if its quality is not more than 50', function(){
    gildedRose = new Shop([ new Item("Aged Brie", 5, 49)])
      items = gildedRose.updateAgedBrie();
      items = gildedRose.updateAgedBrie();
      expect(items[0].quality).toEqual(50)

  })

})

describe('Testing an ordinary item and an Aged Brie', function(){
  it('Testing ordinary item first', function(){
     item = new Item("bike", 5, 12)
     item2 = new Item("Aged Brie", 5, 8)
     gildedRose = new Shop([item, item2])
     items = gildedRose.updateOrdinaryItems()
     items2 = gildedRose.updateAgedBrie()
    expect(items[0].quality).toEqual(11)
  })
   it('Testing Aged Brie second', function(){
     item = new Item("bike", 5, 12)
     item2 = new Item("Aged Brie", 5, 8)
     gildedRose = new Shop([item, item2])
     items = gildedRose.updateOrdinaryItems()
     items2 = gildedRose.updateAgedBrie()
     items2 = gildedRose.updateAgedBrie()
    expect(items2[1].quality).toEqual(10)
  })
})


describe('Testing Sulfuras', function(){
  it("Testing if Sulfuras' quality descreases", function(){
     gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 60)])
        items = gildedRose.updateSulfuras();
        expect(items[0].quality).toEqual(80)
  })
    it("Testing if Sulfuras' sellin date changes", function(){
     gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 80)])
        items = gildedRose.updateSulfuras();
        expect(items[0].sellIn).toEqual(5)
  })
})


describe('Testing Backstage Passes', function(){
  it('Checks if its quality increases as sellIn date apporaches', function(){
        gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 45)])
        items = gildedRose.updatePasses();
        items2 = gildedRose.updatePasses();
        expect(items[0].quality).toEqual(47)
  })
    it('Checks if its quality doubles when there are 10 or less days until the concert', function(){
        gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 40)])
        items = gildedRose.updatePasses();
        items = gildedRose.updatePasses();
        expect(items[0].quality).toEqual(44)
  })
      it('Checks if its quality triples when there are 5 or less days until the concert', function(){
        gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 40)])
        items = gildedRose.updatePasses();
        items = gildedRose.updatePasses();
        expect(items[0].quality).toEqual(46)
  })
        it('Checks if its quality triples when there are 5 or less days until the concert', function(){
        gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 40)])
        items = gildedRose.updatePasses();
        items = gildedRose.updatePasses();
        expect(items[0].quality).toEqual(46)
  })
        it('Checks if its quality drops to 0 after the concert', function(){
        gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)])
        items = gildedRose.updatePasses();
        items = gildedRose.updatePasses();
        expect(items[0].quality).toEqual(0)
  })
})

describe('Testing Conjured Items',function(){
  it('Checks if its quality decreases twice as fast',function(){
       gildedRose = new Shop([ new Item("Conjured", 5, 40)])
        items = gildedRose.updateConjuredItems();
        items = gildedRose.updateConjuredItems();
        expect(items[0].quality).toEqual(36)
  })
    it('Checks if quality does not drop below zero',function(){
       gildedRose = new Shop([ new Item("Conjured", 5, 4)])
        items = gildedRose.updateConjuredItems();
        items = gildedRose.updateConjuredItems();
         items = gildedRose.updateConjuredItems();
        expect(items[0].quality).toEqual(0)
  })
})

describe('Testing a variety of items', function(){
  it('Testing Sulfuras', function(){
  item = new Item("bike", 5, 10)
  item2 = new Item("Aged Brie", 5, 8)
  item3 = new Item("Sulfuras, Hand of Ragnaros", 5, 80)
  item4 = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)
  gildedRose = new Shop([item, item2, item3, item4])
  updated_sulfuras = gildedRose.updateSulfuras()
  expect(updated_sulfuras[2].quality).toBe(80)

  })
   it('Testing Ordinary Item after sell in date has passed', function(){
  item = new Item("bike", 0, 10)
  item2 = new Item("Aged Brie", 5, 8)
  item3 = new Item("Sulfuras, Hand of Ragnaros", 5, 80)
  item4 = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)
  gildedRose = new Shop([item, item2, item3, item4])
  updated_items = gildedRose.updateOrdinaryItems()
  expect(updated_items[0].quality).toBe(8)

  })
    it('Testing Aged Brie', function(){
  item = new Item("bike", 0, 10)
  item2 = new Item("Aged Brie", 5, 8)
  item3 = new Item("Sulfuras, Hand of Ragnaros", 5, 80)
  item4 = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)
  gildedRose = new Shop([item, item2, item3, item4])
  updated_items = gildedRose.updateOrdinaryItems()
  updated_aged_brie = gildedRose.updateAgedBrie()
  updated_sulfuras = gildedRose.updateSulfuras()
  updated_passes = gildedRose.updatePasses()
  expect(updated_aged_brie[1].quality).toBe(9)

  })
    it('Testing Backstage Passes', function(){
  item = new Item("bike", 0, 10)
  item2 = new Item("Aged Brie", 5, 8)
  item3 = new Item("Sulfuras, Hand of Ragnaros", 5, 80)
  item4 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)
  gildedRose = new Shop([item, item2, item3, item4])
  updated_ordinary_items = gildedRose.updateOrdinaryItems()
  updated_aged_brie = gildedRose.updateAgedBrie()
  updated_sulfuras = gildedRose.updateSulfuras()
  updated_passes = gildedRose.updatePasses()

  expect(updated_passes[3].quality).toBe(43)

  })
})
