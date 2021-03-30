const Item = require('./item');

class Shop {
    constructor(items=[]){
      this.items = items;
    }
    updateQuality() {
      for (var i = 0; i < this.items.length; i++) {
          //If the item is not 'Aged Brie', 'Backstage Passes' or 'Sulfuras' - decrease the item quality by 1.
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality = this.items[i].quality - 1;
            }
          }
        } else {
            //Otherwise increase the item quality by 1.
          if (this.items[i].quality < 50) { // Quality cannot exceed 50.
            this.items[i].quality = this.items[i].quality + 1;
            //If a backstage pass - increase by 1 again (Increase of 2) when the sellIn is 10 days or less.
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
              //If the sellIn is 5 days or less increase by 1 more (Increase of 3).
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
          }
        }
        //Decrease the sellIn time by 1 (If the item is not Sulfuras as the sellIn date does not decrease).
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.items[i].sellIn < 0) { // If you pass the sellIn date...
          if (this.items[i].name != 'Aged Brie') { //.. and the item is not 'Aged Brie'...
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { //..or 'Backstage passes'...
              if (this.items[i].quality > 0) {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].quality = this.items[i].quality - 1;
                }
              }
            } else {
              this.items[i].quality = this.items[i].quality - this.items[i].quality;
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

  module.exports = Shop;