const AgedBrie = require('./aged-brie');
const BackstagePass = require('./backstage-pass');
const Conjured = require('./conjured');
const Regular = require('./regular');
const Sulfuras = require('./sulfuras');

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const Inventory = {
  'Aged Brie': AgedBrie,
  'Backstage passes to a TAFKAL80ETC concert': BackstagePass,
  'Sulfuras, Hand of Ragnaros': Sulfuras,
  'Regular': Regular,
  'Conjured': Conjured,
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const itemClass = Inventory[this.items[i].name] || Inventory['Regular'];
      const item = new itemClass(this.items[i]);
      item.update();
      }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
