class Conjured {
    constructor(sellIn, quality) {
        this.sellIn = sellIn
        this.quality = quality
    }
    
    updateQuality() {
        if (this.quality <= 50 && this.sellIn <= 0) {
            this.quality -= 4
        }
        else if (this.quality <= 50 && this.sellIn > 0) {
            this.quality -= 2
        }
        this.sellIn -= 1
    }
}

module.exports = Conjured;