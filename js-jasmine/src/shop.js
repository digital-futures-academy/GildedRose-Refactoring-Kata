const itemDict = require('./itemDict');

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => this.updateItem(item));
        return this.items;
    }

    updateItem(item) {
        const updator = new itemDict[this.itemType(item)]();
        return updator.update(item);
    }

    itemType(item) {
        let firstWord = item.name.split(/[^A-Za-z]/)[0].toLowerCase();
        if(Object.keys(itemDict).includes(firstWord)) {
            return firstWord;
        } return 'regular';
    }
}

module.exports = Shop;
