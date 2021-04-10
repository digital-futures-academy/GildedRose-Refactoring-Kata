const RegularItems = require('./regular.js'); 
const AgedBrie = require("./agedBrie.js"); 
const BackstagePass = require('./backstage.js');
const Conjured = require('./conjured.js');
const Sulfuras = require('./sulfuras.js');

const itemDict = {
    'Aged Brie': AgedBrie,
    'Backstage passes to a TAFKAL80ETC concert': BackstagePass,
    'Conjured': Conjured,
    'Sulfuras, Hand of Ragnaros': Sulfuras,
    'regular item': RegularItems
  }

  module.exports = itemDict

