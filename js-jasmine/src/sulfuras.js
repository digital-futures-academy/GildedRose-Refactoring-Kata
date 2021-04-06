class Sulfuras {
     constructor(item){
    this.item = item;
   
  }
  update() {
    if (this.item.quality > 0 && this.item.quality < 50) {
      this.item.quality = 80
    }
    this.item.sellin = this.item.sellIn
    return this.item
  }
  
  }
  module.exports = Sulfuras