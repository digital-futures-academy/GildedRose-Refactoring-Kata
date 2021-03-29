const Item = require('./item.js')

class Unique{
constructor(unique_items =[]){
    this.unique_items = unique_items;
  
}
checkItems(){
      for(let i = 0; i < this.unique_items.length ; i++){
        if(this.unique_items[i].name != 'Aged Brie' && this.unique_items[i].name != 'Sulfuras, Hand of Ragnaros' && this.unique_items[i].name != 'Backstage passes to a TAFKAL80ETC concert'){
            const index =this.unique_items.indexOf(this.unique_items[i])
            this.unique_items.splice(index, 1)
        }
    }
      return this.unique_items.length
}
updateAgedBrie(){
  for (let i = 0; i < this.unique_items.length ; i++){
    if (this.unique_items[i].name === 'Aged Brie'){
       this.unique_items[i].sellIn -= 1
       }
      if(this.unique_items[i].quality < 50 && this.unique_items[i].name === 'Aged Brie') {
      this.unique_items[i].quality += 1
    }

}
return this.unique_items
}
updateSulfuras(){
  for (let i =0; i< this.unique_items.length ; i++){
    if (this.unique_items[i].name === 'Sulfuras, Hand of Ragnaros'){
      this.unique_items[i].sellIn = this.unique_items[i].sellIn 
      this.unique_items[i].quality = this.unique_items[i].quality ;
    }
  }
  return this.unique_items
}

updatePasses(){
  for (let i = 0; i < this.unique_items.length ; i++){
    if(this.unique_items[i].name === "Backstage passes to a TAFKAL80ETC concert" && this.unique_items[i].quality < 50){
       this.unique_items[i].sellIn -=1
       this.unique_items[i].quality +=1
   }
   if(this.unique_items[i].sellIn <= 10  && this.unique_items[i].name === "Backstage passes to a TAFKAL80ETC concert"){
         this.unique_items[i].quality +=1}
         if(this.unique_items[i].sellIn <= 5 && this.unique_items[i].sellIn >=1 && this.unique_items[i].name === "Backstage passes to a TAFKAL80ETC concert" ){
           this.unique_items[i].quality +=1}
            if(this.unique_items[i].sellIn <= 0 ){
              this.unique_items[i].quality = 0
           }
         }
           return this.unique_items
      }

}
module.exports = Unique 