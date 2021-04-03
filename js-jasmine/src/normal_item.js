const Item = require('../src/item');

class NormalItem extends Item {
    constructor(sellIn, quality) {
      super(sellIn, quality);
    }
  
    updateQuality() {
      if (this.quality <= 50 && this.sellIn <= 0) {
        this.quality -= 2;
      }
      else if (this.quality <= 50 && this.sellIn > 0) {
        this.quality -= 1;
      }
      this.sellIn -= 1;
    }
}
  
module.exports = NormalItem;