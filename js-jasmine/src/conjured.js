const Item = require('../src/item');

class Conjured extends Item {
    constructor(sellIn, quality){
        super("Conjured Item", sellIn, quality)
    }
    change(){
        this.sellIn -= 1;
        while(this.quality < 50){
            if(this.sellIn > 0) {
                this.quality -= 2;
            } else {
                this.quality -= 4;
            }
        }
    } 
}

module.exports = Conjured;