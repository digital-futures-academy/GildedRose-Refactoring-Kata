class concertTickets{
    concertCal(item){
        if(item.sellIn <= 0){
            return 0;
        }else if(item.sellIn < 6){
            return item.quality += 3; 
        }else if(item.sellIn < 11){
            return item.quality += 2;
        }return item.quality++;
    }
    
    update(item){
        item.quality = Math.min(50, this.concertCal(item));
        item.sellIn --;
        return item;
    }
}

module.exports = concertTickets;