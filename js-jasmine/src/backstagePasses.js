class BackstagePass {
    constructor(item = []) {
        this.item = item
    }

    updateQuality() {
        //"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches; 
        //Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
        //Quality drops to 0 after the concert 
    }
}

module.exports = BackstagePass