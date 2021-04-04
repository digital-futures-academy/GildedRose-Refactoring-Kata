class BackstagePass {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn > 0 && this.items[i].sellIn < 50) {
          this.items[i].quality++;
        }
        if(this.items[i].sellIn > 0 && this.items[i].sellIn < 11) {
          this.items[i].quality++;
        }
        if(this.items[i].sellIn > 0 && this.items[i].sellIn < 6) {
          this.items[i].quality++;
        }
        this.items[i].sellIn--;
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.items[i].quality - this.items[i].quality;
        }
      }
    }
    return this.items;
  }
}

module.exports = BackstagePass;

// Quality is never negative
// - "Backstage passes" increases in Quality as its SellIn value approaches;
// Quality increases by 2 when there are 10 days or less 
// and by 3 when there are 5 days or less
// Quality drops to 0 after the concert