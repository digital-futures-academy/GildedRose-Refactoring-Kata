## Requirements to domain models

- All items have a SellIn value which denotes the number of days we have to sell the item
- All items have a Quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

### User story 1
```
As an inkeeper
So that I can keep my products fresh
I want to keep track of my products quality and sell by day
```

| Objects| Properties| Messages| Context| Output|
| ------ | --------- | ------- | ------ | ----- |
| Item | Int | get quality()| Return quality value| Int|
|  | Int | | Quality is never negative | String |
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

