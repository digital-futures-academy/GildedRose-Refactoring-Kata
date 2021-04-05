class Conjured{
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
    
    if (this.item.quality > 0) {
      this.item.quality = this.item.quality - 2;
    }

    this.item.sellIn--;

    if (this.item.sellIn < 0 && this.item.quality > 0) {
      this.item.quality = this.item.quality - 2;
    }
    return this.item;
  }

}

module.exports = Conjured;