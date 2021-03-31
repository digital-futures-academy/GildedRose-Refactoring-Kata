class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) { // for each item in items array
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { // if item is not aged brie or bs pass
        if (this.items[i].quality > 0) { // and qualities positive
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { // and item is not sulfuras
            this.items[i].quality -= 1; // then subtract 1 from each item's quality
          }
        }
      } else { // if item is aged brie or bs pass
        if (this.items[i].quality < 50) { // and its quality is less than 50
          this.items[i].quality += 1; // then add 1 to each item's quality
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { // if item is bs pass
            if (this.items[i].sellIn < 11) { // and there are less than 11 days to sell
              if (this.items[i].quality < 50) { // and its quality is less than 50
                this.items[i].quality += 1; // then add 1 to its quality
              }
            }
            if (this.items[i].sellIn < 6) { // if there are less than 6 days to sell it
              if (this.items[i].quality < 50) { // and its quality is less than 50
                this.items[i].quality += 1; // then add 1 to its quality
              } 
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { // if sulfuras is not in items array
        this.items[i].sellIn -= 1; // subtract 1 from their sellIn (for each item that is not sulfuras)
        
      }
      if (this.items[i].sellIn < 0) { // if item's sellIn is negative
        if (this.items[i].name != 'Aged Brie') { // and the item is not aged brie
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { // or bs passes
            if (this.items[i].quality > 0) { // and its quality is positive
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { // and it's not sulfuras
                this.items[i].quality -= 1; // then subtract 1 from its quality
              }
            }
          } else { // if item is not bs passes (but sellIn negative and not aged brie)
            this.items[i].quality = this.items[i].quality - this.items[i].quality; // quality = 0 ??
            // console.log(this.items[i].quality)
          }
        } else { // if item is aged brie with negative sellIn
          if (this.items[i].quality < 50) { // and its quality is less than 50 
            this.items[i].quality += 1; // add 1 to its quality 
          }
        }
      }
    }

    return this.items;
  }
if()

}

module.exports = Shop








