const Item = require('./item');

class AgedBrie extends Item {
    constructor(sellIn, quality){
        super('Aged Brie', sellIn, quality);
    }
    change(){
        this.sellIn = this.sellIn - 1;
        if(this.quality < 50 && this.sellIn > 0) {
            this.quality = this.quality + 1;
        }
    }
}
