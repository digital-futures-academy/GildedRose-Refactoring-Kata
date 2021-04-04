class AgedBrie {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].name === 'Aged Brie') {
        if(this.items[i].quality > 0 && this.items[i].quality < 50) {
          this.items[i].quality++;
        }
      }
      this.items[i].sellIn--;
    }
    return this.items;
  }
}

module.exports = AgedBrie;

// "Aged Brie" actually increases in Quality the older it gets
// Quality is never negative