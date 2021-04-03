const Item = require('../src/item');

class Sulfuras extends Item {
    constructor(sellIn, quality) {
      super(sellIn, quality);
    }
  
    updateQuality() {
      return this.quality = 80;
    }
}
  
module.exports = Sulfuras;
