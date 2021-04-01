const specialItem = require('./items/specialitem')
const ordinaryItem = require('./items/ordinaryitem');

class Check{
    constructor(specialitem = new specialItem(), ordinaryitem = new ordinaryItem()){
        this.specialitem = specialitem;
        this.ordinaryitem = ordinaryitem;
    }
    uniqueitem(item){
        if(item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert' || item.name == 'Sulfuras, Hand of Ragnaros' || item.name == 'Conjured'){
            return this.specialitem.check(item);
        }
        else{
            return this.ordinaryitem.update(item);
        }
    }
}

module.exports = Check;