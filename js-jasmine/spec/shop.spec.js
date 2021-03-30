const Shop = require('../src/shop.js')
const Item = require('../src/item.js')


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

