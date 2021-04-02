const RegularItemUpdate = require('./regularItemUpdate');

class ConjuredUpdate extends RegularItemUpdate {
    update(item) {
        item.quality -= 2;
        if (item.sellIn <= 0) item.quality -= 2;
        return this.finalChanges(item);
    }
}

module.exports = ConjuredUpdate; 
