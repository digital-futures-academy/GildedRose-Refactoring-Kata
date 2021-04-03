## Gilded Rose Refactoring Challenge
This is my take on the Gilded Rose Refactoring Kata which focuses on refactoring code which someone else has written. In my approach I focused on making the code more object oriented by splitting all the main logic into seperate classes which represent all the different item types. I also used the TDD process by first writing tests based on the project requirements and then moving on to writing the source code. 

### Quickstart 
1. Fork this repository
2. `git clone git@github.com:paulinakoz/GildedRose-Refactoring-Kata.git`
3. `cd GildedRose-Refactoring-Kata`
4. `npm install` to install project dependencies

### Running tests
```sh
npm test 
# or
npx jasmine
```

### Requirements
1. All items have a SellIn value which denotes the number of days we have to sell the item
2. All items have a Quality value which denotes how valuable the item is
3. At the end of each day our system lowers both values for every item
4. The Quality of an item is never negative
5. The Quality of an item is never more than 50 (except Sulfuras)
