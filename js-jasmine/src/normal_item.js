const Item = require('./item')

class NormalItem {
    constructor(items = []) {
    this.items = items
    }

    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            if(this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                if(this.items[i].sellIn > 0) {
                    this.items[i].quality--
                }
                if(this.items[i].sellIn < 0) {
                    this.items[i].quality--
                    this.items[i].quality--
                }
            }
            this.items[i].sellIn--
        }
    return this.items
    }
}

module.exports = NormalItem

// Once the sell by date has passed, Quality degrades twice as fast
// Quality is never negative