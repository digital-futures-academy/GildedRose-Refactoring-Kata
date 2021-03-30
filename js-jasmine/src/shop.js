class Shop {
  constructor(items=[]){
    this.items = items;
    this.count = 0;
  }
  quality(){
    let templistSlice = this.items;
    this.updateQuality(templistSlice);
    return this.items;
  }

  updateQuality(templist) {
    if(templist.length === 0){
      return;
    }
    else{
      this.checkwhatkindofItem(templist[0]);
      this.updateQuality(templist.slice(1));
      this.count++;
    }
  }

  checkwhatkindofItem(item){
    if(item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert' || item.name == 'Sulfuras, Hand of Ragnaros'){
      this.specialitem(item);
    }
    else{
      this.ordinaryitem(item);
    }
  }
  
  ordinaryitem(item){
    if(item.sellIn > -1 && item.quality > 0){
      this.items[this.count].quality--;
    }
    else if(item.quality > 0){
      this.items[this.count].quality -= 2;
    }
    this.items[this.count].sellIn--;
  }

  specialitem(item){
    if(item.name === 'Aged Brie'){
      this.agedBrie(item);
    }
    else if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
      this.concerttickets(item);
    }
    else{
      this.hand(item);
    }
  }

  hand(item){
    if(item.quality !== 80){
      this.items[this.count].quality = 80;
    }
  }

  agedBrie(item){
    if(item.quality < 50 && item.sellIn > 0){
      this.items[this.count].quality++;
    }
    else if(item.quality < 50){
      this.items[this.count].quality += 2;
    }
    this.items[this.count].sellIn--;
  }

  concerttickets(item){
    if(item.sellIn <= 0){
      this.items[this.count].quality = 0;
    }
    else if(item.sellIn < 6 && item.quality < 48){
      this.items[this.count].quality += 3; 
    }
    else if(item.sellIn < 11 && item.quality < 49){
      this.items[this.count].quality += 2;
    }
    else{
      this.items[this.count].quality++;
    }
    this.items[this.count].sellIn --;
  }

}
module.exports = Shop;
