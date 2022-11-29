
class NormalItem {
  updateQualityNormal (item) {
    if (item.quality > 1) {
      if (item.sellIn > 0) {
        item.quality = item.quality - 1
        item.sellIn = item.sellIn - 1
      } else {
        item.quality = item.quality - 2
        item.sellIn = item.sellIn - 1
      }
    } else if (item.quality <= 1) {
      item.sellIn = item.sellIn - 1
      item.quality = 0
    }
  }
}

module.exports = NormalItem
