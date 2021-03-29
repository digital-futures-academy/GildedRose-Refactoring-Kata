class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.quality(this.items[i]);
      this.sellIn(this.items[i]);
      this.sellInPast(this.items[i]);
    }

    return this.items;
  }

  backstagePass(){
    for (var i = 0; i < this.items.length; i++){
    if (this.items[i].sellIn < 11) {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
      }
    }
    if (this.items[i].sellIn < 6) {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
      }
    }
  }
    return this.items;
  }

  agedBrie(){
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
    return this.items;
  }

  quality(item){
    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') {
      if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          this.backstagePass();
        }
      }
    }
  }

  sellInPast(item){
    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie' && item.name != 'Sulfuras, Hand of Ragnaros') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
              item.quality = item.quality - 1;
            }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        this.agedBrie();
      }
    }
  }

  sellIn(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
  }

}
module.exports = {
  Item,
  Shop
}

