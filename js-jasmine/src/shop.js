const Item = require('./item.js')
const AgedBrie = require('./agedbrie.js')
const Ordinary = require('./ordinary_items.js')
const Conjured = require('./conjured_items.js')
const Sulfuras = require('./sulfuras.js')
const Passes = require('./passes.js')

class Classes{
  'Aged Brie'= AgedBrie
   'Conjured'= Conjured
   'Ordinary'= Ordinary
   "Backstage passes to a TAFKAL80ETC concert"= Passes
   'Sulfuras, Hand of Ragnaros'= Sulfuras

}

class Shop {
  constructor(items=[]){
    this.items = items
  }

  update(){
     this.items.forEach(item =>{item = new Classes(item.name)
      item.update()} )
      return this.items
  }
   

}

module.exports = Shop
