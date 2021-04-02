const AgedBrieUpdate = require('../src/itemUpdateClasses/agedBrieUpdate');
const MockItem = require('./fixtures/mockItem');

let item, output, agedBrieUpdate;

describe('Testing agedBrieUpdate class update() function: ', () => {
	beforeEach(() => {
		agedBrieUpdate = new AgedBrieUpdate();
	})

    it('checking quality increases by 1 when sellin is above 0', () => {
        item = new MockItem(10, 12);

        output = agedBrieUpdate.update(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(13);
    })

    it('checking quality increases by 1 when sellin is 0 or less', () => {
        item = new MockItem(0, 12);

        output = agedBrieUpdate.update(item);

        expect(output.sellIn).toEqual(-1);
        expect(output.quality).toEqual(14);
    })
})