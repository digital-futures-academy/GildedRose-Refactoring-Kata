const Item = require('./item');

class BackstagePass extends Item {
    constructor(sellIn, quality) {
        super("Backstage passes", sellIn, quality);
    }
    change(){
        if(this.sellIn === 0){
            this.quality = 0;
        } else if (this.sellIn < 11 && this.sellIn >= 6) {
            this.quality += 2;
        } else if (this.sellIn < 6) {
            this.quality += 3;
        } else {
            this.quality += 1;
        }
        this.sellIn -= 1;
    }
}


module.exports = BackstagePass;