const Item = require('./item.js')

class Passes {
  constructor (item) {
    this.item =item
  }

  update () {
      if (this.item.quality < 50) {
        this.item.sellIn -= 1
        this.item.quality += 1
        if (this.item.sellIn <= 10 ) {
          this.item.quality += 1
          if (this.item.sellIn <= 5 && this.item.sellIn >= 1) {
            this.item.quality += 1
          }
          if (this.item.sellIn <= 0) {
            this.item.quality = 0
          }
        }
      }
    return this.item
  }
}
module.exports = Passes
