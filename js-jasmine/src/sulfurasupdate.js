class sulfupdater{
    constructor(items=[]){
        this.items = items;
    }
    updater(){
        if(this.items.quality < 50 && this.items.sellIn < 0){
            this.items.quality = this.items.quality + 1;
        } 
    }
}


module.exports = sulfupdater