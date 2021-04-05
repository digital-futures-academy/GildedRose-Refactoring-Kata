const ChangeQuality=require('./changeQuality.js')
const CheckValid=require('./checkValid.js')

class BackstagePass{
    constructor(item, changeQuality=new ChangeQuality(), checkValid=new CheckValid()){
        this.item=item
        this.changeQuality=changeQuality
        this.checkValid=checkValid
    }

    valueChange(){
        if (this.checkValid.check(this.item)){
            if (this.item.sellIn<=0){
                   this.item.quality=0
                   this.item.sellIn-=1
                   return this.item.quality
            } else if (this.item.sellIn<= 5) {
                   return this.changeQuality.valueIncrease(this.item, 3)
            } else if (this.item.sellIn<=10){
                   return this.changeQuality.valueIncrease(this.item, 2)
            } else {
                   return this.changeQuality.valueIncrease(this.item)
            }
        }
    }
}

module.exports=BackstagePass