class BackstagePass{
    constructor(items){
    this.items = items
    }
    
    check() {
        if (this.items.name == 'Backstage passes to a TAFKAL80ETC concert'){
              if (this.items.sellIn < 11 && this.items.quality < 50) {
                this.items.quality++;
              }
              if (this.items.sellIn < 6 && this.items.quality < 50) {
                this.items.quality++;
              }
            }
        return this.items;
        }
}

module.exports = BackstagePass;