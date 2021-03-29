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

describe('Class: Shop()', function() {
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
        let shop = new Shop([new Item('bread', 0, 7)])
        let item1 = shop.updateQuality()
        expect(item1[0].quality).toEqual(5)
    })
})

describe('Aged Brie', function() {

    it('"Aged Brie" actually increases in Quality the older it gets', function() {
        gildedRose = new Shop([new Item('Aged Brie', 2, 5)])
        item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(6)
    })

    xit('Quality increases by 2 when there are 10 days', function() {
        gildedRose = new Shop([new Item('Aged Brie', 10, 5)])
        item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(7) // how to make this work?
    })

    xit('Quality drops to 0 after the concert', function() {
        //concert??
        gildedRose = new Shop([new Item('Aged Brie', 10, 5)])
        item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(0)
    })

    it('The Quality of an item is never more than 50', function() {
        gildedRose = new Shop([new Item('Aged Brie', 10, 50)])
        item = gildedRose.updateQuality()
        expect(item[0].quality).toEqual(50)
    })
})

describe('backstage passes', function() {
    let shop
    let item
    beforeEach(function() {
        shop = new Shop([new Item("backstage passes", 10, 5)])
        item = shop.updateQuality()
    })
    it('increases in quality as sellIn date approaches', function() {
        expect(item[0].quality).toEqual(6)
    })
})