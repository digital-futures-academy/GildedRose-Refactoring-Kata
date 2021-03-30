const Sulfuras = require('../src/sulfuras.js')
const Shop = require('../src/gilded_rose.js')

describe("Testing the sulfuras class", () => {
    it("Sulfuras quality always stays at 80", () => {
      let item = [new Sulfuras(9, 10)]
      const gildedRose = new Shop(item);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(80);
    })

    it("Sulfuras SellIn remains the same", () => {
        let item = [new Sulfuras(9, 10)]
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(9);
    })

  })