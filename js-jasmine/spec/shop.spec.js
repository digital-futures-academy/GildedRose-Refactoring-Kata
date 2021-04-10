const Item = require("../src/item.js");
const Shop = require("../src/shop.js");

let shop;
let items;

describe("shop class", function() {
	it("can update aged brie quality", function() {
		let shop = new Shop([new Item("Aged Brie", -5, 20)]);
		let items = shop.update();
		expect(items[0].quality).toEqual(21);
	});

	it("can update aged brie sell in", function() {
		shop = new Shop([new Item("Aged Brie", 30, 20)]);
		items = shop.update();
		expect(items[0].sellIn).toEqual(29);
	});

	it("can update regular item quality", function() {
		shop = new Shop([new Item("regular item", 5, 30)]); 
		items = shop.update();
		expect(items[0].quality).toEqual(29);
	});

	it("can update regular item sell in", function() {
		shop = new Shop([new Item("regular item", -8, 12)]); 
		items = shop.update();
		expect(items[0].sellIn).toEqual(-9);
	});

	it("can update backstage pass quality", function() {
		shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 21, 19)]);
		items = shop.update();
		expect(items[0].quality).toEqual(20);
	});

	it("can update backstage pass sellIn", function() {
		shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 13)]);
		items = shop.update();
		expect(items[0].sellIn).toEqual(3);
	});

	it("can update conjured quality", function() {
		shop = new Shop([new Item("Conjured", 2, 41)]);
		items = shop.update();
		expect(items[0].quality).toEqual(39);
	});

	it("can update conjured sellIn", function() {
		shop = new Shop([new Item("Conjured", 15, 9)]);
		items = shop.update();
		expect(items[0].sellIn).toEqual(14);
	});

	it("can update sulfuras quality", function() {
		shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 11, 34)]);
		items = shop.update();
		expect(items[0].quality).toEqual(80);
	});

	it("can update sulfuras sellIn", function() {
		shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 17, 80)]);
		items = shop.update();
		expect(items[0].sellIn).toEqual(17);
	});
});