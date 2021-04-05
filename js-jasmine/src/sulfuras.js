class Sulfuras {
    constructor(items) {
        this.items = items
    }

    updateQuality() {
        if (this.items.quality !== 80) {
            this.items.quality = 80
        }
        if (this.items.sellIn !== 0) {
            this.items.sellIn = 0
        }
        return this.items
    }
}
module.exports = Sulfuras