const BaseItem = require('../src/baseItem.js')

describe('BaseItem', function () {
  const item = {
    name: 'name',
    sellIn: 1,
    quality: 4
  }

  it('has properties', function () {
    const baseItem = new BaseItem(item)

    expect(baseItem.name).toEqual('name')
    expect(baseItem.sellIn).toEqual(1)
    expect(baseItem.quality).toEqual(4)
  })

  it('update() throws error', function () {
    const baseItem = new BaseItem(item)

    expect(() => baseItem.update()).toThrowError('Please implement me')
  })
})
