const Item = require ('../src/item.js')
const Sulfuras = require('../src/sulfuras.js')

describe('Tests for Sulfuras Class', function(){
    it("Testing if Sulfuras' quality changes", function(){
       item = new Item ("Sulfuras, Hand of Ragnaros", 5, 80)
       updated_sulfuras = new Sulfuras(item)
       result = updated_sulfuras.update()
       expect(result.quality).toEqual(80)
  })
    it("Testing if Sulfuras' sellin date changes", function(){
      item = new Item ("Sulfuras, Hand of Ragnaros", 5, 80)
      updated_sulfuras = new Sulfuras(item)
      result = updated_sulfuras.update()
      expect(result.sellIn).toEqual(5)
  })
})