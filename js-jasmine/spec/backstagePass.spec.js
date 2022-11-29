var BackstagePass = require('../src/backstagePasses.js');
var Item = require('../src/item.js');

describe('backstage passes', function() {

    it('increases in quality as sellIn date approaches', function() {
        const gildedRose = new BackstagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5))
        const items = gildedRose.updateQuality()
        expect(items.quality).toEqual(6)
    })
    it('Quality to hit zero when sellIn is past for Backstage passes to a TAFKAL80ETC concert', function() {
        const gildedRose = new BackstagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40));
        const items = gildedRose.updateQuality();
        expect(items.quality).toEqual(0);
    })

    it('Quality increases for Backstage passes to a TAFKAL80ETC concert when there are 10 days or less by 2', function() {
        const gildedRose = new BackstagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40));
        const items = gildedRose.updateQuality();
        expect(items.quality).toEqual(42);
    })

    it('Quality increases for Backstage passes to a TAFKAL80ETC concert when 5 days or less by 3', function() {
        const gildedRose = new BackstagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 4, 40));
        const items = gildedRose.updateQuality();
        expect(items.quality).toEqual(43);
    })
    it('Quality cannot exceed 50', function() {
        const gildedRose = new BackstagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50));
        const items = gildedRose.updateQuality();
        expect(items.quality).toEqual(50);
    })
})