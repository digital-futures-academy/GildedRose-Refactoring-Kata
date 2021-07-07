const BackstagePass = require('../src/backstagePass.js')
const Item = require('../src/item.js')

describe('BackStage Pass', function () {
  it('quality increase by 2', function () {
    const backstagePass = new BackstagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5))
    backstagePass.update()

    expect(backstagePass.sellIn).toEqual(9)
    expect(backstagePass.quality).toEqual(7)
  })

  it('quality increase by 3', function () {
    const backstagePass = new BackstagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5))
    backstagePass.update()

    expect(backstagePass.sellIn).toEqual(4)
    expect(backstagePass.quality).toEqual(8)
  })

  it('quality set to 0', function () {
    const backstagePass = new BackstagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5))
    backstagePass.update()

    expect(backstagePass.sellIn).toEqual(-1)
    expect(backstagePass.quality).toEqual(0)
  })
})
