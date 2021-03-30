class Passes{
    constructor(items=[]){
        this.items= items
    }
    update(){
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
    }
module.exports = Passes