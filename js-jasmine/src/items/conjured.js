class Conjured{
    update(item){
        item.quality = Math.max(0, (item.sellIn > 0 ? item.quality -= 2 : item.quality -= 4));
        item.sellIn--; 
        return item;
    }
}

module.exports = Conjured;