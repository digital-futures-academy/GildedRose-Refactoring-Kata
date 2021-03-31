var Sulfuras = require('../src/sulfuras.js');
var Item = require('../src/item.js');

xdescribe('sulfuras', function() {
    it('Sulfuras, Hand of Ragnaros never decreases in sellIn or quality', function() {
        const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
        expect(items[0].sellIn).toEqual(1);
    })
})