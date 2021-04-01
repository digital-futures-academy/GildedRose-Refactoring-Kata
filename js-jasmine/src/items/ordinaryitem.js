class ordinaryItem{
    update(item){
        item.quality = Math.max(0, (item.sellIn > -1 ? item.quality -= 1: item.quality -= 2));
        item.sellIn--;
        return item;
    }
}

module.exports = ordinaryItem;
