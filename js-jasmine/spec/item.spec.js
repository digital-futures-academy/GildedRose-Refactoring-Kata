const Item = require('../src/item.js')

describe('Testing Item Class', function(){
    it('Test 1 ', function(){
        const item = new Item('bike', 5, 45)
        expect(item.sellIn).toBe(5)
    })
     it('Test 2 ', function(){
        const item = new Item('Sulfuras, Hand of Ragnaros', 10, 80)
        expect(item.quality).toBe(80)
    })
})