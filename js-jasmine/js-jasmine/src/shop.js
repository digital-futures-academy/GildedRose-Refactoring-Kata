const RegularItem=require('./regularItem')
const BackstagePass=require('./backstagePass')
const Sulfuras=require('./sulfuras')
const AgedBrie=require('./agedBrie')

const dict={'Aged Brie':AgedBrie, 'Sulfuras':Sulfuras, 'Backstage Pass':BackstagePass}


class Shop{
    constructor(items=[{name:'Cuppa Tea', sellIn: 10, quality: 10}, {name:'Aged Brie', sellIn: 10, quality: 10}, {name:'Backstage Pass', sellIn: 10, quality: 10}, {name:'Sulfuras', sellIn: 80, quality: 80}]){
        this.items=items
    }
    updateQuality(){
        for(let item of this.items){
            if(item.name in dict){
                let inst= new dict[item.name](item)
                inst.valueChange()
            } else{
                let inst= new RegularItem(item)
                inst.valueChange()
            }

        }
        return this.items
}

}

let s=new Shop()
console.log(s.updateQuality())

