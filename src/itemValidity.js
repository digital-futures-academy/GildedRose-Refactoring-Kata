
class ItemValidity {
  constructor (NormalItemClass, SpecialtyItemClass) {
    this.normalItem = new NormalItemClass()
    this.specialtyItem = new SpecialtyItemClass()
  }

  checkIfNegative (item) {
    if (item.quality < 0) {
      item.quality = 'Cannot be negative'
    } else {
      this.checkIfSulfuras(item)
    }
  }

  checkIfSulfuras (item) {
    if (item.quality > 50) {
      if (item.name === 'Sulfuras') {
        if (item.quality === 80) {
          this.specialtyItem.updateQualitySulfuras(item)
        } else {
          item.quality = 'Sulfuras can only have a Quality of 80'
        }
      } else {
        item.quality = 'Quality cannot be over 50'
      }
    } else {
      this.directValidItems(item)
    }
  }

  directValidItems (item) {
    const itemNameArray = item.name.split(' ')
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.specialtyItem.updateQualityBP(item)
    } else if (item.name === 'Aged Brie') {
      this.specialtyItem.updateQualityBrie(item)
    } else if (itemNameArray[0] === 'Conjured') {
      this.specialtyItem.updateQualityConjuredItem(item)
    } else if (item.name === 'Sulfuras') {
      item.quality = 'Sulfuras can only have a Quality of 80'
    } else {
      this.normalItem.updateQualityNormal(item)
    }
  }
}

module.exports = ItemValidity
