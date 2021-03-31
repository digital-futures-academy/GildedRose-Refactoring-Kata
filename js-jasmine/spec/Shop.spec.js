var Shop = require('../src/shop.js');
var Item = require('../src/item.js');
describe("Gilded Rose", function() {

    it("should foo", function() {
        const gildedRose = new Shop([new Item("foo", 2, 5)]);
        console.log('checking gildedRose', gildedRose)
            // declared a new shop & new item with name,
            //sell in value (this says the no. days until they have to sell them) 
            //and quality  value 
        const items = gildedRose.updateQuality();
        // update quality reduced sellIn and quality by 1 
        console.log('checking the items', items)
            // items[0].name checks the first item in the item array and returns its name. Thats why 'fixme' was wrong because items name is 'foo' 
        expect(items[0].name).toEqual("foo");
    });

});

describe('Shop()', function() {
    let gildedRose
    let item
    beforeEach(function() {
        gildedRose = new Shop([new Item('bread', 5, 7)])
            //instantiated a new shop and item (bread)
        item = gildedRose.updateQuality()
            // let item = the update to the item in the shop (gildedRose)
    })
    it('reduce sellIn value after using updateQuality function', function() {
        expect(item[0].sellIn).toEqual(4)
    })
    it('reduce quality value after using updateQuality function', function() {
        expect(item[0].quality).toEqual(6)
    })
    it('return the name of the item when called', function() {
        expect(item[0].name).toEqual("bread");
    })
    it('Once the sell by date has passed, quality drops twice as fast', function() {
        let gildedRose = new Shop([new Item('bread', 0, 7)])
        let item1 = gildedRose.updateQuality()
        expect(item1[0].quality).toEqual(5)
    })
    it('Sulfuras, Hand of Ragnaros never decreases in sellIn or quality', function() {
        const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
        expect(items[0].sellIn).toEqual(1);
    })
    it('Multiple items', function() {
        const gildedRose = new Shop([new Item('Conjured', 0, 4), new Item('Aged Brie', 1, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
        expect(items[0].sellIn).toEqual(-1);
        expect(items[1].quality).toEqual(50);
        expect(items[1].sellIn).toEqual(0);
    })
});

describe('Aged Brie', function() {

    it('"Aged Brie" actually increases in Quality the older it gets', function() {
        gildedRose = new Shop([new Item('Aged Brie', 2, 5)])
        item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(6)
    })

    it('Quality increases by 2 when there are 10 days', function() {
        gildedRose = new Shop([new Item('Aged Brie', 10, 5)])
        item = gildedRose.agedBrie()
        expect(item[0].quality).toEqual(7) // how to make this work?
    })

    it('Quality drops to 0 after the concert', function() {
        //concert??
        gildedRose = new Shop([new Item('Aged Brie', 10, 5)])
        item = gildedRose.agedBrie()
        expect(item[0].quality).toEqual(0)
    })

    it('The Quality of an item is never more than 50', function() {
        gildedRose = new Shop([new Item('Aged Brie', 10, 50)])
        item = gildedRose.agedBrie()
        expect(item[0].quality).toEqual(50)
    })
})

describe('backstage passes', function() {
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
describe('faster rates', function() {

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