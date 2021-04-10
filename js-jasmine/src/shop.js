const Item = require('./item.js');
const itemDict = require('./itemDict.js');

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  update() {
    this.items.map(item => {
      const itemClass = itemDict[item.name]
      const newItem = new itemClass(item)
      newItem.updateQuality()
    })
    return this.items;
  }
}

module.exports = Shop
