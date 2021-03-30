const Shop  = require("../src/shop");
const ChangeQuality  = require("../src/changeQuality")

let item, item2, shop

describe('Check functionality of Shop class', function(){
    describe("Check functionality of regular item", function() {
          it("Check regular item quality value decreases at double the rate when 'sellIn' value is below zero.", function() {
                 //SETUP
                 item = {name:'Cuppa Tea', sellIn: -1, quality: 3}
                 shop = new Shop(ChangeQuality)

                 //EXECUTE

                 //VERIFY
                 expect(shop.updateQualitySingleItem(item)).toBe(1)
          });
    });
    describe("Check functionality of special item, Aged Brie", function() {
        it("Check Aged Brie increases in value", function() {
             //SETUP
             item = {name:'Aged Brie', sellIn: 5, quality: 3}
             shop = new Shop(ChangeQuality)

             //EXECUTE

             //VERIFY
             expect(shop.updateQualitySingleItem(item)).toBe(4)
       });
    })
    describe("Check functionality of special item, Backstage Pass", function() {
        it("Check Backstage Pass increases at double rate with 10 days left to sell", function() {
             //SETUP
             item = {name:'Backstage Pass', sellIn: 10, quality: 3}
             shop = new Shop(ChangeQuality)

             //EXECUTE
             shop.updateQualitySingleItem(item)

             //VERIFY
             expect(item.quality).toBe(5)
       });
       it("Check Backstage passes quality value increases at triple rate with 10 days left to sell", function() {
             //SETUP
             item = {name:'Backstage Pass', sellIn: 5, quality: 3}
             shop = new Shop(ChangeQuality)

             //EXECUTE

             //VERIFY
             expect(shop.updateQualitySingleItem(item)).toBe(6)
       });
       it("Check Backstage passes quality value drops to 0 with 0 days left to sell", function() {
             //SETUP
             item = {name:'Backstage Pass', sellIn: 0, quality: 3}
             shop = new Shop(ChangeQuality)

             //EXECUTE
             shop.updateQualitySingleItem(item)

             //VERIFY
             expect(shop.updateQualitySingleItem(item)).toBe(0)
       });
    })
    describe("Check functionality of special item, Sulfuras", function() {
        it("Check Sulfuras quality value doesn't change", function() {
             //SETUP
             item = {name:'Sulfuras', sellIn: 7, quality: 80}
             shop = new Shop(ChangeQuality)

             //EXECUTE
             shop.updateQualitySingleItem(item)

             //VERIFY
             expect(item.quality).toBe(80)
       });
       it("Check That no other item can have a quality above or below the maximum value", function() {
             //SETUP
             item = {name:'Cuppa Tea', sellIn: 7, quality: 80}
             shop = new Shop(ChangeQuality)

             //EXECUTE

             //VERIFY
             expect(()=>shop.updateQualitySingleItem(item)).toThrow(new Error('Item quality value is out of bounds'))
       })
   })
   describe("Check functionality of function which updates quality of all items in the basket.", function() {
        it("Check multiple items updated", function() {
             //SETUP
             item = {name:'Cuppa Tea', sellIn: 7, quality: 20}
             item2 = {name:'Orange juice', sellIn: 6, quality: 40}
             shop = new Shop(ChangeQuality, [item, item2])

             //EXECUTE
             let update=shop.updateQualityAllItems()

             //VERIFY
             expect(update[0].quality).toBe(19)
             expect(update[1].quality).toBe(39)
       })
   })
})