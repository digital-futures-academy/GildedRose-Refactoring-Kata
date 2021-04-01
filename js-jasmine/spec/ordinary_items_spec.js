const Item = require('../src/item.js')
const Ordinary = require('../src/ordinary_items.js')

describe('Testing ordinary items', function(){
  it('Checks if quality is updated', function(){
    item = new Item("Ordinary", 5, 10)
    ordinary = new Ordinary(item)
    updated_item = ordinary.update()
    result = updated_item
    expect(result.quality).toEqual(9)
  })
  it('Checks if quality drops twice as fast after  sell by date passed', function(){
    item = new Item("Ordinary", -1, 10)
    ordinary = new Ordinary(item)
    updated_item = ordinary.update()
    result = updated_item
    expect(result.quality).toEqual(8)

  })
    it('Checks if sell in day is updated', function(){
    item = new Item("Ordinary", -1, 10)
     ordinary = new Ordinary(item)
    updated_item = ordinary.update()
    updated_item = ordinary.update()
    updated_item = ordinary.update()
    result = updated_item
    expect(result.sellIn).toEqual(-4)

  })
     it('Checks if quality is not a negative number', function(){
    item = new Item("Ordinary", -1, 0)
    ordinary = new Ordinary(item)
    updated_item = ordinary.update()
    updated_item = ordinary.update()
    updated_item = ordinary.update()
    result = updated_item
    expect(result.quality).toEqual(0)

  })
})