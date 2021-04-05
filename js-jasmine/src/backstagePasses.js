class BackstagePass {
    constructor(items) {
        this.items = items
    }

    updateQuality() {
        if (this.items.quality === 50) {
            this.items.quality = 50
            this.items.sellIn -= 1
        } else if (this.items.sellIn === 0) {
            this.items.quality = 0
            this.items.sellIn -= 1
        } else if (this.items.sellIn <= 5) {
            this.items.quality += 3
            this.items.sellIn -= 1
        } else if (this.items.sellIn <= 10) {
            this.items.quality += 2
            this.items.sellIn -= 1
        } else if (this.items.sellIn > 0) {
            this.items.quality += 1
            this.items.sellIn -= 1
        }
        return this.items
    }
}

module.exports = BackstagePass