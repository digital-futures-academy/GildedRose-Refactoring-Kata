const Item = require('../src/item.js')
const Passes = require('../src/passes.js')

describe('Testing Backstage Passes Class', function () {
  it('Checks if its quality increases as sellIn date approaches', function () {
    item = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 45)
    passes = new Passes(item)
    updated_passes = passes.update()
    updated_passes = passes.update()
    result = updated_passes
    expect(result.quality).toEqual(47)
  })
  it('Checks if its quality doubles when there are 10 or less days until the concert', function () {
    item = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 40)
    passes = new Passes(item)
    updated_passes = passes.update()
    updated_passes = passes.update()
    result = updated_passes
    expect(result.quality).toEqual(44)
  })
  it('Checks if its quality triples when there are 5 or less days until the concert', function () {
    item = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 40)
    passes = new Passes(item)
    updated_passes = passes.update()
    updated_passes = passes.update()
    result = updated_passes
    expect(result.quality).toEqual(46)
  })
  it('Checks if its quality drops to 0 after the concert', function () {
    item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)
    passes = new Passes(item)
    updated_passes = passes.update()
    updated_passes = passes.update()
    result = updated_passes
    expect(result.quality).toEqual(0)
  })
})
