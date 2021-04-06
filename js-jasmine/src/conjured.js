class Conjured {

    constructor(item){
    this.item = item
  }
   decreaseSellin() {
    this.item.sellin -= 1;
  }
  decreaseQuality() {
    this.item.quality -= 2;
  }

  update() {
    this.decreaseSellin()

    if (this.item.sellIn < 0) {
      this.decreaseQuality()
    }
    if (this.item.quality > 0 && this.item.quality < 50) {
      this.decreaseQuality();
    }
    return this.item
  }
  }
module.exports = Conjured