var Shop = require('../src/shop.js');
var Item = require('../src/item.js');
var AgedBrie = require('../src/agedBrie.js');

fdescribe('Aged Brie', function() {

    it('"Aged Brie" actually increases in Quality the older it gets', function() {
        gildedRose = new AgedBrie([new Item('Aged Brie', 2, 5)])
        item = gildedRose.qualityUpdate()
        expect(item[0].quality).toEqual(6)
    })

    it('Aged Brie sellIn still decreases by 1', function() {


        let gildedRose = new AgedBrie([new Item('Aged Brie', 10, 5)])

        let item = gildedRose.qualityUpdate()
        expect(item[0].sellIn).toEqual(9)
    })

    it('The Quality of an item is never more than 50', function() {
        gildedRose = new AgedBrie([new Item('Aged Brie', 10, 50)])
        item = gildedRose.qualityUpdate()
        expect(item[0].quality).toEqual(50)
    })
})