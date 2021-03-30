const Shop = require('../src/gilded_rose.js')
const Conjured = require('../src/conjured.js')

describe("Testing the conjured item class", () => {
    it("Checking that a conjured item has its quality decreased by 2", () => {
        let item = [new Conjured(10, 20)];
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(18);
    });

    it("Checking that a conjured item that has a sellIn value of 0 will have it's quality decreased by 4", () => {
        let item = [new Conjured(0, 20)];
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(16);
    });

    it("Checking that every conjured items sellIn decreases by 1 regardless of quality", () => {
        let item = [new Conjured(5, 0)];
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).toEqual(4);
    });
});