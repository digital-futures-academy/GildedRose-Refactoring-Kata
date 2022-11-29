  class TestsAndActions{
    constructor(){}
  
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

}

module.exports = TestsAndActions