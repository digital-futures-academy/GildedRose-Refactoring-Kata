const Conjured = require('../../src/conjured');
const Shop = require('../../src/shop');

describe("Testing the conjured item functionality", function() {
    it("Testing to see if the sellIn decreases", function() {
        let conjured = [new Conjured(10, 10)];
        let shop = new Shop(conjured);
        shop.change();
        expect(shop.items[0].quality).toBe(9);
    })
    it("Testing that the quality degrades twice as fast as normal items", function() {
        let conjured = [new Conjured(10, 10)];
        let shop = new Shop(conjured);
        shop.change();
        expect(shop.items[0].sellIn).toBe(9);
    })
    it("Testing that the quality degrades twice as fast past sellIn date", function() {
        let conjured = [new Conjured(0, 10)];
        let shop = new Shop(conjured);
        shop.change();
        expect(shop.items[0].quality).toBe(6);
    })
})
