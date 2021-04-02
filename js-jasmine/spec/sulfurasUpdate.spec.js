const MockItem = require('./fixtures/mockItem');
const SulfurasUpdate = require('../src/itemUpdateClasses/sulfurasUpdate');

let item, output, sulfurasUpdate

describe('Testing SulfurasUpdate class update() function: ', () => {
    it('checking that parameters do not change', () => {
		sulfurasUpdate = new SulfurasUpdate();
        item = new MockItem(-20, 80);

        output = sulfurasUpdate.update(item);

        expect(output.sellIn).toEqual(-20);
        expect(output.quality).toEqual(80);
    })
})