const NormalItem = require('../src/normalItem.js')
const Item = require('../src/item.js')

describe('Normal Item', function() {
    it('reduces 1 from sellIn and quality as each day passes', function() {
        const gildedRose = new NormalItem(new Item('bread', 5, 5))
        const item = gildedRose.updateQuality()
        expect(item.quality).toEqual(4)
        expect(item.sellIn).toEqual(4)
    })
    it('reduces 3 from quality when sellIn = 0', function() {
        const gildedRose = new NormalItem(new Item('bread', 0, 5))
        const item = gildedRose.updateQuality()
        expect(item.quality).toEqual(3)
    })
    it('quality can not be a negative number', function() {
        const gildedRose = new NormalItem(new Item('bread', 0, 0))
        const item = gildedRose.updateQuality()
        expect(item.quality).toEqual(0)
    })
    it('sellIn can not be a negative number', function() {
        const gildedRose = new NormalItem(new Item('bread', 0, 0))
        const item = gildedRose.updateQuality()
        expect(item.sellIn).toEqual(0)
    })
})