var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose Items", function() {

  it("can update aged brie", function () {
    let gildedRose = new Shop([ new Item("Aged Brie", 0, 20) ]);
    let items = gildedRose.updateQuality()
    expect(items[0].quality).toEqual(21);
  });
it("can update backstage pass", function() {
    let gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
    let items = gildedRose.updateQuality()
    expect(items[0].quality).toEqual(23);
  });
   it(" can update Sulfuras ", function() {
    let gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 20) ]);
    let items = gildedRose.updateQuality()
    expect(items[0].quality).toEqual(80);
   });
    it("can update a normal item ", function() {
    let gildedRose = new Shop([ new Item("milkshake", 0, 20) ]);
    let items = gildedRose.updateQuality()
    expect(items[0].quality).toEqual(19);
   });
  it('can update a conjured item', function() {
        const gildedRose = new Shop([new Item('Conjured', 5, 20)])
        let items = gildedRose.updateQuality()
        expect(items[0].quality).toEqual(18)
    })
});

  
    