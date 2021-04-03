const RegularItem=require('./../src/regularItem')

let item, regularItem

describe('Check functionality of RegularItem class', function(){
        it('Check decrease of quality value', function(){
            //SETUP
            item = {name:'Cuppa Tea', sellIn: 5, quality: 3}
            regularItem=new RegularItem(item)

            //EXECUTE

            //VERIFY
            expect(regularItem.valueChange()).toBe(2)
        })
        it('Check decrease twice as quickly when past past sell by date', function(){
            //SETUP
            item = {name:'Cuppa Tea', sellIn: -1, quality: 3}
            regularItem=new RegularItem(item)

            //EXECUTE

            //VERIFY
            expect(regularItem.valueChange()).toBe(1)
        })
})