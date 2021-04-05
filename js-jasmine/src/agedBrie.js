const Item = require('../src/item.js')
class AgedBrie {
    constructor(items) {
        this.items = items
    }

    updateQuality() {
        if (this.items.quality < 50) {
            this.items.quality += 1
        }
        if (this.items.sellIn !== 0) {
            this.items.sellIn -= 1
        }
        return this.items
    }
}

module.exports = AgedBrie