class CheckValid{
     check(item, qualityMin=0, qualityMax=50){
        if (item.quality>qualityMax || item.quality <qualityMin){
              throw new Error('Item quality outside permitted range')
        } else {
              return true
        }
    }
}

module.exports=CheckValid