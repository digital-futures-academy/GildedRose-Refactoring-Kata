class Conjured {
  constructor (items = []) {
    this.items = items
  }

  update () {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Conjured') {
        this.items[i].sellIn -= 1
        if (this.items[i].quality > 0) {
          this.items[i].quality -= 2
        }
      }
    }
    return this.items
  }
}
module.exports = Conjured
