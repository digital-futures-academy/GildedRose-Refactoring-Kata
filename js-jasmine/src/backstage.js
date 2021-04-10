class BackstagePass {
	constructor(item){
		this.item = item;
	}
	updateQuality(){
		if (this.item.quality <= 50 && this.item.quality > 0) {
			if (this.item.sellIn <= 0){
				this.item.quality = 0;
			} else if (this.item.sellIn <= 5){
				this.item.quality += 3;
			} else if (this.item.sellIn <= 10){
				this.item.quality += 2;
			} else {
				this.item.quality++;
			}
		}
		if (this.item.quality < 0) {this.item.quality = 0;}
		if (this.item.quality > 50) {this.item.quality = 50;}
		this.item.sellIn--;
		return this.item;
	}
}

module.exports = BackstagePass;
