const Item = require('./item.js');
const RegularItems = require('./regular.js'); 
const AgedBrie = require("./agedBrie.js"); 
const BackstagePass = require('./backstage.js') ;
const Conjured = require('./conjured.js');
const Sulfuras = require('./sulfuras.js') ;

class Shop {
  constructor(items = [item = new Item]){
    this.items = items;
  }
  update() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') { 
        new Sulfuras(this.items[i]).updateQuality();
      } else
      if (this.items[i].name === 'Aged Brie'){
        new AgedBrie(this.items[i]).updateQuality();
      } else
      if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'){
        new BackstagePass(this.items[i]).updateQuality();
      } else
      if (this.items[i].name === 'Conjured'){
        new Conjured(this.items[i]).updateQuality();
      } else {
        new RegularItems(this.items[i]).updateQuality();
      } 
    }
    return this.items;
  }
}

module.exports = Shop
