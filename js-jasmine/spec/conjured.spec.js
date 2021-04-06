const Item = require('../src/item.js');
const Conjured = require('../src/conjured.js');

describe("conjured update quality (positive)", function(){
    it("degrades in quality twice as fast", function(){
        let conjured = new Conjured(new Item("Conjured", -17, 25));
        let result = conjured.updateQuality();
        expect(result.quality).toEqual(23);
    });

    it("quality cannot exceed 50", function(){
        conjured = new Conjured(new Item("Conjured", 11, 60));
        result = conjured.updateQuality()
        expect(result.quality).toEqual(50);
    });

    it("quality cannot be negative", function(){
        conjured = new Conjured(new Item("Conjured", 31, -10));
        result = conjured.updateQuality()
        expect(result.quality).toEqual(0);
    });
});

describe("conjured sell in", function(){
    it("sell in decreases by one (positive)", function(){
        conjured = new Conjured(new Item("Conjured", 10, 19));
        result = conjured.updateQuality();
        expect(result.sellIn).toEqual(9);
    })
    
    it("sell in decreases by one (negative)", function(){
        conjured = new Conjured(new Item("Conjured", -5, 8));
        result = conjured.updateQuality();
        expect(result.sellIn).toEqual(-6);
    });

    it("sell in decreases by one (zero)", function(){
        conjured = new Conjured(new Item("Conjured", 0, 8));
        result = conjured.updateQuality();
        expect(result.sellIn).toEqual(-1);
    });
});