const Item = require('./item.js')

class AgedBrie {
  constructor (item) {
    this.item = item
  }

  update () {
    this.item.sellIn -= 1
    if (this.item.quality < 50) {
      this.item.quality += 1
    }
    return this.item
  }
}
module.exports = AgedBrie
