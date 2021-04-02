# Mousinho gilded rose challenge
My current attempt to refactor the guilded rose problem. Practice at analysing legacy code, creating a domain model, test driven development, and OOP principles.

## Directory Information
To access the edited files in this directory, navigate to the [js-jasmine](https://github.com/AntMousinho/gilded-rose-refactoring-challenge/tree/master/js-jasmine) folder.

Within this directory the gilded rose functionality has been split beween multiple classes. The [Shop](https://github.com/AntMousinho/gilded-rose-refactoring-challenge/blob/master/js-jasmine/src/shop.js) class maintains its original funcitonality, holding an array of Items and updating them. The `Shop` class accesses a dictionary of classes, [itemDict](https://github.com/AntMousinho/gilded-rose-refactoring-challenge/blob/master/js-jasmine/src/itemDict.js), that each hold the functionality to update the various item types found at the gilded rose. 

Each of these classes can be found within the [itemUpdateClasses Directory](https://github.com/AntMousinho/gilded-rose-refactoring-challenge/tree/master/js-jasmine/src/itemUpdateClasses).

## Quick setup
```
$ git clone git@github.com:AntMousinho/gilded-rose-refactoring-challenge.git
$ npm install
```

<p>&nbsp;</p>

## To run tests
```
$ npx jasmine
# or
$ npm test
```

<p>&nbsp;</p>

## Running the programme
Within `index.js` there is an example already set up with an item list that can be tested through the command line with the number of days you want to pass.
```
$ node index.js [number of days]
```

An example input would be:
```
$ node index.js 3
```

Which produces an output of:
```
OMGHAI!
-------- day 0 --------
name, sellIn, quality
+5 Dexterity Vest, 10, 20
Aged Brie, 1, 0
Elixir of the Mongoose, 5, 1
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 15, 20
Backstage passes to a TAFKAL80ETC concert, 10, 39
Backstage passes to a TAFKAL80ETC concert, 5, 45
Conjured Mana Cake, 1, 9
-------- day 1 --------
name, sellIn, quality
+5 Dexterity Vest, 9, 19
Aged Brie, 0, 1
Elixir of the Mongoose, 4, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 14, 21
Backstage passes to a TAFKAL80ETC concert, 9, 41
Backstage passes to a TAFKAL80ETC concert, 4, 48
Conjured Mana Cake, 0, 7
-------- day 2 --------
name, sellIn, quality
+5 Dexterity Vest, 8, 18
Aged Brie, -1, 3
Elixir of the Mongoose, 3, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 13, 22
Backstage passes to a TAFKAL80ETC concert, 8, 43
Backstage passes to a TAFKAL80ETC concert, 3, 50
Conjured Mana Cake, -1, 3
```


<p>&nbsp;</p>

## Approach
- After reading the requirements, I made a quick note of the criteria and edits that each item type would undergo
- Looked through the original gilded file line by line, making notes on how the original code worked and what item each line was altering.
- Wrote specs for the `Shop` class. Testing each item type that was identified in the requirements. These original tests can be found between lines 7 and 125 of [shop.spec.js](https://github.com/AntMousinho/mousinho-gilded-rose-challenge/blob/main/spec/shop.spec.js) file.
    -   With the original guilded rose code, all these tests passed
- Began editing the Shop class `updateItems()` function. Started with simple line edits. e.g.
```js
// Original
this.items[i].quality = this.items[i].quality + 1;
// Edit
this.items[i].quality ++;
```
- Able to extract checks that persisted throughout the funtion
    - Any checks for sulfuras could be extracted and placed above the rest of the code
    ```js
    if(this.items[i].name === 'Sulfuras, Hand of Ragnaros') break;
    ```
- The `Shop` class started becoming separated into if statements that checked for the item name, then apply all the appropriate changes to that item before moving to the next item type
- Extracted the if statements into their own functions. e.g. `updateBrie()`, `updateBackstage()` and `updateRegular()`
    - Used a switch statement within `updateItem()` that selected the correct function to use on the current item
- With every step I kept running my specs to make sure the class was still running as expected
- Thought to extract item type functions into an object within `updateDict.js`
    - Wrote specs for this object's expected outputs
    - Extracted the methods so that the Shop class could select the appropriate method to use depending on the first word of the item.
- Extracted the funcitonality of each item type into their own classes (found within `src/itemUpdateClasses`).
	- the item dictionary now refers to each type of item class to choose the correct update method to call
