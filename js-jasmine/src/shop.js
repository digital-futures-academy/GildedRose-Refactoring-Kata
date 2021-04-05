const Item = require('../src/item.js')
const AgedBrie = require('../src/agedBrie.js')
const Sulfuras = require('../src/sulfuras.js')
const Conjured = require('../src/conjured.js')
const BackstagePass = require('../src/backstagePasses.js')
const NormalItem = require('../src/normalItem.js')

const itemDict = {
    'Aged Brie': AgedBrie,
    'Backstage passes to a TAFKAL80ETC concert': BackstagePass,
    'Conjured': Conjured,
    'Sulfuras, Hand of Ragnaros': Sulfuras,
    'Normal Item': NormalItem
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            const itemClass = itemDict[this.items[i].name]
            const newItem = new itemClass(this.items[i])
            newItem.updateQuality()
        }
        return this.items
    }
}

module.exports = Shop