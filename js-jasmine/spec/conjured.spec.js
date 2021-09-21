const Conjured = require('../src/conjured.js')
const Item = require('../src/item.js')

describe('Conjured Items', function () {
  it('quality decreases by 2', function () {
    const conjuredItem = new Conjured(new Item('Conjured Mana Cake', 3, 6))
    conjuredItem.update()

    expect(conjuredItem.sellIn).toEqual(2)
    expect(conjuredItem.quality).toEqual(4)
  })

  it('quality decreases by 4', function () {
    const conjuredItem = new Conjured(new Item('Conjured Mana Cake', 0, 5))
    conjuredItem.update()

    expect(conjuredItem.sellIn).toEqual(-1)
    expect(conjuredItem.quality).toEqual(1)
  })

  it('quality min 0', function () {
    const conjuredItem = new Conjured(new Item('Conjured Mana Cake', 0, 3))
    conjuredItem.update()

    expect(conjuredItem.sellIn).toEqual(-1)
    expect(conjuredItem.quality).toEqual(0)
  })
})
