const AgedBrie = require('../src/aged_brie.js')
const Shop = require('../src/gilded_rose.js')

describe("Testing the Aged Brie class", () => {
    it("Aged brie will increase quality by 2 when SellIn date is 0", () => {
        let item = [new AgedBrie(0, 0)];
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(2);
    });

    it("Aged Brie does not increase in quality when quality is already 50", () => {
        let item = [new AgedBrie(0, 50)];
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(50);
    });

    it("Aged Brie will increase in quality by 1 when SellIn date is a positive number", () => {
        let item = [new AgedBrie(10, 5)];
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(6);
    });

    it("Aged Brie sellIn decreases by 1 regardless of quality", () => {
        let item = [new AgedBrie(10, 0)];
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).toEqual(9);
    });

});