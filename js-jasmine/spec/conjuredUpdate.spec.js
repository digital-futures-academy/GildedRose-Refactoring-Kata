const MockItem = require('./fixtures/mockItem');
const ConjuredUpdate = require('../src/itemUpdateClasses/conjuredUpdate');

let item, output, conjuredUpdate;

describe('Testing conjuredUpdate class update() function: ', () => {
	beforeEach(() => {
		conjuredUpdate = new ConjuredUpdate();
	})

    it('item quality decreases by 2 when sellin above 0', () => {
        item = new MockItem(5, 10);

        output = conjuredUpdate.update(item);

        expect(output.sellIn).toEqual(4);
        expect(output.quality).toEqual(8);
    })

    it('item quality decreases by 4 when sellin is 0 or below', () => {
        item = new MockItem(-1, 10);

        output = conjuredUpdate.update(item);

        expect(output.sellIn).toEqual(-2);
        expect(output.quality).toEqual(6);
    })
}) 