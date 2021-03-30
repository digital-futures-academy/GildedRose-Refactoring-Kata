class Sulfuras{
    constructor(items =[]){
        this.items = items;
    }
    update(){
        for (let i =0; i< this.items.length ; i++){
    if (this.items[i].name === 'Sulfuras, Hand of Ragnaros'){
      this.items[i].sellIn -= 1
      this.items[i].quality = 80 ;
    }
  }
  return this.items
    }
}
module.exports = Sulfuras