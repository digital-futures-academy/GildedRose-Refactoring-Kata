const ChangeQuality=require('./../src/changeQuality.js')

let item
let changeQuality=new ChangeQuality()

describe('Check functionality of ChangeQuality class', function(){
    describe('Check increase of quality value', function(){
        it('Check increase below a maximum quality value', function(){
            //SETUP
            item = {name:'Cuppa Tea', sellIn: 5, quality: 3}

            //EXECUTE

            //VERIFY
            expect(changeQuality.valueIncrease(item)).toBe(4)

        })
        it('Check quality cannot increase above a maximum value', function(){
            //SETUP
            item = {name:'Cuppa Tea', sellIn: 5, quality: 50}

            //EXECUTE

            //VERIFY
            expect(changeQuality.valueIncrease(item)).toBe(50)

        })
    })
     describe('Check decrease of quality value', function(){
        it('Check decrease above a minimum quality value', function(){
            //SETUP
            item = {name:'Cuppa Tea', sellIn: 5, quality: 3}

            //EXECUTE

            //VERIFY
            expect(changeQuality.valueDecrease(item)).toBe(2)

        })
        it('Check quality cannot decrease below a minimum value', function(){
            //SETUP
            item = {name:'Cuppa Tea', sellIn: 5, quality: 0}

            //EXECUTE

            //VERIFY
            expect(changeQuality.valueDecrease(item)).toBe(0)

        })
    })
})