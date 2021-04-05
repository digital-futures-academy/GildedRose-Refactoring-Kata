class Sulfuras{
  constructor(item){
    this.item = item;
  }
    
  update() {
    if (this.item.quality != 80) {
      this.item.quality = 80;
    }
    if (this.item.sellIn != 0) {
      this.item.sellIn = 0;
    }
    return this.item;
  }

}

module.exports = Sulfuras;