const Item = require('./item.js')

class Sulfuras {
  constructor (item) {
    this.item = item
  }

  update () {
    this.item.sellIn = this.item.sellIn
    this.item.quality = 80
    return this.item
  }
}
module.exports = Sulfuras
