const StandardItem = require('../src/standardItem.js')
const Item = require('../src/item.js')

describe('Conjured Items', function () {
  it('quality decreases by 1', function () {
    const conjuredItem = new StandardItem(new Item('+5 Dexterity Vest', 10, 20))
    conjuredItem.update()

    expect(conjuredItem.sellIn).toEqual(9)
    expect(conjuredItem.quality).toEqual(19)
  })

  it('quality decreases by 2', function () {
    const conjuredItem = new StandardItem(new Item('+5 Dexterity Vest', 0, 5))
    conjuredItem.update()

    expect(conjuredItem.sellIn).toEqual(-1)
    expect(conjuredItem.quality).toEqual(3)
  })

  it('quality min 0', function () {
    const conjuredItem = new StandardItem(new Item('+5 Dexterity Vest', 0, 0))
    conjuredItem.update()

    expect(conjuredItem.sellIn).toEqual(-1)
    expect(conjuredItem.quality).toEqual(0)
  })
})
