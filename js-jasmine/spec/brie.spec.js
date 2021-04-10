const Shop = require('../src/shop');
const AgedBrie = require('../src/brie');

describe("Testing functionality for Brie items", function() {
    it("Checking that brie quality is increased with sellin date decreased", function() {
        let agedBrie = [new AgedBrie(10, 0)];
        let shop = new Shop(agedBrie);
        shop.change();
        expect(shop.items[0].quality).toBe(1);
    });
    it('Checking that the quality cannot be more than 50', function() {
        let agedBrie = [new AgedBrie(50, 50)];
        let shop = new Shop(agedBrie);
        shop.change()
        expect(shop.items[0].quality).toBe(50);  
    });
});