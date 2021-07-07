class Conjured {
  constructor (item) {
    this.name = item.name
    this.quality = item.quality
    this.sellIn = item.sellIn
  }

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
