class Sulfuras {
    constructor(items = []) {
    this.items = items
    }

    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            if(this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn === 0
                this.items[i].quality === 80
            }
        }
        return this.items
    }
}

module.exports = Sulfuras

// "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
// "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters