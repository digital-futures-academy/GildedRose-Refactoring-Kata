const AgedBrie = require('./aged-brie');
const BackstagePass = require('./backstage-pass');
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
  'Sulfuras, Hand of Ragnaros': Sulfuras
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Aged Brie' || this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' || this.items[i].name === 'Sulfuras, Hand of Ragnaros'){
      const itemClass = Inventory[this.items[i].name];
        const item = new itemClass(this.items[i]);
        return item.update();
      }

      if (this.items[i].quality > 0) {
        this.items[i].quality = this.items[i].quality - 1;
      }

      this.items[i].sellIn = this.items[i].sellIn - 1;
      
      if (this.items[i].sellIn < 0) {
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}