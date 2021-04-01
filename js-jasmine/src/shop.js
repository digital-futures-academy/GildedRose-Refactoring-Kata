const Check = require('./check');

class Shop {
  constructor(items=[], check = new Check()){
    this.items = items;
    this.check = check;
  }
  quality(){
    let templistSlice = this.items;
    this.updateQuality(templistSlice);
    return this.items;
  }

  updateQuality(templist) {
    if(templist.length === 0){
      return;
    }
    else{
      let it = this.items.length - templist.length;
      this.items[it] = this.check.uniqueitem(templist[0]);
      this.updateQuality(templist.slice(1));
    }
  }

}
module.exports = Shop;
