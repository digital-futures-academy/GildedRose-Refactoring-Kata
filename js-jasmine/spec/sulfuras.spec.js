const Item = require("../src/item.js");
const Sulfuras = require("../src/sulfuras.js");

describe("sulfuras update quality", function() {
	it("quality is always 80 (positve)", function() {
		let sulfuras = new Sulfuras(new Item("Sulfuras, Hand of Ragnaros", 10, 15));
		let result = sulfuras.updateQuality();
		expect(result.quality).toEqual(80);
	});

	it("quality is always 80 (negative)", function() {
		let sulfuras = new Sulfuras(new Item("Sulfuras, Hand of Ragnaros", 1, -33));
		let result = sulfuras.updateQuality();
		expect(result.quality).toEqual(80);
	});

	it("quality is always 80 (zero)", function() {
		let sulfuras = new Sulfuras(new Item("Sulfuras, Hand of Ragnaros", 5, 0));
		let result = sulfuras.updateQuality();
		expect(result.quality).toEqual(80);
	});
});

describe("sulfuras sell in", function() {
	it("sell in does not change (positive)", function() {
		sulfuras = new Sulfuras(new Item("Sulfuras, Hand of Ragnaros", 56, 80));
		result = sulfuras.updateQuality();
		expect(result.sellIn).toEqual(56);
	});

	it("sell in does not change (negative)", function() {
		sulfuras = new Sulfuras(new Item("Sulfuras, Hand of Ragnaros", -16, 80));
		result = sulfuras.updateQuality();
		expect(result.sellIn).toEqual(-16);
	});

	it("sell in does not change (zero)", function() {
		sulfuras = new Sulfuras(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
		result = sulfuras.updateQuality();
		expect(result.sellIn).toEqual(0);
	});
});