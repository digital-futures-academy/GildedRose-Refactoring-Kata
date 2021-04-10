const Item = require('../src/item');

class Normal extends Item {
    constructor(sellIn, quality){
        super("Normal", sellIn, quality)
    }
    change(){
        this.sellIn -= 1;
        if(this.quality < 50 && this.sellIn > 0) {
                this.quality -= 1;
            } else if (this.quality < 50 && this.sellIn < 0) {
                this.quality -= 2;
            }
        }
    }

module.exports = Normal;