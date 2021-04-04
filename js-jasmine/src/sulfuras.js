class Sulfuras{
    constructor(item){
    this.items = item
    }
    
    update() {
        if (this.items.quality != 80) {
        this.items.quality = 80;
        }
    return [this.items]
    }

}

module.exports = Sulfuras;