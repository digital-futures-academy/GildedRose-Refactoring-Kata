const finalChanges = (item) => {
    if(item.quality <= 0) item.quality = 0;
    if(item.quality >= 50) item.quality = 50;
    item.sellIn --;
    return item;
};

const updateDict = {
    sulfuras: (item) => {
        return item;
    },

    aged: (item) => {
        item.quality ++;
        if (item.sellIn <= 0) item.quality ++;
        return finalChanges(item);
    },

    backstage: (item) => {
        item.quality ++;
        if (item.sellIn <= 10) item.quality ++;
        if (item.sellIn <= 5) item.quality ++;
        if (item.sellIn <= 0) item.quality = 0;
        return finalChanges(item);
    },

    conjured: (item) => {
        item.quality -= 2;
        if (item.sellIn <= 0) item.quality -= 2;
        return finalChanges(item);
    },

    regular: (item) => {
        item.quality --;
        if (item.sellIn <= 0) item.quality --;
        return finalChanges(item);
    },
};

module.exports = { finalChanges, updateDict };
