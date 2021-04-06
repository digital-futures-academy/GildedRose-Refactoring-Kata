const Item = require('../src/item.js');
const BackstagePass = require('../src/backstage.js');

describe("BackstagePass update quality", function() {
    it("quality increases by one if sell in greater than 10", function() {
        let backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", 30, 14));
        let result = backstage.updateQuality();
        expect(result.quality).toEqual(15);
    });

    it("quality increases by two if sell in between 6 and 10", function() {
        backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", 8, 21));
        result = backstage.updateQuality();
        expect(result.quality).toEqual(23);
    });

    it("quality increases by three if sell in between 1 and 5", function() {
        backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", 3, 42));
        result = backstage.updateQuality();
        expect(result.quality).toEqual(45);
    });

    it("quality equals 0 if sell in is 0", function() {
        backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10));
        result = backstage.updateQuality();
        expect(result.quality).toEqual(0);
    });

    it("quality equals 0 if sell in is negative", function() {
        backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", -2, 28));
        result = backstage.updateQuality();
        expect(result.quality).toEqual(0);
    });

    it("quality never exceeds 50", function() {
        backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50));
        result = backstage.updateQuality();
        expect(result.quality).toEqual(50);
    });

    it("quality is never negative", function() {
        backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", 5, -2));
        result = backstage.updateQuality();
        expect(result.quality).toEqual(0);
    });
});

describe("BackstagePass sell in", function() {
    
    it("sell in decreases by one (positive)", function() {
        backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", 8, 18));
        result = backstage.updateQuality();
        expect(result.sellIn).toEqual(7);
    });

    it("sell in decreases by one (negative)", function() {
        backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", -9, 30));
        result = backstage.updateQuality();
        expect(result.sellIn).toEqual(-10);
    });

    it("sell in decreases by one (zero)", function() {
        backstage = new BackstagePass(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10));
        result = backstage.updateQuality();
        expect(result.sellIn).toEqual(-1);
    });
});
