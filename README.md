# Instructions

Please navigate [here](https://github.com/namcap1/gilded-rose-refactoring-challenge/blob/master/instructions.md) to find the instructions.

The requirements for this challenge can be found [here](https://github.com/namcap1/gilded-rose-refactoring-challenge/blob/master/GildedRoseRequirements.txt).

## Information

Only the js-jasmine has been refactored so far. Within the js-jasmine there are 3 files in the src folder. The [og](https://github.com/namcap1/gilded-rose-refactoring-challenge/blob/master/js-jasmine/src/og.js) is the original gilded rose. The shop now acts as a medium that keeps all the qualities [shop](https://github.com/namcap1/gilded-rose-refactoring-challenge/blob/master/js-jasmine/src/shop.js). The shop no longer uses a for loop but recursion which sends to a check class which then sends to one of the item classes in the items folder.

## Run tests

To run the tests you can use npm test or npx jasmine. To test a specific test navigate to the spec file and put f before the file and then run either command. 

## Example code 

``` javascript
var Shop = require('../src/shop.js');
var Item = require('../src/item');
const gildedRose = new Shop([new Item('Conjured', 0, 4), new Item('Aged Brie', 1, 49)]);
const items = gildedRose.quality();

console.log(items);

[
  Item { name: 'Conjured', sellIn: -1, quality: 0 },
  Item { name: 'Aged Brie', sellIn: 0, quality: 50 }
]
```


<<<<<<< HEAD
=======

## Text-Based Approval Testing

This code comes with comprehensive tests that use this approach. For information about how to run them, see the [texttests README](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/texttests)

## Translating this code

More translations are most welcome! I'm very open for pull requests that translate the starting position into additional languages. 

Please note a translation should ideally include:

- a translation of the production code for 'update_quality' and Item
- one failing unit test complaining that "fixme" != "foo"
- a TextTest fixture, ie a command-line program that runs update_quality on the sample data for the number of days specified.

Please don't write too much code in the starting position or add too many unit tests. The idea with the one failing unit test is to tempt people to work out how to fix it, discover it wasn't that hard, and now they understand what this test is doing they realize they can improve it.  

If your programming language doesn't have an easy way to add a command-line interface, then the TextTest fixture is probably not necessary.

## Better Code Hub

I analysed this repo according to the clean code standards on [Better Code Hub](https://bettercodehub.com) just to get an independent opinion of how bad the code is. Perhaps unsurprisingly, the compliance score is low!

[![BCH compliance](https://bettercodehub.com/edge/badge/emilybache/GildedRose-Refactoring-Kata?branch=master)](https://bettercodehub.com/) 

#### Standard
- [ ] Meets the spec
- [ ] Developed test-first - tests written to cover existing functionality.
- [ ] Passes tests and code is linted
- [ ] Methods are extracted one by one from the nested `if` statement per item type
- [ ] Classes that encapsulate item update procedures are extracted per item type
- [ ] Shop#updateQuality() has no `if() {}` statements

#### Extended
- [ ] See a coach!
>>>>>>> ffedf86a484229346af714d4421a33b921bcb5fe
