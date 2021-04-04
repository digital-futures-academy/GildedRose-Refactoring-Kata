class Sulfuras{
    constructor(item){
    this.item = item
    }
    
    update() {
        if (this.item.quality != 80) {
        this.item.quality = 80;
        }
    return this.item
    }

}

module.exports = Sulfuras;