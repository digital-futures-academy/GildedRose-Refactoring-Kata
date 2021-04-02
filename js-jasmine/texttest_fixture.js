const Shop = require("./src/shop");
const Item = require('./src/item');
const updateDict = require('./src/updateDict').updateDict;

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 1, 0),
  new Item("Elixir of the Mongoose", 5, 1),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 39),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 45),
  new Item("Conjured Mana Cake", 1, 9),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(updateDict, items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
