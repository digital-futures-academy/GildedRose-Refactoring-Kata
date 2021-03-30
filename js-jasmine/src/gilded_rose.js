class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn; // denotes the number of days stated to sell item 
    this.quality = quality; // quality value denotes how valuable item is
    // At the end of each day the system lowers both values for every item
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) { // for loop that goes through each item of the array
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        // .name != (is not equal to) '....'
        if (this.items[i].quality > 0) { // if items quality is greater than 0
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1; // quality becomes the index's original quality - 1
          } 
        }
      } else {
        if (this.items[i].quality < 50) { // if items quality is less than 50
          this.items[i].quality = this.items[i].quality + 1; // quality becomes the index's original quality + 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { // only if backstage pass
            if (this.items[i].sellIn < 11) { // if days to sell item is less than 11 
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1; 
              }
            }
            if (this.items[i].sellIn < 6) { // if days to sell item is less than 6
              if (this.items[i].quality < 50) { 
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { // this item does NOT have to be sold/decrease in quality
        this.items[i].sellIn = this.items[i].sellIn - 1; // sell in days assigned value of the index's original sell in - 1
      }
      if (this.items[i].sellIn < 0) { // if sellIn date is passed 
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality; // reduces quality twice as fast?
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
