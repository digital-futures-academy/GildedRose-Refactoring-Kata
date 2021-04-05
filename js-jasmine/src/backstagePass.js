let TestsAndActions = require('./testsAndActions')
let tanda = new TestsAndActions

class BackstagePass{
    constructor(shop){
        this.shop = shop;
        this.tanda = tanda;
    }

    updateBackstagePass(){
        for (let i = 0; i < this.shop.items.length; i++) {
            if(this.tanda.isItemBackPass(this.shop.items[i]) === true){
                if(this.shop.items[i].sellIn > 10){
                    this.tanda.increaseQuality(this.shop.items[i])
                }
                else if(this.shop.items[i].sellIn < 11 && this.shop.items[i].sellIn > 5 ){
                    this.tanda.increaseQuality(this.shop.items[i])
                    this.tanda.increaseQuality(this.shop.items[i])
                }
                else if(this.shop.items[i].sellIn < 6 && this.shop.items[i].sellIn > 0  ){
                    this.tanda.increaseQuality(this.shop.items[i])
                    this.tanda.increaseQuality(this.shop.items[i])
                    this.tanda.increaseQuality(this.shop.items[i])
                }
                else if(this.shop.items[i].sellIn === 0){
                    this.shop.items[i].quality = 0
                }
                this.tanda.reduceSellIn(this.shop.items[i]) 
            }
        }
    }
}

module.exports = BackstagePass