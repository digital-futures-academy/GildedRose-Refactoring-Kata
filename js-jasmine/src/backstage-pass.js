class BackstagePass{
    constructor(item){
    this.items = item
    }
    
    update() {
        
            if (this.items.quality < 0) {
            this.items.quality = 0;
            }
            if (this.items.quality > 50){
                this.items.quality = 50
            }
            if (this.items.quality < 50) {
                this.items.quality++;
            }
            if (this.items.sellIn < 11 && this.items.quality < 50) {
                this.items.quality++;
              }
            if (this.items.sellIn < 6 && this.items.quality < 50) {
                this.items.quality++;
            }
            this.items.sellIn--;
            if (this.items.sellIn < 0) {
                this.items.quality = 0;
            }
        return [this.items];
              
    }

}

module.exports = BackstagePass;