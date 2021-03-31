class AgedBrie {
    constructor(items = []){
        this.items = items
    }

    updateQuality(){
        for(let i = 0; i < this.items.length; i++){
            if (this.items[i].quality < 50){
                this.items[i].quality++;
            } 
        }
    }
}

module.exports = AgedBrie