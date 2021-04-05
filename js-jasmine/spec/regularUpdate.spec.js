const MockItem = require('./fixtures/mockItem');
const RegularItemUpdate = require('../src/itemUpdateClasses/regularItemUpdate');

let item, output, regularItemUpdate

describe('Testing RegularItemUpdate finalChanges() function: ', () => {
	beforeEach(() => {
		regularItemUpdate = new RegularItemUpdate();
	})

    it('item quality is between 0 and 50', () => {
        item = new MockItem(10, 15);

        output = regularItemUpdate.finalChanges(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(15);
    })

    it('item quality is less than 0', () => {
        item = new MockItem(10, -3);

        output = regularItemUpdate.finalChanges(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(0);
    })

    it('item quality is greater than 50', () => {
        item = new MockItem(10, 52);

        output = regularItemUpdate.finalChanges(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(50);
    })
})



describe('Testing regularItemUpdate update() function: ', () => {
	beforeEach(() => {
		regularItemUpdate = new RegularItemUpdate();
	})

    it('item quality decreases by 1 when sellin is above 0', () => {
        item = new MockItem(5, 10);

        output = regularItemUpdate.update(item);

        expect(output.sellIn).toEqual(4);
        expect(output.quality).toEqual(9);
    })

    it('item quality decreases by 2 when sellin is 0 or below', () => {
        item = new MockItem(0, 10);

        output = regularItemUpdate.update(item);

        expect(output.sellIn).toEqual(-1);
        expect(output.quality).toEqual(8);
    })
})