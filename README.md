## Instructions
1. ``git clone git@github.com:joshjames279/gilded-rose-refactoring-challenge.git``
2. ``npm install`` in the js-jasmine directory to install project dependencies.

## Running the tests

This project uses the jasmine test framework.

Run the tests using ``npm test`` in the js-jasmine directory.

## Domain Model

| Object | Messages | Properties | Context | Output |
|------|------|------|------|------|
| AgedBrie | update | item(object) | Updates an 'Aged Brie' item to the requirements specified, plus makes sure it can't start with irregular quality values. | Object |
| BackstagePass | update | item(object) | Updates an 'Backstage passes to a TAFKAL80ETC concert' item to the requirements specified, plus makes sure it can't start with irregular quality values. | Object |
| Sulfuras | update | item(object) | Keeps Sulfuras the same, plus makes sure it can't start with irregular quality or sellIn values. | Object |
| Regular | update | item(object) | Updates a standard item to the requirements specified, plus makes sure it can't start with irregular quality values. | Object |
| Conjured | update | item(object) | Updates an 'Conjured' item to the requirements specified, plus makes sure it can't start with irregular quality values. | Object |
| Item | | name | | String |
| | | sellIn | Number of days to sell the item by. | Integer |
| | | quality | How valuable the item is. | Integer |
| Inventory | | | Is an object that helps the 'updateQuality' method in the class 'Shop' choose the correct class to use to update an item's properties for each day passed. | Class |
| Shop | | items(array) | The list of items in the Gilded Rose shop to have their properties updated at the end of a day. | |
| | updateQuality | items(array) | Goes through a list of items in the Gilded Rose shop and updates their properties at the end of each day, depending on what kind of item they are. | Array |

## How to use

## References

See ```OriginalReadMe``` file in js-jasmine directory.