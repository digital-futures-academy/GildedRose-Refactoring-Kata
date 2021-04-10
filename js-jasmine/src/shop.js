const Item = require('./item');

class Shop {
    constructor(items=[]){
      this.items = items;
    }
    change() {
      this.items.forEach(item => {
        return item.change();
      });
    }
  }

  module.exports = Shop;