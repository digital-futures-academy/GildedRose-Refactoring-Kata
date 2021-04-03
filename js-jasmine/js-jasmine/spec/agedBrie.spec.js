const AgedBrie=require('./../src/agedBrie')

let item, agedBrie

describe('Check functionality of AgedBrie class', function(){
        it('Check increase of quality value', function(){
            //SETUP
            item = {name:'Aged Brie', sellIn: 5, quality: 3}
            agedBrie=new AgedBrie(item)

            //EXECUTE

            //VERIFY
            expect(agedBrie.valueChange()).toBe(4)
        })
})