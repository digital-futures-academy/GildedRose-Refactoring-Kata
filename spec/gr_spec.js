const { Shop, Item } = require('../src/gilded_rose.js')
const ItemValidity = require('../src/itemValidity.js')
const NormalItem = require('../src/normalItem.js')
const UpdateSpecialtyItem = require('../src/specialtyItem.js')

it('check if normal item degrades as expected', function () {
  const gildedRose = new Shop([new Item('Cheese', 10, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // degrades by 1
  const updateDayThree = gildedRose.updateQuality() // degrades by 1
  expect(updateDayThree[0].quality).toEqual(8) // 10 -1 -1 = 8
})

it('check if normal item degrades twice as fast after sell by date passes', function () {
  const gildedRose = new Shop([new Item('Cheese', 1, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // degrades by 1
  const updateDayThree = gildedRose.updateQuality() // degrades by 2
  const updateDayFour = gildedRose.updateQuality() // degrades by 2
  expect(updateDayFour[0].quality).toEqual(5) // 10 -1 -2 -2 = 5
})

it("check that normal items can't have a negative quality", function () {
  const gildedRose = new Shop([new Item('Cheese', 10, -1)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality()
  expect(updateDayTwo[0].quality).toEqual('Cannot be negative')
})

it("check that normal items don't degrade to a negative quality", function () {
  const gildedRose = new Shop([new Item('Cheese', 10, 1)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // degrades by 1
  const updateDayThree = gildedRose.updateQuality() // doesn't degrade below 0
  const updateDayFour = gildedRose.updateQuality() // doesn't degrade below 0
  expect(updateDayFour[0].quality).toEqual(0)
})

it("check that specialty items can't have a negative quality", function () {
  const gildedRose = new Shop([new Item('Aged Brie', 10, -1)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality()
  expect(updateDayTwo[0].quality).toEqual('Cannot be negative')
})

it("check that specialty items don't degrade to a negative quality", function () {
  const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 3)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // increases by 3
  const updateDayThree = gildedRose.updateQuality() // drops to 0
  const updateDayFour = gildedRose.updateQuality() // doesn't degrade below 0
  expect(updateDayFour[0].quality).toEqual(0)
})

it("check that normal items can't have a quality over 50", function () {
  const gildedRose = new Shop([new Item('Cheese', 10, 60)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality()
  expect(updateDayTwo[0].quality).toEqual('Quality cannot be over 50')
})

it("check that specialty items can't have a quality over 50", function () {
  const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 60)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality()
  expect(updateDayTwo[0].quality).toEqual('Quality cannot be over 50')
})

it("check that specialty items can't increase in quality over 50", function () {
  const gildedRose = new Shop([new Item('Aged Brie', 10, 49)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // increases by 1
  const updateDayThree = gildedRose.updateQuality() // doesn't increase above 50
  const updateDayFour = gildedRose.updateQuality() // doesn't increase above 50
  expect(updateDayFour[0].quality).toEqual(50)
})

it("check that specialty items can't increase in quality over 50 #2", function () {
  const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 48)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // increases by 2
  const updateDayThree = gildedRose.updateQuality() // doesn't increase above 50
  const updateDayFour = gildedRose.updateQuality() // doesn't increase above 50
  expect(updateDayFour[0].quality).toEqual(50)
})

it('check that Sulfuras always has a quality of 80', function () {
  const gildedRose = new Shop([new Item('Sulfuras', 10, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality()
  expect(updateDayTwo[0].quality).toEqual('Sulfuras can only have a Quality of 80')
})

it("check that Sulfuras doesn't degrade", function () {
  const gildedRose = new Shop([new Item('Sulfuras', 10, 80)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality()
  const updateDayThree = gildedRose.updateQuality() // doesn't degrade
  const updateDayFour = gildedRose.updateQuality() // doesn't degrade
  expect(updateDayFour[0].quality).toEqual(80)
})

it('check that Aged Brie increases in quality', function () {
  const gildedRose = new Shop([new Item('Aged Brie', 10, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // increases by 1
  const updateDayThree = gildedRose.updateQuality() // increases by 1
  const updateDayFour = gildedRose.updateQuality() // increases by 1
  expect(updateDayFour[0].quality).toEqual(13)
})

it('check that Backstage Passes increase in quality by +1 >10 days before the concert', function () {
  const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // increases by 1
  const updateDayThree = gildedRose.updateQuality() // increases by 1
  const updateDayFour = gildedRose.updateQuality() // increases by 1
  expect(updateDayFour[0].quality).toEqual(13)
})

it('check that Backstage Passes increase in quality by +2 from 10 to 6 days before the concert', function () {
  const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // increases by 2
  const updateDayThree = gildedRose.updateQuality() // increases by 2
  const updateDayFour = gildedRose.updateQuality() // increases by 2
  expect(updateDayFour[0].quality).toEqual(16)
})

it('check that Backstage Passes increase in quality by +3 <5 days before the concert', function () {
  const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // increases by 3
  const updateDayThree = gildedRose.updateQuality() // increases by 3
  const updateDayFour = gildedRose.updateQuality() // increases by 3
  expect(updateDayFour[0].quality).toEqual(19)
})

it('check that Backstage Passes quality drops to 0 after a concert', function () {
  const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // increases by 3
  const updateDayThree = gildedRose.updateQuality() // increases by 3
  const updateDayFour = gildedRose.updateQuality() // drops to 0
  expect(updateDayFour[0].quality).toEqual(0)
})

it('check if item past sell by date degrades twice as quickly ', function () {
  const gildedRose = new Shop([new Item('Cheese', 1, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // degrades by 1
  const updateDayThree = gildedRose.updateQuality() // degrades by 2
  const updateDayFour = gildedRose.updateQuality() // degrades by 2
  expect(updateDayFour[0].quality).toEqual(5) // 10 -1 -2 -2 = 5
})

it('check if conjured item degrades twice as quickly', function () {
  const gildedRose = new Shop([new Item('Conjured Cheese', 10, 10)], ItemValidity, NormalItem, UpdateSpecialtyItem)
  const updateDayTwo = gildedRose.updateQuality() // degrades by 2
  const updateDayThree = gildedRose.updateQuality() // degrades by 2
  const updateDayFour = gildedRose.updateQuality() // degrades by 2
  expect(updateDayThree[0].quality).toEqual(4) // 10 -2 -2 -2 = 4
})
