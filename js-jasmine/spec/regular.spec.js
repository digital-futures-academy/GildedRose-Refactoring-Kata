const Item = require('../src/item.js');
const RegularItems = require('../src/regular.js');

describe("RegularItems update quality", function() {
    it("quality decreases by one when sell in positive", function() {
        let regular = new RegularItems(new Item("regular item", 20, 16));
        let result = regular.updateQuality();
        expect(result.quality).toEqual(15);
    });

    it("quality degrades twice as fast when sell in negative", function() {
        regular = new RegularItems(new Item("regular item", -13, 4)); 
        result = regular.updateQuality();
        expect(result.quality).toEqual(2);
    });

    it("quality degrades twice as fast when sell in is 0", function() {
        regular = new RegularItems(new Item("regular item", 0, 9)); 
        result = regular.updateQuality();
        expect(result.quality).toEqual(7);
    });

    it("quality cannot exceed 50", function() {
        regular = new RegularItems(new Item("regular item", 10, 55));
        result = regular.updateQuality();
        expect(result.quality).toEqual(50);
    });

    it("quality cannot be negative", function() {
        regular = new RegularItems(new Item("regular item", 2, -6));
        result = regular.updateQuality();
        expect(result.quality).toEqual(0);
    });
});

describe("RegularItems sell in", function() {
    it("sell in decreases by one (positive)", function() {
        regular = new RegularItems(new Item("regular item", 7, 12));
        result = regular.updateQuality();
        expect(result.sellIn).toEqual(6);
    });

    it("sell in decreases by one (negative)", function() {
        regular = new RegularItems(new Item("regular item", -42, 12));
        result = regular.updateQuality();
        expect(result.sellIn).toEqual(-43);
    });

    it("sell in decreases by one (zero)", function() {
        regular = new RegularItems(new Item("regular item", 0, 12));
        result = regular.updateQuality();
        expect(result.sellIn).toEqual(-1);
    });
});