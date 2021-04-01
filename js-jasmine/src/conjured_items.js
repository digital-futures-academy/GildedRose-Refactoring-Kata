const Item = require('./item.js')

class Conjured {
  constructor (item) {
    this.item = item
  }
  update () {
        this.item.sellIn -= 1
        if (this.item.quality > 0) {
          this.item.quality -= 2
        }
    return this.item
  }
}
module.exports = Conjured
