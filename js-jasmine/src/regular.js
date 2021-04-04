class Regular{
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
        if (this.items.quality > 0) {
            this.items.quality--;
          }
        this.items.sellIn--;
        if (this.items.sellIn < 0) {
            if (this.items.quality > 0) {
              this.items.quality--;
            }
          }
        return [this.items]
        }

}

module.exports = Regular;