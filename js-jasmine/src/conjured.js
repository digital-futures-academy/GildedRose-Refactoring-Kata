class Conjured{
    constructor(item){
    this.item = item
    }
    
    check() {
        if (this.item.name == 'Conjured' && this.item.quality > 0) {
            this.item.quality--;
          }  
    return this.item
    }

}

module.exports = Conjured;