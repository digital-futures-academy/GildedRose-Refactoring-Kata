class agedBrie{
    update(item){
        item.quality = Math.min(50, (item.sellIn > 0 ? item.quality + 1 : item.quality + 2));
        item.sellIn--;
        return item;
    }
}

module.exports = agedBrie;