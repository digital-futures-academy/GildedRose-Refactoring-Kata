let TestsAndActions = require('./testsAndActions')
let tanda = new TestsAndActions

class Normal{
    constructor(shop){
        this.shop = shop;
        this.tanda = tanda;
    }

    updateNormal(){
        for (let i = 0; i < this.shop.items.length; i++) {
            if (this.tanda.isItemSpecial(this.shop.items[i]) === false){
                this.tanda.reduceQuality(this.shop.items[i])
                if (this.shop.items[i].sellIn === 0) {
                this.tanda.reduceQuality(this.shop.items[i])
                }
                this.tanda.reduceSellIn(this.shop.items[i])  
            }   
            
        }
    }

}

module.exports = Normal