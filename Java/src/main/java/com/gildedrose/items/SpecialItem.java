package com.gildedrose;

public class SpecialItem {
    private AgedBrie cheese = new AgedBrie();
    private Concert concert = new Concert();
    private Conjured conjured = new Conjured();

    public Item check(Item item){
        if(item.name == "Aged Brie"){
            return this.cheese.update(item);
        }else if(item.name == "Backstage passes to a TAFKAL80ETC concert"){
            return this.concert.update(item);
        }else if(item.name.contains("Conjured")){
            return this.conjured.update(item);
        }
        return item;
    }
}
