const MockItem = require('./fixtures/mockItem');
const BackstageUpdate = require('../src/itemUpdateClasses/backStageUpdate');

let item, output, backStageUpdate;

describe('Testing BackStageUpdate class update function(): ', () => {
	beforeEach(() => {
		backStageUpdate = new BackstageUpdate()
	})

    it('checking quality increases by 1 when sellin is above 10', () => {
        item = new MockItem(11, 12);

        output = backStageUpdate.update(item);

        expect(output.sellIn).toEqual(10);
        expect(output.quality).toEqual(13);
    })

    it('checking quality increases by 2 when sellin is between 10 and 5', () => {
        item = new MockItem(10, 12);

        output = backStageUpdate.update(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(14);
    })

    it('checking quality increases by 3 when sellin is below 5', () => {
        item = new MockItem(5, 12);

        output = backStageUpdate.update(item);

        expect(output.sellIn).toEqual(4);
        expect(output.quality).toEqual(15);
    })

    it('checking quality becomes 0 when sellin is 0 or less', () => {
        item = new MockItem(0, 30);

        output = backStageUpdate.update(item);

        expect(output.sellIn).toEqual(-1);
        expect(output.quality).toEqual(0);
    })
})