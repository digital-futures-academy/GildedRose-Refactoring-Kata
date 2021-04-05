const RegularItem=require('./regularItem')
const BackstagePass=require('./backstagePass')
const Sulfuras=require('./sulfuras')
const AgedBrie=require('./agedBrie')


const dict={'Aged Brie':AgedBrie, 'Sulfuras':Sulfuras, 'Backstage Pass':BackstagePass}


class Shop{
    constructor(items=[]){
        this.items=items
    }

    addItem(input){
        this.items.push(input)
        return this.items
    }

    update(){
        for(let item of this.items){
            if (item.name in dict) {                    // how do i remove this if statement?
                let inst= new dict[item.name](item)
                inst.valueChange()
            } else {
                let inst= new RegularItem(item)
                inst.valueChange()
            }
        }
        return this.items
    }
}

module.exports=Shop

