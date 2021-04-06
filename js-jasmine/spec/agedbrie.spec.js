const Item = require('../src/item.js');
const AgedBrie = require('../src/agedBrie.js');

describe("AgedBrie update quality", function() {
    it("quality increases by one", function() {
        let agedbrie = new AgedBrie(new Item("Aged Brie", 12, 26));
        let result = agedbrie.updateQuality();
        expect(result.quality).toEqual(27);
    });

    it("quality cannot be negative", function() {
        agedbrie = new AgedBrie(new Item("Aged Brie", 10, -5));
        result = agedbrie.updateQuality();
        expect(result.quality).toEqual(0);
    });

    it("quality never exceeds 50", function() {
        agedbrie = new AgedBrie(new Item("Aged Brie", -1, 60));
        result = agedbrie.updateQuality();
        expect(result.quality).toEqual(50);
    });
});

describe("AgedBrie sell in", function() {
    it("sell in decreases by one (positive)", function() {
        agedbrie = new AgedBrie(new Item("a regular item", 8, 18));
        result = agedbrie.updateQuality();
        expect(result.sellIn).toEqual(7);
    });

    it("sell in decreases by one (negative)", function() {
        agedbrie = new AgedBrie(new Item("a regular item", -9, 30));
        result = agedbrie.updateQuality();
        expect(result.sellIn).toEqual(-10);
    });

    it("sell in decreases by one (zero)", function() {
        agedbrie = new AgedBrie(new Item("a regular item", 0, 10));
        result = agedbrie.updateQuality();
        expect(result.sellIn).toEqual(-1);
    });
});