const ChangeQuality=require('./changeQuality.js')
const CheckValid=require('./checkValid.js')

class RegularItem{
    constructor(item, changeQuality=new ChangeQuality(), checkValid=new CheckValid()){
        this.item=item
        this.changeQuality=changeQuality
        this.checkValid=checkValid
    }

    valueChange(){
        if (this.checkValid.check(this.item)){
            if (this.item.sellIn< 0){
                return this.changeQuality.valueDecrease(this.item, 2)
            } else {
                return this.changeQuality.valueDecrease(this.item)
            }
        }
    }
}

module.exports=RegularItem

