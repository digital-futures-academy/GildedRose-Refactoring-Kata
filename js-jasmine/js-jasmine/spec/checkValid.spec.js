const CheckValid=require('./../src/checkValid.js')

let item
let checkValid=new CheckValid()

describe('Check functionality of CheckValid class', function(){
        it('Check returns true for valid quality value', function(){
            //SETUP
            item = {name:'Cuppa Tea', sellIn: 5, quality: 3}

            //EXECUTE

            //VERIFY
            expect(checkValid.check(item)).toBeTrue()
        })
        it('Check throws error for invalid quality value', function(){
            //SETUP
            item = {name:'Cuppa Tea', sellIn: 5, quality: 51}

            //EXECUTE

            //VERIFY
            expect(()=>checkValid.check(item)).toThrow(new Error('Item quality outside permitted range'))
        })
        it('Check throws error for invalid quality value', function(){
            //SETUP
            item = {name:'Cuppa Tea', sellIn: 5, quality: -1}

            //EXECUTE

            //VERIFY
            expect(()=>checkValid.check(item)).toThrow(new Error('Item quality outside permitted range'))
        })
})