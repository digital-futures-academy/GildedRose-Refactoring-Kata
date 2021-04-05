var Shop = require('../src/shop.js');
var Item = require('../src/item.js');


describe('can update any type of item', function() {
    it('aged brie', function() {
        const gildedRose = new Shop([new Item('Aged Brie', 5, 7)])
        const item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(8)
        expect(item[0].sellIn).toEqual(4)
    })
    it('can update any type of item', function() {
        const gildedRose = new Shop([new Item('Conjured', 5, 7)])
        const item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(5)
        expect(item[0].sellIn).toEqual(4)
    })
    it('can update any type of item', function() {
        const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 1, 80)])
        const item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(80)
        expect(item[0].sellIn).toEqual(0)
    })
    it('can update any type of item', function() {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5)])
        const item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(6)
        expect(item[0].sellIn).toEqual(14)
    })
    it('can update any type of item', function() {
        const gildedRose = new Shop([new Item('Normal Item', 5, 8)])
        const item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(7)
        expect(item[0].sellIn).toEqual(4)
    })
})