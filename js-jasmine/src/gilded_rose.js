class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
        this.updateItem(item);
      })
  
      return this.items;
    }
  
    updateItem(item) {
      switch(item.name) {
        case 'Sulfuras, Hand of Ragnaros':
          return item;
        case 'Aged Brie':
          this.updateBrie(item);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstage(item);
          break;
        default:
          this.updateNormal(item);
          break;
      }
  
      if(item.quality > 50) item.quality = 50;
      if(item.quality < 0) item.quality = 0;
      item.sellIn --;
      return item;
    }
  
    updateBrie(item) {
      item.quality ++;
      if (item.sellIn <= 0) item.quality ++;
    }
  
    updateBackstage(item) {
      item.quality ++;
      if (item.sellIn <= 10) item.quality ++;
      if (item.sellIn <= 5) item.quality ++;
      if (item.sellIn <= 0) item.quality = 0;
    }
  
    updateNormal(item) {
      item.quality --;
      if (item.sellIn <= 0) item.quality --;
    }
}
module.exports = Shop;
