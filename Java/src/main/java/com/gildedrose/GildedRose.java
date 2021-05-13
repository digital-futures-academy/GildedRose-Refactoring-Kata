package com.gildedrose;

class GildedRose {
    Item[] items;
    private OrdinaryItem ordinary = new OrdinaryItem();
    private SpecialItem special = new SpecialItem();

    public GildedRose(Item[] items) {
        this.items = items;       
    }

    public void updateQuality() {
        for (int i = 0; i < items.length; i++) {
            if(items[i].name == "Backstage passes to a TAFKAL80ETC concert" || items[i].name == "Aged Brie" || items[i].name == "Sulfuras, Hand of Ragnaros" || items[i].name.contains("Conjured")){
                items[i] = this.special.check(items[i]);
            }else{
                items[i] = this.ordinary.update(items[i]);
            }
        }   
    }
}