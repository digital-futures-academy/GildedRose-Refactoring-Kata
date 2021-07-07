const AgedBrie = require("./agedBrie.js")
const BackstagePass = require("./backstagePass.js")
const Conjured = require("./conjured.js")

class Shop {
  constructor(items=[]){
    this.items = items.map(item => {
      if (item.name === "Aged Brie") {
        return new AgedBrie(item)
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert'){
        return new BackstagePass(item)
      } else if (item.name === 'Conjured Mana Cake'){
        return new Conjured(item)
      } else {
        return item
      }
    });
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Conjured Mana Cake') { this.items[i].update() }
      if (this.items[i].name === 'Aged Brie') { this.items[i].update() }
      if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') { this.items[i].update() }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name !== 'Conjured Mana Cake') {
        if (this.items[i].quality > 0) { this.items[i].quality--; }
        this.items[i].sellIn--;
        if (this.items[i].sellIn < 0 && this.items[i].quality > 0) { this.items[i].quality--; }
      }
    }

    return this.items;
  }
}

module.exports = Shop
