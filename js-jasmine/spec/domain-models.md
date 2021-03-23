## Requirements to domain models

- All items have a SellIn value which denotes the number of days we have to sell the item
- All items have a Quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item
- The Quality of an item is never negative 
- The Quality of an item is never more than 50 

### User story 1
```
As an inkeeper
So that I can keep my products fresh
I want to keep track of my products quality and sell by day
```

| Objects| Properties| Messages| Context| Output|
| ------ | --------- | ------- | ------ | ----- |
| Item | Int | get quality()| Return quality value| Int|
|  | Int | get sellIn()| Return number of days left to sell| Int |
| Shop  | Int | lowerValues(quality, sellIn)| At the end of the day lower both values| Int|

### User story 2
```
As an inkeeper 
So that I can sell my products in time
I want to know when the sell by date has passed, because quality will degrade twice as fast
```
| Objects| Properties| Messages| Context| Output|
| ------ | --------- | ------- | ------ | ----- |
| Shop | Int | lowerValues(quality, sellIn)| If sellIn < 0, quality -= 1| Int |

### User story 3
```
As an inkeeper
I know that Brie tastes better the older it is
So I want to increase the quality of "Aged Brie" the older it gets
```
| Objects| Properties| Messages| Context| Output|
| ------ | --------- | ------- | ------ | ----- |
| Shop | | increaseQuality(quality)| | Int | 

### User story 4
```
As an inkeeper
I know that "Sulfuras" is a legendary item and it never has to be sold or decreases in Quality
So I want to create an exception
```
| Objects| Properties| Messages| Context| Output|
| ------ | --------- | ------- | ------ | ----- |
| Shop | Boolean | exception()| | True/false|

