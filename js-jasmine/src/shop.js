class Shop {
    constructor(updateDict, items = []) {
        this.updateDict = updateDict;
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            this.updateItem(item);
        });
        return this.items;
    }

    updateItem(item) {
        return this.updateDict[this.itemType(item)](item);
    }

    itemType(item) {
        let firstWord = item.name.split(/[^A-Za-z]/)[0].toLowerCase();
        if(Object.keys(this.updateDict).includes(firstWord)) {
            return firstWord;
        } return 'regular';
    }
}

module.exports = Shop;
