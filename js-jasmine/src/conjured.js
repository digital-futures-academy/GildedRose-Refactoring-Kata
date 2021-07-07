const BaseItem = require('./baseItem.js')

class Conjured extends BaseItem {
  update () {
    this.sellIn--
    this.quality--
    this.quality--
    if (this.sellIn < 0) {
      this.quality--
      this.quality--
    }
    if (this.quality < 0) { this.quality = 0 }
  }
}

module.exports = Conjured
