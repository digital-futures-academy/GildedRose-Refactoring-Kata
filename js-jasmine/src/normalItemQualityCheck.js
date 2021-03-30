class NormalItemQuality{
    constructor(item){
    this.items = item
    }
    
    check() {
        if(this.items.name != 'Sulfuras, Hand of Ragnaros' && this.items.quality > 50){
        this.items.quality = 50;
    }
    return this.items
    }

}

module.exports = NormalItemQuality;