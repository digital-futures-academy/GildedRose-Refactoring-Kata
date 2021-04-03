class AgedBrie{
    constructor(item){
    this.items = item
    }
    
    update() {
        this.items.sellIn--;
        if (this.items.quality < 0) {
        this.items.quality = 0;
        }
        if (this.items.quality > 50){
            this.items.quality = 50
        }
        if (this.items.quality < 50) {
            this.items.quality++;
          }
    return [this.items]
        }

}

module.exports = AgedBrie;