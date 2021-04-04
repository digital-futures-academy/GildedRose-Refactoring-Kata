class ConjuredItem {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].name === 'Conjured Item') {
        if(this.items[i].quality > 0) {
          this.items[i].quality--;
          this.items[i].quality--;
        }
      }
      this.items[i].sellIn--;
    }
    return this.items;
  }
}

module.exports = ConjuredItem;

// "Conjured" items degrade in Quality twice as fast as normal items