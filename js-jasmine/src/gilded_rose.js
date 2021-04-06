const AgedBrie = require("./agedBrie");
const BackstagePass = require("./backstagePass");
const Normal = require("./normal");

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

  updateQualityAndSellIn(this_shop){
    let agedBrie = new AgedBrie(this_shop)
    let backstagePass = new BackstagePass(this_shop)
    let normal = new Normal(this_shop)
    agedBrie.updateAgedBrie()
    backstagePass.updateBackstagePass()
    normal.updateNormal()
    return this.items
  }
}

module.exports = {
  Item,
  Shop}   
  



  