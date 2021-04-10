const Item = require('./item');

class Sulfuras extends Item {
    constructor(sellIn, quality) {
        super('Sulfuras, Hand of Ragnaros', sellIn, quality);
    }
    change(){
        this.sellIn = this.sellIn;
        this.quality = this.quality;
    }
}

module.exports = Sulfuras;