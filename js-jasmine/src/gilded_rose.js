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

  backstagePass(item){

    if (item.name == 'Backstage passes to a TAFKAL80ETC concert'){
    for (var i = 0; i < this.items.length; i++){
    if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
        this.items[i].quality++;
    }
    if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
        this.items[i].quality++;
    }
  }

    return this.items;
  }
  }

  agedBrie(){

    if (this.items[i].quality < 50) {
      this.items[i].quality++;
    }

    return this.items;

  }

  quality(item){

    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') {
      if (item.quality > 0) {
          item.quality--;
        }
      this.conjured(item)
    } else {
      if (item.quality < 50) {
        item.quality++;
          this.backstagePass(item);
      }
    }
  }

  sellInPast(item){

    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie' && item.name != 'Sulfuras, Hand of Ragnaros') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
              item.quality--;
            }
          this.conjured(item)
        } else {
          item.quality = 0;
        }
      } else {
        this.agedBrie();
      }
    }
  }

  sellIn(item) {

    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn--;
    }
  }

  conjured(item) {
    if (item.name == 'Conjured' && item.quality > 0) {
      item.quality--;
    }  
  }

}
module.exports = {
  Item,
  Shop
}

