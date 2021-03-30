class ChangeQuality{
    valueIncrease(item, multiplier=1, qualityMax=50, increment=1){
           increment*=multiplier
           if (item.quality+increment<=qualityMax) {
               item.quality+=increment
           }else {
               item.quality=qualityMax
           }
           item.sellIn-=1
           return item.quality
     }

     valueDecrease(item, multiplier=1,  qualityMin=0, increment=1){
           increment*=multiplier

           if (item.quality-increment>=qualityMin) {
                item.quality-=increment
           }
           else {
                item.quality=qualityMin
           }
           item.sellIn-=1
           return item.quality
     }
}

module.exports=ChangeQuality