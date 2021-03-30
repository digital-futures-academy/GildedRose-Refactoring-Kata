class SulfurasQuality{
    constructor(item){
    this.items = item
    }
    
    check() {
        if(this.items.name == 'Sulfuras, Hand of Ragnaros' && this.items.quality != 80){
            this.items.quality = 80;
          }
    return this.items
    }

}

module.exports = SulfurasQuality;