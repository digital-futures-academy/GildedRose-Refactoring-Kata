const AgedBrie = require('./agedBrie.js');
const BackstagePass = require('./backstagePass.js');
const Sulfuras = require('./sulfuras.js');
const NormalItems = require('./normalItems.js');
const Conjured = require('./conjured.js');

const itemsDict = {
    'Aged Brie' : AgedBrie,
    'Backstage passes to a TAFKAL80ETC concert' : BackstagePass,
    'Sulfuras, Hand of Ragnaros': Sulfuras,
    'milkshake': NormalItems,
    'Conjured': Conjured
}
module.exports =
  itemsDict