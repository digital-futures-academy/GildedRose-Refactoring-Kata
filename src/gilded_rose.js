
class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor (items, ValidatorClass, NormalItemClass, SpecialtyItemClass) {
    this.items = items
    this.itemValidator = new ValidatorClass(NormalItemClass, SpecialtyItemClass)
  }

  updateQuality () {
    for (let i = 0; i < this.items.length; i++) {
      this.itemValidator.checkIfNegative(this.items[i])
    }
    return this.items
  }
}

module.exports = { Item, Shop }
