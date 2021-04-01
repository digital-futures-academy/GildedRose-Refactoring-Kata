const Item = require('./item.js')

class Ordinary {
  constructor (item) {
    this.item = item
  }
  update () {
        this.item.sellIn -= 1
        if (this.item.quality > 0) {
          this.item.quality -= 1
        }
        if (this.item.sellIn <= 0 && this.item.quality > 0) {
          this.item.quality -= 1
        }
    return this.item
  }
}
module.exports = Ordinary
