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
      let it = this.items.length - templist.length;
      this.checkwhatkindofItem(templist[0], it);
      this.updateQuality(templist.slice(1));
    }
  }

  checkwhatkindofItem(item, it){
    if(item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert' || item.name == 'Sulfuras, Hand of Ragnaros' || item.name == 'Conjured'){
      this.specialitem(item, it);
    }
    else{
      this.ordinaryitem(item, it);
    }
  }
  
  ordinaryitem(item, it){
    if(item.sellIn > -1 && item.quality > 0){
      this.items[it].quality--;
    }
    else if(item.quality > 0){
      this.items[it].quality -= 2;
    }
    this.items[it].sellIn--;
  }

  specialitem(item, it){
    if(item.name === 'Aged Brie'){
      this.agedBrie(it);
    }
    else if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
      this.concerttickets(item, it);
    }
    else if(item.name === 'Conjured'){
      this.conjured(it);
    }
    else{
      this.hand(item, it);
    }
  }

  conjured(it){
    this.items[it].quality = Math.max(0, (this.items[it].sellIn > 0 ? this.items[it].quality -= 2 : this.items[it].quality -= 4));
    this.items[it].sellIn--; 
  }

  hand(item, it){
    if(item.quality !== 80){
      this.items[it].quality = 80;
    }
  }

  agedBrie(it){
    this.items[it].quality = Math.min(50, (this.items[it].sellIn > 0 ? this.items[it].quality + 1 : this.items[it].quality + 2));
    this.items[it].sellIn--;
  }

  concertCal(item, it){
    if(item.sellIn <= 0){
    return 0;
    }
    else if(item.sellIn < 6){
      return this.items[it].quality += 3; 
    }
    else if(item.sellIn < 11){
      return this.items[it].quality += 2;
    }
    return this.items[it].quality++;
  }

  concerttickets(item, it){
    this.items[it].quality = Math.min(50, this.concertCal(item, it));
    this.items[it].sellIn --;
  }

}
module.exports = Shop;
