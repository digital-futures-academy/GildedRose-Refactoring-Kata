const Item = require('../src/item.js')

class NormalItem {
    constructor(items) {
        this.items = items
    }
    updateQuality() {
        if (this.items.quality > 1 && this.items.sellIn > 0) {
            this.items.quality -= 1
            this.items.sellIn -= 1
        } else if (this.items.sellIn === 0 && this.items.quality > 0) {
            this.items.quality -= 2
            this.items.sellIn = 0
        } else if (this.items.quality < 0 && this.items.sellIn < 0) {
            this.items.sellIn = 0
            this.items.quality = 0
        }
        return this.items
    }
}

module.exports = NormalItem