class AgedBrie {
    constructor(item) {
        this.item = item;
    }
    updateQuality() {
        this.item.quality++;
        if (this.item.quality > 50) {this.item.quality = 50};
        if (this.item.quality < 0) {this.item.quality = 0};
        this.item.sellIn--;
        return this.item;
    }
}

module.exports = AgedBrie

