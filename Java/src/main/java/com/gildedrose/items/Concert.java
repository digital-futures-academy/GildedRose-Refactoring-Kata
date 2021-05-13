package com.gildedrose;

public class Concert {
    public Item update(Item concert){
        concert.quality = Math.min(50, this.qualityCalculator(concert));
        concert.sellIn --;
        return concert;
    }

    private int qualityCalculator(Item concert){
        if(concert.sellIn <= 0){
            return 0;
        }else if(concert.sellIn < 6){
            return concert.quality + 3;
        }else if(concert.sellIn < 11){
            return concert.quality + 2;
        }
        return concert.quality + 1;
    }
}
