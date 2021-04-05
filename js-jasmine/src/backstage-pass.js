class BackstagePass{
  constructor(item){
    this.item = item;
  }
    
  update() {
        
    if (this.item.quality < 0) {
      this.item.quality = 0;
    }
    if (this.item.quality > 50){
      this.item.quality = 50;
    }
    if (this.item.quality < 50) {
      this.item.quality++;
    }
    if (this.item.sellIn < 11 && this.item.quality < 50) {
      this.item.quality++;
    }
    if (this.item.sellIn < 6 && this.item.quality < 50) {
      this.item.quality++;
    }
    this.item.sellIn--;
    if (this.item.sellIn < 0) {
      this.item.quality = 0;
    }
    return this.item;
              
  }

}

module.exports = BackstagePass;