package com.gildedrose;

public class OrdinaryItem {
    public Item update(Item item){
        if(item.sellIn > -1){
            item.quality = Math.max(0, item.quality -= 1);
        }else{
            item.quality = Math.max(0, item.quality -= 2);
        }
        item.sellIn --;
        return item;
    }
}
