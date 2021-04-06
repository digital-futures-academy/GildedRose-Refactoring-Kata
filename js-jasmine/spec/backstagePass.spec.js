const BackstagePass = require('../src/backstagePass.js');
class ItemDouble {
      constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}

describe("Backstage Pass", function() {

  it("1.  Quality increase by 1 as sell by date approaches", function() {
    let itemDouble = new ItemDouble("Backstage passes to a TAFKAL80ETC concert", 20, 20);
    let backstagePass = new BackstagePass(itemDouble);
    let item = backstagePass.update()
    expect(item.quality).toEqual(21);
  });
  it("2. Quality increases by 2 when there are 10 days or less", function () {
      let itemDouble = new ItemDouble("Backstage passes to a TAFKAL80ETC concert", 10, 20);
    let backstagePass = new BackstagePass(itemDouble);
    let item = backstagePass.update()
    expect(item.quality).toEqual(22);
    });
  it("3. Quality increases by 3 when there are 5 days or less", function () {
        let itemDouble = new ItemDouble("Backstage passes to a TAFKAL80ETC concert", 5, 20);
    let backstagePass = new BackstagePass(itemDouble);
    let item = backstagePass.update()
    expect(item.quality).toEqual(23);
  });
  it("4. Quality drops to 0 after the concert", function () {
      let itemDouble = new ItemDouble("Backstage passes to a TAFKAL80ETC concert", -1, 20);
    let backstagePass = new BackstagePass(itemDouble);
      let item = backstagePass.update()
    expect(item.quality).toEqual(0);
  });
  });
