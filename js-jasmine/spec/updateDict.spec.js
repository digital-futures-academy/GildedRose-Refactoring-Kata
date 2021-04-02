const { finalChanges, updateDict } = require('../src/updateDict');

class mockItem {
    constructor(sellIn, quality) {
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

let item, output;

describe('Testing finalChanges function: ', () => {
    it('item quality is between 0 and 50', () => {
        item = new mockItem(10, 15);

        output = finalChanges(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(15);
    })

    it('item quality is less than 0', () => {
        item = new mockItem(10, -3);

        output = finalChanges(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(0);
    })

    it('item quality is greater than 50', () => {
        item = new mockItem(10, 52);

        output = finalChanges(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(50);
    })
})

describe('Testing updateDict.sulfuras: ', () => {
    it('checking that parameters do not change', () => {
        item = new mockItem(-20, 80);

        output = updateDict.sulfuras(item);

        expect(output.sellIn).toEqual(-20);
        expect(output.quality).toEqual(80);
    })
})

describe('Testing updateDict.aged: ', () => {
    it('checking quality increases by 1 when sellin is above 0', () => {
        item = new mockItem(10, 12);

        output = updateDict.aged(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(13);
    })

    it('checking quality increases by 1 when sellin is 0 or less', () => {
        item = new mockItem(0, 12);

        output = updateDict.aged(item);

        expect(output.sellIn).toEqual(-1);
        expect(output.quality).toEqual(14);
    })
})

describe('Testing updateDict.backstage: ', () => {
    it('checking quality increases by 1 when sellin is above 10', () => {
        item = new mockItem(11, 12);

        output = updateDict.backstage(item);

        expect(output.sellIn).toEqual(10);
        expect(output.quality).toEqual(13);
    })

    it('checking quality increases by 2 when sellin is between 10 and 5', () => {
        item = new mockItem(10, 12);

        output = updateDict.backstage(item);

        expect(output.sellIn).toEqual(9);
        expect(output.quality).toEqual(14);
    })

    it('checking quality increases by 3 when sellin is below 5', () => {
        item = new mockItem(5, 12);

        output = updateDict.backstage(item);

        expect(output.sellIn).toEqual(4);
        expect(output.quality).toEqual(15);
    })

    it('checking quality becomes 0 when sellin is 0 or less', () => {
        item = new mockItem(0, 30);

        output = updateDict.backstage(item);

        expect(output.sellIn).toEqual(-1);
        expect(output.quality).toEqual(0);
    })
})

describe('Testing updateDict.regular: ', () => {
    it('item quality decreases by 1 when sellin is above 0', () => {
        item = new mockItem(5, 10);

        output = updateDict.regular(item);

        expect(output.sellIn).toEqual(4);
        expect(output.quality).toEqual(9);
    })

    it('item quality decreases by 2 when sellin is 0 or below', () => {
        item = new mockItem(0, 10);

        output = updateDict.regular(item);

        expect(output.sellIn).toEqual(-1);
        expect(output.quality).toEqual(8);
    })
})

describe('Testing updateDict.conjured: ', () => {
    it('item quality decreases by 2 when sellin above 0', () => {
        item = new mockItem(5, 10);

        output = updateDict.conjured(item);

        expect(output.sellIn).toEqual(4);
        expect(output.quality).toEqual(8);
    })

    it('item quality decreases by 4 when sellin is 0 or below', () => {
        item = new mockItem(-1, 10);

        output = updateDict.conjured(item);

        expect(output.sellIn).toEqual(-2);
        expect(output.quality).toEqual(6);
    })
}) 