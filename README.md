# Instructions

Please navigate [here](https://github.com/namcap1/gilded-rose-refactoring-challenge/blob/master/instructions.md) to find the instructions.

The requirements for this challenge can be found [here](https://github.com/namcap1/gilded-rose-refactoring-challenge/blob/master/GildedRoseRequirements.txt).

## Information

Only the js-jasmine has been refactored so far. Within the js-jasmine there are 3 files in the src folder. The [og](https://github.com/namcap1/gilded-rose-refactoring-challenge/blob/master/js-jasmine/src/og.js) is the original gilded rose. The shop now acts as a medium that keeps all the qualities [shop](https://github.com/namcap1/gilded-rose-refactoring-challenge/blob/master/js-jasmine/src/shop.js). The shop no longer uses a for loop but recursion which sends to a check class which then sends to one of the item classes in the items folder.

## Run tests

To run the tests you can use npm test or npx jasmine. To test a specific test navigate to the spec file and put f before the file and then run either command. 

## Example code 
var Shop = require('../src/shop.js');
var Item = require('../src/item');
const gildedRose = new Shop([new Item('Conjured', 0, 4), new Item('Aged Brie', 1, 49)]);
const items = gildedRose.quality();

console.log(items);

[
  Item { name: 'Conjured', sellIn: -1, quality: 0 },
  Item { name: 'Aged Brie', sellIn: 0, quality: 50 }
]



