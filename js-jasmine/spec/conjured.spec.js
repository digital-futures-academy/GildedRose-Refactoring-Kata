var Conjured = require('../src/conjured.js');
var Item = require('../src/item.js');

xdescribe('Conjured', function() {

    it('Conjured items deplete at faster rates', function() {
        const gildedRose = new Shop([new Item('Conjured', 1, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2); // failing test
    })

    it('Conjured items deplete at faster rates', function() {
        const gildedRose = new Shop([new Item('Conjured', 0, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    })
})