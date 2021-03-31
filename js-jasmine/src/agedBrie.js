const Item = require('../src/item.js')
class AgedBrie {
    constructor(items) {
        this.items = items
    }

    qualityUpdate() {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].quality < 50) {
                this.items[i].quality += 1
            }
            this.items[i].sellIn -= 1
        }
        return this.items
    }
}

module.exports = AgedBrie