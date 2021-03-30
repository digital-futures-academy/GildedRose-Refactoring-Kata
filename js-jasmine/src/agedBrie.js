class AgedBrie{
    constructor(item){
    this.items = item
    }
    
    increaseQuality() {
        if (this.items.quality < 50) {
            this.items.quality++;
          }
    return this.items
    }

}

module.exports = AgedBrie;