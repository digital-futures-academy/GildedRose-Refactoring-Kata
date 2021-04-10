const Sulfuras = require('../../src/sulfuras');
const Shop = require('../../src/shop');

describe("Testing Sulfuras functionality", function() {
    it("Testing that the sell in date does not decrease", function() {
        let sulfuras = [new Sulfuras(10, 15)];
        let shop = new Shop(sulfuras);
        shop.change();
        expect(this.items[0].sellIn).toBe(10);
    })
    it("Testing that the quality does not decrease", function() {
        let sulfuras = [new Sulfuras(10, 15)];
        let shop = new Shop(sulfuras);
        shop.change();
        expect(this.items[0].quality).toBe(15);
    })
})