var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  // testing original code, will modify after refactoring 

  it("should subtract two from quality when sellIn is negative", function(){
    let gildedRose = new Shop( [new Item("regular item", -5, 20)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(18);
  });

  it("should subtract one from quality when sellIn is positive", function(){
    gildedRose = new Shop( [new Item("regular item", 5, 20)] ); 
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(19);
  });

  it("increase in quality of aged brie over time", function(){
    gildedRose = new Shop( [new Item("Aged Brie", 5, 10)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(11);
  });

  it("decrease in quality of regular items over time", function(){
    gildedRose = new Shop( [new Item("regular item", 5, 10)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9)
  });

  it("quality should never be negative", function(){
    gildedRose = new Shop( [new Item("regular item", 2, 0)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  });

  it("quality is never more than 50", function(){
    gildedRose = new Shop( [new Item("Aged Brie", 15, 50)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  });

  it("quality is never more that 50", function(){
    gildedRose = new Shop( [new Item("Backstage pass", 5, 50)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50) // fails
  });

  it("sulfuras does not decrease in quality", function(){
    gildedRose = new Shop( [new Item("Sulfuras", 5, 10)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(10) // fails
  });

  it("sulfuras never has to be sold", function(){
    gildedRose = new Shop( [new Item("Sulfuras", 0, 10)] );
    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0) // fails 
  });

  it("backstage passes quality increases over time", function(){
    gildedRose = new Shop( [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 25)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(26)
  });

  it("backstage passes quality increases by two if sellIn <= 10", function(){
    gildedRose = new Shop( [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(32)
  });

  it("backstage passes quality increases by three if sellIn <= 5", function(){
    gildedRose = new Shop( [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(43)
  });

  it("backstage passes quality eqauls zero after concert", function(){
    gildedRose = new Shop( [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50)] );
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  }); 
});
