const BaseItem = require('./baseItem.js')

class StandardItem extends BaseItem {
  update () {
    this.sellIn--
    if (this.quality > 0) { this.quality-- }
    if (this.sellIn < 0 && this.quality > 0) { this.quality-- }
  }
}

module.exports = StandardItem
