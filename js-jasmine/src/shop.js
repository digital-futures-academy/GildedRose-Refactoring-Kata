const AgedBrie = require('./agedBrie.js')
const BackstagePass = require('./backstagePass.js')
const Conjured = require('./conjured.js')
const Sulfuras = require('./sulfuras.js')
const StandardItem = require('./standardItem.js')

const SpecialItems = {
  'Aged Brie': AgedBrie,
  'Backstage passes to a TAFKAL80ETC concert': BackstagePass,
  'Conjured Mana Cake': Conjured,
  'Sulfuras, Hand of Ragnaros': Sulfuras
}

class Shop {
  constructor (items = []) {
    this.items = items.map(item => {
      const ItemClass = SpecialItems[item.name] || StandardItem
      return new ItemClass(item)
    })
  }

  updateQuality () {
    this.items.map(item => item.update())
  }
}

module.exports = Shop
