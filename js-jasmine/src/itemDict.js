const SulfurasUpdate = require('./itemUpdateClasses/sulfurasUpdate');
const AgedBrieUpdate = require('./itemUpdateClasses/agedBrieUpdate');
const BackStageUpdate = require('./itemUpdateClasses/backStageUpdate');
const ConjuredUpdate = require('./itemUpdateClasses/conjuredUpdate');
const RegularItemUpdate = require('./itemUpdateClasses/regularItemUpdate');

const itemDict = {
    sulfuras: SulfurasUpdate,
    aged: AgedBrieUpdate,
    backstage: BackStageUpdate,
    conjured: ConjuredUpdate,
    regular: RegularItemUpdate
};

module.exports = itemDict;