const Item = require('../src/item.js')
const Shop = require('../src/shop.js')
const AgedBrie = require('../src/agedbrie.js')
describe ('Test', function(){
  fit('test',function(){
    item = new Item("Aged Brie", 5, 8)
    shop = new Shop([item])
    result = shop.update()
    expect(result[0].quality).toEqual(9)
  })
})

