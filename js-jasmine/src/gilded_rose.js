class Shop {
    constructor(items = []){
        this.items = items;
    }
  
    updateQuality() {
        this.items.forEach(item => {
          return item.updateQuality();
        });
    }
}

module.exports = Shop; 

