var {Shop, Item} = require('../src/gilded_rose.js');

describe("updateQualityAndSellIn", function() {
  it("works for increasing edge cases 1", function() {
    let brie = new Item('Aged Brie', 2, 48)
    let shoe = new Item('Shoe', 2, 17)
    let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)
    let sulf = new Item('Sulfuras, Hand of Ragnaros', 80, 80)
    let shop = new Shop([brie,shoe,pass,sulf]) 
    expect(shop.updateQualityAndSellIn(shop)).toEqual([
      new Item('Aged Brie', 1, 49),
      new Item ('Shoe', 1, 16),
      new Item ('Backstage passes to a TAFKAL80ETC concert',4,48), 
      new Item ('Sulfuras, Hand of Ragnaros', 80,80)
      ]);
  })
  it("works for increasing edge cases 2", function() {
    let brie = new Item('Aged Brie', 2, 48)
    let shoe = new Item('Shoe', 2, 17)
    let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)
    let sulf = new Item('Sulfuras, Hand of Ragnaros', 80, 80)
    let shop = new Shop([brie,shoe,pass,sulf])
    shop.updateQualityAndSellIn(shop)
    expect(shop.updateQualityAndSellIn(shop)).toEqual([
      new Item('Aged Brie', 0, 50),
      new Item ('Shoe', 0, 15),
      new Item ('Backstage passes to a TAFKAL80ETC concert',3,50), 
      new Item ('Sulfuras, Hand of Ragnaros', 80,80)
    ]);
});
    it("works for increasing edge cases 3", function() {
    let brie = new Item('Aged Brie', 2, 48)
    let shoe = new Item('Shoe', 2, 17)
    let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)
    let sulf = new Item('Sulfuras, Hand of Ragnaros', 80, 80)
    let shop = new Shop([brie,shoe,pass,sulf]) 
    shop.updateQualityAndSellIn(shop)
    shop.updateQualityAndSellIn(shop)
      expect(shop.updateQualityAndSellIn(shop)).toEqual([
        new Item('Aged Brie', 0, 50),
        new Item ('Shoe', 0, 13),
        new Item ('Backstage passes to a TAFKAL80ETC concert', 2, 50), 
        new Item ('Sulfuras, Hand of Ragnaros', 80,80)
  ]);
});
it("works for increasing edge cases 4", function() {
  let brie = new Item('Aged Brie', 2, 48)
  let shoe = new Item('Shoe', 2, 17)
  let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)
  let sulf = new Item('Sulfuras, Hand of Ragnaros', 80, 80)
  let shop = new Shop([brie,shoe,pass,sulf]) 
  shop.updateQualityAndSellIn(shop)
  shop.updateQualityAndSellIn(shop)
  shop.updateQualityAndSellIn(shop)
    expect(shop.updateQualityAndSellIn(shop)).toEqual([
      new Item('Aged Brie', 0, 50),
      new Item ('Shoe', 0, 11),
      new Item ('Backstage passes to a TAFKAL80ETC concert', 1, 50), 
      new Item ('Sulfuras, Hand of Ragnaros', 80,80)
]);
});
it("works for increasing edge cases 5", function() {
  let brie = new Item('Aged Brie', 2, 48)
  let shoe = new Item('Shoe', 2, 17)
  let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)
  let sulf = new Item('Sulfuras, Hand of Ragnaros', 80, 80)
  let shop = new Shop([brie,shoe,pass,sulf]) 
  shop.updateQualityAndSellIn(shop)
  shop.updateQualityAndSellIn(shop)
  shop.updateQualityAndSellIn(shop)
  shop.updateQualityAndSellIn(shop)
    expect(shop.updateQualityAndSellIn(shop)).toEqual([
      new Item('Aged Brie', 0, 50),
      new Item ('Shoe', 0, 9),
      new Item ('Backstage passes to a TAFKAL80ETC concert', 0, 50), 
      new Item ('Sulfuras, Hand of Ragnaros', 80,80)
]);
});
it("works for increasing edge cases 6", function() {
  let brie = new Item('Aged Brie', 2, 48)
  let shoe = new Item('Shoe', 2, 17)
  let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)
  let sulf = new Item('Sulfuras, Hand of Ragnaros', 80, 80)
  let shop = new Shop([brie,shoe,pass,sulf]) 
  shop.updateQualityAndSellIn(shop)
  shop.updateQualityAndSellIn(shop)
  shop.updateQualityAndSellIn(shop)
  shop.updateQualityAndSellIn(shop)
  shop.updateQualityAndSellIn(shop)
    expect(shop.updateQualityAndSellIn(shop)).toEqual([
      new Item('Aged Brie', 0, 50),
      new Item ('Shoe', 0, 7),
      new Item ('Backstage passes to a TAFKAL80ETC concert', 0, 0), 
      new Item ('Sulfuras, Hand of Ragnaros', 80,80)
]);
});
});

describe("updateQualityAndSellIn", function() {
  it("works for decreasing edge cases 1", function() {
    let brie = new Item('Aged Brie', 4, 10)
    let shoe = new Item('Shoe', 1, 3)
    let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 25)
    let sulf = new Item('Sulfuras, Hand of Ragnaros', 80, 80)
    let shop = new Shop([brie,shoe,pass,sulf]) 
    expect(shop.updateQualityAndSellIn(shop)).toEqual([
      new Item('Aged Brie', 3, 11),
      new Item ('Shoe', 0, 2),
      new Item ('Backstage passes to a TAFKAL80ETC concert',10,26), 
      new Item ('Sulfuras, Hand of Ragnaros', 80,80)
      ]);
  })

  it("works for decreasing edge cases 2", function() {
    let brie = new Item('Aged Brie', 4, 10)
    let shoe = new Item('Shoe', 1, 3)
    let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 25)
    let sulf = new Item('Sulfuras, Hand of Ragnaros', 80, 80)
    let shop = new Shop([brie,shoe,pass,sulf]) 
    shop.updateQualityAndSellIn(shop)
    expect(shop.updateQualityAndSellIn(shop)).toEqual([
      new Item('Aged Brie', 2, 12),
      new Item ('Shoe', 0, 0),
      new Item ('Backstage passes to a TAFKAL80ETC concert',9,28), 
      new Item ('Sulfuras, Hand of Ragnaros', 80,80)
      ]);
  })
  
  
});

