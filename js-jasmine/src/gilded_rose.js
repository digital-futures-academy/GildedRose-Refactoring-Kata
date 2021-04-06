class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items= items; //instantiates this.items[i]s array
  }

  removeQuality() {
    return this.items[i].quality -= this.items[i].quality
  }
  decreaseSellIn() {
    return this.items[i].sellIn -= 1
  }
  increaseQuality() {
    return this.items[i].quality += 1; 
  }
  decreaseQuality() {
   return this.items[i].quality -= 1
  }
  isAgedBrie() {
     this.name == 'Aged Brie'
  }
   isBackstagePass() {
     this.name == 'Backstage passes to a TAFKAL80ETC concert'
  }
   isSalfuras() {
     this.name == 'Sulfuras, Hand of Ragnaros'
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      try {
        //The Quality of an item is never negative & never more than 50
        if (this.items[i].quality > 0 && this.items[i].quality < 50) {
          this.decreaseSellIn()

          if (this.isSalfuras()) {
            this.increaseQuality();
          }

          if (this.isAgedBrie()) {
            if (this.items[i].sellIn < 0) {
              this.removeQuality();
            }
            this.increaseQuality();
          }

          if (this.isBackstagePass()) {
            if (this.items[i].sellIn < 0) {
              this.removeQuality();
            }
            if (this.items[i].sellIn < 11) {
              this.increaseQuality();
            }
            if (this.items[i].sellIn < 6) {
              this.increaseQuality();
            }
            this.increaseQuality();
          }
        }
      }
      catch(err){
        throw new Error("Please enter a valid quality")
    }
      }
     return this.items
    }
  }
module.exports = {
  Item,
  Shop
}
