const Item = require('./item.js')

class Shop {
  constructor(items=[]){ 
    this.items = items;
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
updateAgedBrie(){
  for (let i = 0; i < this.items.length ; i++){
    if (this.items[i].name === 'Aged Brie'){
       this.items[i].sellIn -= 1
       }
      if(this.items[i].quality < 50 && this.items[i].name === 'Aged Brie') {
      this.items[i].quality += 1
    }
 
  
  }

  return this.items
}
updateSulfuras(){
  for (let i =0; i< this.items.length ; i++){
    if (this.items[i].name === 'Sulfuras, Hand of Ragnaros'){
      this.items[i].sellIn = this.items[i].sellIn 
      this.items[i].quality =  80;
    }
  }
  return this.items
}

updatePasses(){
  for (let i = 0; i < this.items.length ; i++){
    if(this.items[i].name === "Backstage passes to a TAFKAL80ETC concert" && this.items[i].quality < 50){
       this.items[i].sellIn -=1
       this.items[i].quality +=1
   }
   if(this.items[i].sellIn <= 10  && this.items[i].name === "Backstage passes to a TAFKAL80ETC concert"){
         this.items[i].quality +=1}
         if(this.items[i].sellIn <= 5 && this.items[i].sellIn >=1 && this.items[i].name === "Backstage passes to a TAFKAL80ETC concert" ){
           this.items[i].quality +=1}
            if(this.items[i].sellIn <= 0 ){
              this.items[i].quality = 0
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

module.exports = Shop 
