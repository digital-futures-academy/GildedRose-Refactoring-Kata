class conupdater{
    constructor(items=[]){
        this.items = items;
    }
    updater(){
        if(this.items.sellIn < 6 && this.items.quality < 50) {
            this.items.quality = this.items.quality + 3;
        }else if(this.items.sellIn < 11 && this.items.quality < 50) {
            this.items.quality = this.items.quality + 2;
        }else if( this.items.quality < 50) {
            this.items.quality = this.items.quality + 1;
        }
        this.items.sellIn = this.items.sellIn - 1
        if(this.items.name === 'Backstage passes to a TAFKAL80ETC concert' && this.items.sellIn < 0) {
            this.items.quality = this.items.quality - this.items.quality;
        }
    }
}


module.exports = conupdater