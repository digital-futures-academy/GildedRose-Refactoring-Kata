const NormalItemQuality = require("./normalItemQualityCheck");
const SulfurasQuality = require('./sulfurasQualityCheck');
const SellIn = require('./sell-In');
const Conjured = require("./conjured");
const BackstagePass = require("./backstagePass");
const AgedBrie = require("./agedBrie");

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      
      this.normalItemQuality = new NormalItemQuality(this.items[i]);
      this.items[i] = this.normalItemQuality.check()

      this.sulfurasQuality = new SulfurasQuality(this.items[i]);
      this.items[i] = this.sulfurasQuality.check()

      this.quality(this.items[i]);

      this.sellIn = new SellIn(this.items[i]);
      this.items[i] = this.sellIn.reduce()

      this.sellInPast(this.items[i]);

    }

    return this.items;

  }

  quality(item){

    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') {
      if (item.quality > 0) {
        item.quality--;
      }
      this.conjured = new Conjured(item);
      this.item = this.conjured.check();
    } else {
      if (item.quality < 50) {
        item.quality++;
        this.backstagePass = new BackstagePass(item)
        this.item = this.backstagePass.check();
      }
    }
  }

  sellInPast(item){

    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie' && item.name != 'Sulfuras, Hand of Ragnaros') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            item.quality--;
          }
          this.conjured = new Conjured(item);
          item = this.conjured.check();
        } else {
          item.quality = 0;
        }
      } else {
        this.agedBrie = AgedBrie(item)
        item = this.agedBrie.increaseQuality();
      }
    }
  }

}

module.exports = {
  Item,
  Shop
};

