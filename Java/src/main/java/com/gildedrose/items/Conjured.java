package com.gildedrose;

public class Conjured {
    public Item update(Item conjured){
        if(conjured.sellIn > 0){
            conjured.quality = Math.max(0, conjured.quality -= 2);
        }else{
            conjured.quality = Math.max(0, conjured.quality -= 4);
        }
        conjured.sellIn--;
        return conjured;
    }
}
