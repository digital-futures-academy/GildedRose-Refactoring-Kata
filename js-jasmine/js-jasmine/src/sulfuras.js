const CheckValid=require('./checkValid.js')

class Sulfuras{
    constructor(item, checkValid=new CheckValid()){
        this.checkValid=checkValid
        this.item=item
    }
    valueChange(){
        if (this.checkValid.check(this.item, 80, 80)){}
    }
}

module.exports=Sulfuras