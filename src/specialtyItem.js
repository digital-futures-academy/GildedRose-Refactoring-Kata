
class UpdateSpecialtyItem {
  updateQualityBrie (item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      item.sellIn = item.sellIn - 1
    } else {
      item.sellIn = item.sellIn - 1
    }
  }

  updateQualitySulfuras (item) {
    item.sellIn = item.sellIn - 1
  }

  updateQualityBP (item) {
    if (item.quality < 50) {
      if (item.sellIn <= 0) {
        item.sellIn = item.sellIn - 1
        item.quality = 0
      } else if (item.sellIn < 6) {
        item.quality = item.quality + 3
        item.sellIn = item.sellIn - 1
      } else if (item.sellIn < 11) {
        item.quality = item.quality + 2
        item.sellIn = item.sellIn - 1
      } else if (item.sellIn >= 11) {
        item.quality = item.quality + 1
        item.sellIn = item.sellIn - 1
      }
    } else {
      item.sellIn = item.sellIn - 1
    }
  }

  updateQualityConjuredItem (item) {
    item.quality = item.quality - 2
    item.sellIn = item.sellIn - 1
  }
}

module.exports = UpdateSpecialtyItem
