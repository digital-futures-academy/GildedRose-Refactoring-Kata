class SellIn{
    constructor(item){
    this.items = item
    }
    
    reduce() {
        if (this.items.name != 'Sulfuras, Hand of Ragnaros') {
            this.items.sellIn--;
          }
    return this.items
    }

}

module.exports = SellIn;