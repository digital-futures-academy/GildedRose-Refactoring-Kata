const itemsDict = require('./itemsDict.js');

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const itemClass = itemsDict[this.items[i].name]
      const newItem = new itemClass(this.items[i])
      newItem.update()
    }
     return this.items
  }
}
module.exports = {
  Item,
  Shop
}