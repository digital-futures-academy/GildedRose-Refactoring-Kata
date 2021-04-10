// var Shop = require('../src/shop');
// var Item = require('../src/item');
// describe("Check item assessment is correct", function() {

//   it("Check that the name of the item is correct.", function() {
//     let shop = new Shop([ new Item("foo", 0, 0) ]);
//     let items = shop.change();
//     expect(items[0].name).toEqual("foo");
//   });
//   it("Check that 'Aged Brie' quality increases by 1", function() {
//     let shop = new Shop([ new Item("Aged Brie", 1, 1) ]);
//     let items = shop.change();
//     expect(items[0].quality).toEqual(2);
//   });
//   it("Check that 'Sulfuras' does not change in quality value", function() {
//     let shop = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1, 1) ]);
//     let items = shop.change();
//     expect(items[0].quality).toEqual(1);
//     expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
//   });
//   it("Check that backstage passes increased by 2 for sellIn <= 10 days", function() {
//     let shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 2) ]);
//     let items = shop.change();
//     expect(items[0].quality).toEqual(4);
//   });

// });
