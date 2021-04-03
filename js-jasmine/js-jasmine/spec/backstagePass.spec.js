const BackstagePass=require('./../src/backstagePass')

let item, backstagePass

describe('Check functionality of RegularItem class', function(){
        it('Check increase of quality value', function(){
            //SETUP
            item = {name:'Backstage Pass', sellIn: 11, quality: 10}
            backstagePass=new BackstagePass(item)

            //EXECUTE

            //VERIFY
            expect(backstagePass.valueChange()).toBe(11)
        })
        it('Check decrease twice as quickly with ten days to sell', function(){
            //SETUP
            item = {name:'Backstage Pass', sellIn: 10, quality: 10}
            backstagePass=new BackstagePass(item)

            //EXECUTE

            //VERIFY
            expect(backstagePass.valueChange()).toBe(12)
        })
        it('Check decrease three times as quickly with five days to sell', function(){
            //SETUP
            item = {name:'Backstage Pass', sellIn: 5, quality: 10}
            backstagePass=new BackstagePass(item)

            //EXECUTE

            //VERIFY
            expect(backstagePass.valueChange()).toBe(13)
        })
        it('Check quality drops to zero on day of concert', function(){
            //SETUP
            item = {name:'Backstage Pass', sellIn: 0, quality: 10}
            backstagePass=new BackstagePass(item)

            //EXECUTE

            //VERIFY
            expect(backstagePass.valueChange()).toBe(0)
        })

})