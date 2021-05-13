package com.gildedrose;

public class AgedBrie {
    public Item update(Item cheese){
        if(cheese.sellIn > 0){
            cheese.quality = Math.min(50, cheese.quality += 1);
        }else{
            cheese.quality = Math.min(50, cheese.quality += 2);
        }
        cheese.sellIn --;
        return cheese;
    }
}
