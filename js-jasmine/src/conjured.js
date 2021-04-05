class Conjured {
    constructor(items) {
        this.items = items
    }

    updateQuality() {
        if (this.items.name === 'Conjured') {
            this.items.quality -= 2
        }
        this.items.sellIn -= 1
        return this.items
    }
}
module.exports = Conjured