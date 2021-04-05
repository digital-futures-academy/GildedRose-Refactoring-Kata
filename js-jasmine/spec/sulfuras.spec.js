var Sulfuras = require('../src/sulfuras.js');
var Item = require('../src/item.js');

describe('sulfuras', function() {
    it('Sulfuras, Hand of Ragnaros never decreases in sellIn or quality', function() {
        const gildedRose = new Sulfuras(new Item('Sulfuras, Hand of Ragnaros', 1, 80));
        const items = gildedRose.updateQuality();
        expect(items.quality).toEqual(80);
        expect(items.sellIn).toEqual(0);
    })
})