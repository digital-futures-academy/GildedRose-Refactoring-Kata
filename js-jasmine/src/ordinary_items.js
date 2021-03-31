class Ordinary {
  constructor (items = []) {
    this.items = items
  }

  update () {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name.includes('Ordinary')) {
        this.items[i].sellIn -= 1
        if (this.items[i].quality > 0) {
          this.items[i].quality -= 1
        }
        if (this.items[i].sellIn <= 0 && this.items[i].quality > 0) {
          this.items[i].quality -= 1
        }
      }
    }
    return this.items
  }
}
module.exports = Ordinary
