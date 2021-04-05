var Item = require('../src/item.js');
var AgedBrie = require('../src/agedBrie.js');

describe('Aged Brie', function() {

    it('"Aged Brie" actually increases in Quality the older it gets', function() {
        const gildedRose = new AgedBrie(new Item('Aged Brie', 2, 5))
        const item = gildedRose.updateQuality()
        expect(item.quality).toEqual(6)
    })

    it('Aged Brie sellIn still decreases by 1', function() {
        let gildedRose = new AgedBrie(new Item('Aged Brie', 10, 5))
        let item = gildedRose.updateQuality()
        expect(item.sellIn).toEqual(9)
    })

    it('The Quality of an item is never more than 50', function() {
        gildedRose = new AgedBrie([new Item('Aged Brie', 10, 50)])
        item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(50)
    })
})