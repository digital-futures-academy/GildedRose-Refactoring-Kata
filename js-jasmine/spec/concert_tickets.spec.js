const concertTickets = require('../src/concert_tickets.js')
const Shop = require('../src/gilded_rose.js')


describe("Testing the concert tickets class", () => {
    it("Checking that tickets quality goes to 0 when SellIn equals 0", () => {
        let item = [new Tickets(0, 50)]
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(0);
    })

    it("Checking that tickets quality increases by 2 when sellIn is less than 11 days", () => {
        let item = [new Tickets(7, 48)]
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(50);
    })

    it("Checking that tickets quality increases by 3 when sellIn is less than 6 days", () => {
        let item = [new Tickets(5, 30)]
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(33);
    })

    it("Checking tickets quality increases by 1 if sellIn is greater or equal to 11 days", () => {
        let item = [new Tickets(11, 30)]
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(31);
    })

    it("Checking ticket quality does not decrease if quality is 50 and sellIn is more than zero", () => {
        let item = [new Tickets(1, 50)]
        const gildedRose = new Shop(item);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(50);
    })

    it("tickets quality does not change when quality >= 50", () => {
      var item = [new Tickets(50, 50)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].quality).toEqual(50);
    })

    test("tickets sellIn decreases by 1 regardless of quality", () => {
      var item = [new Tickets(9, 90)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].sellIn).toEqual(8);
    })
    
  })