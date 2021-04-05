const Shop=require('./../src/shop')

describe('Check functionality of Shop class', function(){
        it('Check all items in basket update correctly', function(){
            //SETUP
            let shop=new Shop()

            //EXECUTE
            shop.addItem({name:'Cuppa Tea', sellIn: 5, quality: 3})
            shop.addItem({name:'Aged Brie', sellIn: 5, quality: 3})
            shop.addItem({name:'Backstage Pass', sellIn: 5, quality: 3})
            shop.addItem({name:'Sulfuras', sellIn: 80, quality: 80})

            shop.update()

            //VERIFY
            expect(shop.items[0].quality).toBe(2)
            expect(shop.items[1].quality).toBe(4)
            expect(shop.items[2].quality).toBe(6)
            expect(shop.items[3].quality).toBe(80)
        })
})