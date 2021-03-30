const Item =require('../src/item.js')
const Conjured = require('../src/conjured_items.js')

describe('Testing Conjured Items',function(){
  it('Checks if its quality decreases twice as fast',function(){
      item = new Item("Conjured", 5, 40)
       conjured_item = new Conjured([item])
       update_item = conjured_item.update()
       result = update_item = conjured_item.update()
        expect(result[0].quality).toEqual(36)
  })
    it('Checks if quality does not drop below zero',function(){
         item = new Item("Conjured", 5, 4)
         conjured_item = new Conjured([item])
         update_item = conjured_item.update()
          update_item = conjured_item.update()
          result = update_item = conjured_item.update()
        expect(result[0].quality).toEqual(0)
  })
})