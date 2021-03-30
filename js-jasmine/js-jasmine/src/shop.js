class Shop {
    constructor(functionClass, items=[]){
        this.changeQuality=new functionClass
        this.items=items
      }

    checkValidQuality(item, qualityMin=0, qualityMax=50){
        if (item.quality>qualityMax || item.quality <qualityMin){
              return false
        } else {
              return true
        }
    }

    updateQualitySingleItem(item){
         if (this.checkValidQuality(item)){
              if (item.name==='Aged Brie'){
                   this.changeQuality.valueIncrease(item)
              } else if (item.name==='Backstage Pass'){
                    if (item.sellIn<=0){
                        item.quality=0
                        item.sellIn-=1
                    } else if (item.sellIn<= 5) {
                        this.changeQuality.valueIncrease(item, 3)
                    } else if (item.sellIn<=10){
                        this.changeQuality.valueIncrease(item, 2)
                    } else {
                        this.changeQuality.valueIncrease(item)
                    }
              } else {
                    if (item.sellIn< 0){
                        this.changeQuality.valueDecrease(item, 2)
                    } else {
                        this.changeQuality.valueDecrease(item)
                    }
              }
              return item.quality
         }else {
               if (item.name!=='Sulfuras'){
                    throw new Error('Item quality value is out of bounds')
               }
           }
    }

    updateQualityAllItems(){
        for (let item of this.items){
            this.updateQualitySingleItem(item)
        }
        return this.items
    }
}

module.exports = Shop
