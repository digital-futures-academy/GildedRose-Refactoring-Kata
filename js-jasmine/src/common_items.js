const Item = require('./item.js')

class Common {
  constructor(items=[]){ 
    this.items = items;
  }
  checkItems(){
      for(let i = 0; i < this.items.length ; i++){
        if(this.items[i].name == 'Aged Brie' || this.items[i].name == 'Sulfuras, Hand of Ragnaros' || this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
            const index =this.items.indexOf(this.items[i])
            this.items.splice(index, 1)
        }
    }
      return this.items.length
}

 updateOrdinaryItems(){
     for (let i = 0; i< this.items.length ; i++){
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Conjured'){
        this.items[i].sellIn -= 1
         if (this.items[i].quality > 0){
          this.items[i].quality -= 1
      }
      if(this.items[i].sellIn <= 0 && this.items[i].quality > 0 && this.items[i].name != 'Aged Brie' && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Conjured' ){
          this.items[i].quality -= 1
      } 

    }
  }
  return this.items
}
  updateConjuredItems(){
    for (let i = 0; i < this.items.length ; i++){
      if(this.items[i].name === 'Conjured'){
        this.items[i].sellIn -=1
        if(this.items[i].quality > 0 ){
          this.items[i].quality -= 2
        }

      }
    }
    return this.items
  }

}

module.exports = Common 
