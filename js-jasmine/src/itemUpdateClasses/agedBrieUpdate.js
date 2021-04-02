const RegularItemUpdate = require('./regularItemUpdate');

class AgedBrieUpdate extends RegularItemUpdate {
    update(item) {
        item.quality ++;
        if (item.sellIn <= 0) item.quality ++;
        return this.finalChanges(item);
    }
}

module.exports = AgedBrieUpdate; 
