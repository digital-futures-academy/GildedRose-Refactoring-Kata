class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  reduceQuality(input) {
    if (0 < input.quality && input.quality < 51){
    return input.quality --
    }
  }

  increaseQuality(input) {
    if (0 <= input.quality && input.quality < 50){
    return input.quality ++
    }
  }
        
  reduceSellIn(input){
    if (this.isItemSulfuras(input) === false && input.sellIn > 0){
      return input.sellIn --
    }
  }

  isItemSulfuras(input){
    if('Sulfuras, Hand of Ragnaros' === input.name){
      return true
    }
    else
    return false
  }

  isItemAgedBrie(input){
    if('Aged Brie' === input.name){
      return true
    }
    else
    return false
  }

  isItemBackPass(input){
    if('Backstage passes to a TAFKAL80ETC concert' === input.name){
      return true
    }
    else
    return false
  }
    
  isItemSpecial(input){
    let checkArray = [this.isItemSulfuras(input), this.isItemAgedBrie(input), this.isItemBackPass(input)]
    if (checkArray.every(value => value === false) === true){
      return false
    }
    else {
      return true
    }
  }

 
 
  updateQualityAndSellIn(){
    for (let i = 0; i < this.items.length; i++) {
      if (this.isItemSpecial(this.items[i]) === false){
        this.reduceQuality(this.items[i])
      }
      else if(this.isItemAgedBrie(this.items[i]) === true){
        this.increaseQuality(this.items[i])
      }
      else if(this.isItemBackPass(this.items[i]) === true){
        if(this.items[i].sellIn > 10){
          this.increaseQuality(this.items[i])
        }
        else if(this.items[i].sellIn < 11 && this.items[i].sellIn > 5 ){
          this.increaseQuality(this.items[i])
          this.increaseQuality(this.items[i])
          console.log(this.items[i].quality)
        }
        else if(this.items[i].sellIn < 6 && this.items[i].sellIn > 0  ){
          this.increaseQuality(this.items[i])
          this.increaseQuality(this.items[i])
          this.increaseQuality(this.items[i])
        }
        else if(this.items[i].sellIn === 0){
          this.items[i].quality = 0
        }
      }
    
    if (this.isItemSpecial(this.items[i]) === false && this.items[i].sellIn === 0) {
    this.reduceQuality(this.items[i])
    }
    this.reduceSellIn(this.items[i]) 
  }
    return this.items
  }

}

module.exports = {
  Item,
  Shop}   
  
let brie = new Item('Aged Brie', 2, 48)
let shoe = new Item('Shoe', 2, 17)
let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)
let sulf = new Item('Sulfuras, Hand of Ragnaros', 80, 80)
let shop = new Shop([brie,shoe,pass,sulf])

shop.updateQualityAndSellIn()
console.log(shop.items)
shop.updateQualityAndSellIn()
console.log(shop.items)
shop.updateQualityAndSellIn()
console.log(shop.items)
shop.updateQualityAndSellIn()
console.log(shop.items)
shop.updateQualityAndSellIn()
console.log(shop.items)
shop.updateQualityAndSellIn()
console.log(shop.items)


    