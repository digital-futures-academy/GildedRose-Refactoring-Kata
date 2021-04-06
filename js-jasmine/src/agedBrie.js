class AgedBrie {
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
    this.decreaseSellin()
    if (this.item.sellIn < 0) {
      this.removeQuality()
    }
    if (this.item.quality > 0 && this.item.quality < 50) {
      this.increaseQuality();
    }
    return this.item
  }

  }
  module.exports = AgedBrie