var {Shop, Item} = require('../src/gilded_rose.js');

// describe('Checking item class', function() {
//   it('Checking that the name of the item is correct', function() {
//     const gildedRose = new Shop([ new Item("Wine", 0, 0) ]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toEqual("Wine");
//   });

// });

// describe("Checking lowerValue() method", function() {
//   it('Checking that in a regular item the quality value has been decreased by 1', function() {
//     const gildedRose = new Shop([ new Item('Wine', 10, 30) ]);
//     const items = gildedRose.lowerValue();
//     expect(items[0].quality).toEqual(29);
//   });

//   it('Checking that in a regular item the sellIn value has been decreased by 1', function() {
//     const gildedRose = new Shop([ new Item('Wine', 10, 30) ]);
//     const items = gildedRose.lowerValue();
//     expect(items[0].sellIn).toEqual(9);
//   });

//   it('Checking that when sellIn is less than 0, quality decreases by 2', function () {
//     const gildedRose = new Shop([ new Item('Wine', -1, 30) ]);
//     const items = gildedRose.lowerValue();
//     expect(items[0].quality).toEqual(28); 
//   });
// });

// describe('Checking increaseQuality() method', function() {
//   it('Checking that increaseQuality method will increase quality', function () {
//     const gildedRose = new Shop([ new Item('Wine', 8, 30) ]);
//     const items = gildedRose.increaseQuality();
//     expect(items[0].quality).toEqual(31); 
//   })
// });

// describe('Checking isSulfuras() method', function() {
//   it('Checking that isSulfuras method will return true if item is Sulfuras', function() {
//     const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
//     expect(gildedRose.isSulfuras()).toEqual(true); 
//   });

//   it('Checking that isSulfuras method will return false if item is not Sulfuras', function() {
//     const gildedRose = new Shop([ new Item('Wine', 0, 80) ]);
//     expect(gildedRose.isSulfuras()).toEqual(false); 
//   });
// });

// describe('Checking conjured() method', function() {
//   it('Checking that if item is conjured the method will return updated quality', function() {
//     const gildedRose = new Shop([ new Item('Conjured Mana Cake', 5, 8) ]);
//     const items = gildedRose.conjured();
//     expect(items[0].quality).toEqual(7);
//   });

//   it('Checking that if item is not conjured the method will not change quality', function() {
//     const gildedRose = new Shop([ new Item('Mana Cake', 5, 8) ]);
//     const items = gildedRose.conjured();
//     expect(items[0].quality).toEqual(8);
//   })

//   it('Checking that lowerValues() and conjured() will lower quality twice as fast', function() {
//     const gildedRose = new Shop([ new Item('Conjured Mana Cake', 5, 8) ]);
//     let items = gildedRose.lowerValue();
//     items = gildedRose.conjured();
//     expect(items[0].quality).toEqual(6);
//   })
// });