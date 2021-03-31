class BackstagePass {
    constructor(items = []){
        this.items = items
    }

    updateQuality(){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].quality < 50){
                if(this.sellIn <= 0){
                    this.items[i].quality = 0;
                } else if (this.sellIn <= 5){
                    this.items[i].quality += 3;
                } else if (this.sellIn <= 10){
                    this.items[i].quality += 2;
                } else {
                    this.items[i].quality++
                } 
            }
        }
    }
}

module.exports = BackstagePass