const Sulfuras = require('../src/sulfuras.js')
const Item = require('../src/item.js')

describe('Sulfuras', function () {
  it("doesn't change", function () {
    const sulfuras = new Sulfuras(new Item('Sulfuras, Hand of Ragnaros', 0, 80))
    sulfuras.update()

    expect(sulfuras.sellIn).toEqual(0)
    expect(sulfuras.quality).toEqual(80)
  })
})
