// const Item = require('./item.js');
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

// let aged = new AgedBrie(['Aged Brie', 5, 10])
// let test = aged.updateQuality()
// console.log(test)
