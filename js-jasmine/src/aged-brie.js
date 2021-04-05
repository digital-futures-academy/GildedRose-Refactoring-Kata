class AgedBrie{
  constructor(item){
    this.item = item;
  }
    
  update() {
    this.item.sellIn--;
    if (this.item.quality < 0) {
      this.item.quality = 0;
    }
    if (this.item.quality > 50){
      this.item.quality = 50;
    }
    if (this.item.quality < 50) {
      this.item.quality++;
    }
    return this.item;
  }

}

module.exports = AgedBrie;