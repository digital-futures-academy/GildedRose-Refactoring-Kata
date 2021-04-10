const Shop = require('../src/shop');
const BackstagePass = require('../src/backstage-passes');

describe("Testing Backstage passes functionality", function() {
    it("Testing that the quality increases with the sellin decrease", function() {
        let backstagePass = [new BackstagePass(20, 20)]; //SellIn, Quality
        let shop = new Shop(backstagePass);
        shop.change();
        expect(shop.items[0].quality).toBe(21);
    });
    it("Testing that the sellIn decreases", function() {
        let backstagePass = [new BackstagePass(10, 20)];
        let shop = new Shop(backstagePass);
        shop.change();
        expect(shop.items[0].sellIn).toBe(9);
    })
    it("Testing that the quality increases by two with 10 days or less of sellIn", function() {
        let backstagePass = [new BackstagePass(10, 30)];
        let shop = new Shop(backstagePass);
        shop.change();
        expect(shop.items[0].quality).toBe(32);
    })
    it("Testing that the quality increases by three with 5 days of less of sellIn", function() {
        let backstagePass = [new BackstagePass(2, 10)];
        let shop = new Shop(backstagePass);
        shop.change();
        expect(shop.items[0].quality).toBe(13);
    })
}); it("Testing that concert ticket quality drops to 0", function() {
    let backstagePass = [new BackstagePass(0, 50)];
    let shop = new Shop(backstagePass);
    shop.change();
    expect(shop.items[0].quality).toBe(0);
})