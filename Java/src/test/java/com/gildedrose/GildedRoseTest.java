package com.gildedrose;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class GildedRoseTest {

    @Test void foo() {
        Item[] items = new Item[] { new Item("foo", 0, 0) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals("foo", app.items[0].name);
    }
    @Test void qualityShouldBePositive(){
        Item[] items = new Item[] { new Item("foo", 0, 0)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(0, app.items[0].quality);
    }
    @Test void hasALowerSellInAtEndOfDay(){
        Item[] items = new Item[] {new Item("foo", 1, 0)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(0, app.items[0].sellIn);
    }
    @Test void lowerQualityAtTheEndOfDay(){
        Item[] items = new Item[] {new Item("foo", 0, 1)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(0, items[0].quality);
    }
    @Test void doubleQualityLossWhenSellInIsMinusOne(){
        Item[] items = new Item[] {new Item("foo", -1, 4)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(-2, items[0].sellIn);
        assertEquals(2, items[0].quality);
    }
    @Test void agedBrieQualityIncreasesWithAge(){
        Item[] items = new Item[] {new Item("Aged Brie", 1, 49)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(50, items[0].quality);
    }
    @Test void qualityCanNeverExceedFiftyWhenStartingAtFifty(){
        Item[] items = new Item[] {new Item("Aged Brie", 0 , 50)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(50, items[0].quality);
    }
    @Test void SHORNeverDecreasesInQualityOrSellIn(){
        Item[] items = new Item[] {new Item("Sulfuras, Hand of Ragnaros", 1, 80)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(80, items[0].quality);
        assertEquals(1, items[0].sellIn);
    }
    @Test void concertQualityIncreasesBy2WhenTenDaysOrLess(){
        Item[] items = new Item[] {new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(42, items[0].quality);
    }
    @Test void concertQualityIncreasesBy3WhenFiveDaysOrLess(){
        Item[] items = new Item[] {new Item("Backstage passes to a TAFKAL80ETC concert", 4, 40)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(43, items[0].quality);
    }
    @Test void concertQualityHitsZeroWhenSellInHitsZero(){
        Item[] items = new Item[] {new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(0, items[0].quality);
    }
    @Test void conjuredItemsDepleteAtFasterRate(){
        Item[] items = new Item[] {new Item("Conjured Aged Brie", 1, 49)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(47, items[0].quality);
    }
    @Test void conjuredItemsDepleteAtAFasterRateWhenZeroSellIn(){
        Item[] items = new Item[] {new Item("Conjured Aged Brie", 0, 4)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(0, items[0].quality);
    }
    @Test void multipleItems(){
        Item[] items = new Item[] {new Item("Conjured Aged Brie", 0, 4), new Item("Aged Brie", 1, 49)};
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(0, items[0].quality);
        assertEquals(-1, items[0].sellIn);
        assertEquals(50, items[1].quality);
        assertEquals(0, items[1].sellIn);
    }
}
