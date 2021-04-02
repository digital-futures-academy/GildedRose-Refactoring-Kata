class RegularItemUpdate {
    update(item) {
        item.quality --;
        if (item.sellIn <= 0) item.quality --;
        return this.finalChanges(item);
    }

    finalChanges(item) {
        if(item.quality <= 0) item.quality = 0;
        if(item.quality >= 50) item.quality = 50;
        item.sellIn --;
        return item;
    }
}

module.exports = RegularItemUpdate; 
