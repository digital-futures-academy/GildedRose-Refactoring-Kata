const RegularItemUpdate = require('./regularItemUpdate');

class BackstageUpdate extends RegularItemUpdate {
    update(item) {
        item.quality ++;
        if (item.sellIn <= 10) item.quality ++;
        if (item.sellIn <= 5) item.quality ++;
        if (item.sellIn <= 0) item.quality = 0;
        return this.finalChanges(item);
    }
}

module.exports = BackstageUpdate; 
