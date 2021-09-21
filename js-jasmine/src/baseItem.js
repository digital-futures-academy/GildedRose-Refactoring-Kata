class BaseItem {
  constructor (item) {
    this.name = item.name
    this.sellIn = item.sellIn
    this.quality = item.quality
  }

  update () {
    throw new Error('Please implement me')
  }
}

module.exports = BaseItem
