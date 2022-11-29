class BackstagePass {
   constructor(item){
    this.item = item
  }
 decreaseSellin() {
    this.item.sellin -= 1;
  }
  increaseQuality() {
    this.item.quality += 1;
  }
  removeQuality() {
    this.item.quality -= this.item.quality;
  }

  update() {
    if (this.item.quality > 0 && this.item.quality < 50) {
      this.decreaseSellin()
      this.increaseQuality()
  
      if (this.item.sellIn < 11) {
        this.increaseQuality()
      }
      if (this.item.sellIn < 6) {
        this.increaseQuality()
      }
      if (this.item.sellIn < 0) {
        this.removeQuality()
      }
    }
    return this.item
    }
  }
  module.exports = BackstagePass