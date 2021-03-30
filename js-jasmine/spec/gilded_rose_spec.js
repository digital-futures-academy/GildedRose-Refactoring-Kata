var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("1. quality decreases twice as fast after sell by date", function() {
    let gildedRose = new Shop([ new Item("milkshake", 0, 20) ]);
    gildedRose.updateQuality()
    gildedRose.updateQuality()
    let items =  gildedRose.updateQuality()
    expect(items[0].quality).toEqual(16);
  });

  it("2. quality decreases by 1 before sell by date", function() {
    let gildedRose = new Shop([ new Item("milkshake", 2, 20) ]);
    gildedRose.updateQuality()
    gildedRose.updateQuality()
    let items =  gildedRose.updateQuality()
    expect(items[0].quality).toEqual(18);
  });
  
    it("3. The Quality of an item is never more than 50", function() {
      let gildedRose = new Shop([new Item("milkshake", 0, 60)]);
      let items =  gildedRose.updateQuality()
      expect(items[0].quality).toEqual("Please enter a valid quality");
    });
   it("4. Sulfuras never decreases in quality", function() {
      let gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 50)]);
      let items =  gildedRose.updateQuality()
      expect(items[0].quality).toEqual(50);
     });
  
      it("5. Sulfuras never sold so sellin never changes", function() {
      let gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 50)]);
     let items =  gildedRose.updateQuality()
      expect(items[0].sellIn).toEqual(10);
      });
  
  it("6. Aged Brie quality increases the older it gets", function() {
      let gildedRose = new Shop([new Item("Aged Brie", 1, 48)]);
    let items = gildedRose.updateQuality()
    console.log('test 6. aged brie quality',items[0].quality)
      expect(items[0].quality).toEqual(49);
  });
   it("7. Backstage pass quality increases by 3 when sell by date is less than or equal to 5", function() {
      let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)]);
     let items =  gildedRose.updateQuality()
      expect(items[0].quality).toEqual(43);
   });
  
     it("8. Backstage quality increases by 2 when sell by date is less than or equal to 10", function() {
      let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)]);
       let items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(42);
     });
       it("9. quality of backstage pass items are 0 at concert day", function() {
      let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]);
       let items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(0);
       });
      
         it("10. quality of Aged Brie is 0 at concert day", function() {
      let gildedRose = new Shop([new Item("Aged Brie", 0, 40)]);
       let items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(0);
         });
 
       it("11. quality of  Sulfuras, Hand of Ragnaros doesnt decrease", function() {
      let gildedRose = new Shop([new Item("", 0, 40)]);
       let items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(40);
  });
});

  
    