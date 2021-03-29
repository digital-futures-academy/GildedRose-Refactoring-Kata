class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.checkAgedBrie(i) && this.checkConcert(i)) {
        if (this.checkqualitygreaterthan0(i) && this.checkHand(i)) {
            this.changequality(i, -1);
        }
      } else {
        if (this.checkqualitylessthan50(i)) {
          this.changequality(i, 1);
          if (!(this.checkConcert(i))&& this.items[i].sellIn < 11) {
            if (this.items[i].sellIn < 6) {
              this.changequality(i, -1);
            }else{
              this.changequality(i, 1);
            }
          }
        }
      }
      if (this.checkHand(i)) {
        this.items[i].sellIn -= 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.checkAgedBrie(i)) {
          if (this.checkConcert(i)) {
            if (this.checkqualitygreaterthan0(i)) {
              if (this.checkHand(i)) {
                this.changequality(i, -1);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else if(this.checkqualitylessthan50(i)) {
          this.changequality(i, 1);
        }
      }
    }
    return this.items;
  }

  checkAgedBrie(i){
    return this.items[i].name != 'Aged Brie'
  }

  checkConcert(i){
    return this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert';
  }

  checkHand(i){
    return this.items[i].name != 'Sulfuras, Hand of Ragnaros';
  }

  checkqualitygreaterthan0(i){
    return  this.items[i].quality > 0;
  }

  checkqualitylessthan50(i){
    return this.items[i].quality < 50;
  }

  changequality(i, num){
    this.items[i].quality += num;
  }

}
module.exports = Shop;
