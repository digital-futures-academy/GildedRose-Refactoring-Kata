const ChangeQuality=require('./changeQuality.js')
const CheckValid=require('./checkValid.js')

class AgedBrie{
    constructor(item, changeQuality=new ChangeQuality(), checkValid=new CheckValid()){
        this.item=item
        this.changeQuality=changeQuality
        this.checkValid=checkValid
    }

    valueChange(){
        if (this.checkValid.check(this.item)){
            return this.changeQuality.valueIncrease(this.item)}
    }
}

module.exports=AgedBrie