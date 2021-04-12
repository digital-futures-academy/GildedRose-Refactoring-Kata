let updater = require('./itemupdater.js')

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
    let updatestock = new updater(this.items)
    updatestock.update()
    return this.items;
  }
}


module.exports = {
  Item,
  Shop
}
