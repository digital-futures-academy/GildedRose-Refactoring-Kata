var BackstagePass = require('../src/backstagePasses.js');
var Item = require('../src/item.js');

// needs refactoring

xdescribe('backstage passes', function() {
    let shop
    let item
    beforeEach(function() {
        shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)])
        item = shop.updateQuality()
    })
    it('increases in quality as sellIn date approaches', function() {
        expect(item[0].quality).toEqual(6)
    })
    it('Quality to hit zero when sellIn is past for Backstage passes to a TAFKAL80ETC concert', function() {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)]);
        const items = gildedRose.updateQualityy();
        expect(items[0].quality).toEqual(0);
    })

    it('Quality increases for Backstage passes to a TAFKAL80ETC concert when there are 10 days or less by 2', function() {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(42);
    })

    it('Quality increases for Backstage passes to a TAFKAL80ETC concert when 5 days or less by 3', function() {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(43);
    })
})