let brieupdater = require('./brieupdate.js')
let sulfurupdater = require('./sulfurasupdate.js')
let concertupdater = require('./concertupdate.js')
let normalupdater = require('./normalitemupdate.js')

class itemupdater{
    constructor(items=[]){
        this.items = items;
    }
    update(){
        for (var i = 0; i < this.items.length; i++) {
            switch(this.items[i].name){
                case 'Aged Brie':
                    let upb = new brieupdater(this.items[i])
                    upb.updater()
                    break
                case 'Backstage passes to a TAFKAL80ETC concert':
                    let upc = new concertupdater(this.items[i])
                    upc.updater()
                    break
                case 'Sulfuras, Hand of Ragnaros':
                    let ups = new sulfurupdater(this.items[i])
                    ups.updater()
                    break
                default:
                    let up = new normalupdater(this.items[i])
                    up.updater()
                    break
            }
        }
    }

}
module.exports = itemupdater