const Normal = require('../src/normal');
const Shop = require('../src/shop');

describe("Testing normal item functionality", function() {
    it("Testing that the quality decreases with sellin date", function() {
        let normal = [new Normal(10, 20)];
        let shop = new Shop(normal);
        shop.change();
        expect(shop.items[0].quality).toBe(19);
    });
    it("Testing that the sellin decreses", function() {
        let normal = [new Normal(10, 20)];
        let shop = new Shop(normal);
        shop.change();
        expect(shop.items[0].sellIn).toBe(9);
    })
    it("Test that the item quality degrades twice as fast past the sellIn date", function() {
        let normal = [new Normal(0, 20)];
        let shop = new Shop(normal);
        shop.change();
        expect(shop.items[0].quality).toBe(18);
    })
});