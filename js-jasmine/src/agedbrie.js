
class AgedBrie{
            constructor(items =[]){
                this.items =items
            }
    update(){
        for(let i =0; i < this.items.length; i++){
            if (this.items[i].name === 'Aged Brie'){
                this.items[i].sellIn -= 1
                if(this.items[i].quality < 50){
                     this.items[i].quality += 1
                }
            }
        }
        return this.items
}
}
module.exports = AgedBrie