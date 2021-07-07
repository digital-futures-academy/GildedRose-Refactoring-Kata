const AgedBrie = require("./agedBrie.js")
const BackstagePass = require("./backstagePass.js")
const Conjured = require("./conjured.js")
const Sulfuras = require("./sulfuras.js")
const StandardItem = require("./standardItem.js")

class Shop {
  constructor(items=[]){
    this.items = items.map(item => {
      if (item.name === "Aged Brie") {
        return new AgedBrie(item)
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert'){
        return new BackstagePass(item)
      } else if (item.name === 'Conjured Mana Cake'){
        return new Conjured(item)
      } else if (item.name === 'Sulfuras, Hand of Ragnaros'){
        return new Sulfuras(item)
      } else {
        return new StandardItem(item)
      }
    });
  }

  updateQuality() {
    this.items.forEach(item => item.update())
    return this.items
  }
}

module.exports = Shop
