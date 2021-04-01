class Hand{
    update(item){
        if(item.quality !== 80){
            item.quality = 80;
        }
        return item;
    }
}

module.exports = Hand;