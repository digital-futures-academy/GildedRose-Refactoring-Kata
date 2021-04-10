class Sulfuras {
	constructor(item){
		this.item = item;
	}
	updateQuality(){
		this.item.quality = 80;
		return this.item;
	}
}

module.exports = Sulfuras;
