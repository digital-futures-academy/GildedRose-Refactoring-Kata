let TestsAndActions = require('./testsAndActions')
let tanda = new TestsAndActions

class AgedBrie{
    constructor(shop){
        this.shop = shop;
        this.tanda = tanda;

    }

    updateAgedBrie(){
        for (let i = 0; i < this.shop.items.length; i++) {
            if(this.tanda.isItemAgedBrie(this.shop.items[i]) === true){
                this.tanda.increaseQuality(this.shop.items[i])
                this.tanda.reduceSellIn(this.shop.items[i])
            }
        }     
    }
}

module.exports = AgedBrie