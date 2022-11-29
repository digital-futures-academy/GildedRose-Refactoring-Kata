var Conjured = require('../src/conjured.js');
var Item = require('../src/item.js');

describe('Conjured', function() {

    it('Conjured items deplete at faster rates', function() {
        const gildedRose = new Conjured(new Item('Conjured', 1, 4));
        const items = gildedRose.updateQuality();
        expect(items.quality).toEqual(2);
    })
    it('Conjured items still decrease in sellIn value', function() {
        const gildedRose = new Conjured(new Item('Conjured', 5, 4));
        const items = gildedRose.updateQuality();
        expect(items.sellIn).toEqual(4);
    })
})