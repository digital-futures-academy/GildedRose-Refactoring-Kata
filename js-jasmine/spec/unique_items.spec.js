const Unique = require('../src/unique_items.js')
const Item = require('../src/item.js')

describe ('Removes items which are not unique', function(){
  it('Checks the length of the array', function(){
  let unique_inventory = new Unique([new Item('bike', 5, 10)])
  let result = unique_inventory.checkItems() 
  expect(result).toEqual(0)
  })
   it('Checks the length of the array - 2', function(){
  let item = new Item([new Item('bike', 5, 10)])
  let item2 = new Item([new Item('Sulfuras, Hand of Ragnaros', 5, 60)])
  unique_inventory = new Unique([item, item2])
  let result = unique_inventory.checkItems() 
  expect(result).toEqual(1)
  })
  
})

describe('Updating Aged Brie', function(){
     it('Checks if its quality increases as days go by', function(){
      item =  new Item("Aged Brie", 5, 8)
      unique_inventory = new Unique([item])
      updated_item = unique_inventory.updateAgedBrie();
      updated_item = unique_inventory.updateAgedBrie();
      expect(updated_item[0].quality).toEqual(10)

  })
    it('Checks if its quality is not more than 50', function(){
      item = new Item("Aged Brie", 5, 49)
      unique_inventory = new Unique([item])
      updated_item = unique_inventory.updateAgedBrie();
      updated_item = unique_inventory.updateAgedBrie();
      expect(updated_item[0].quality).toEqual(50)

  })
})

describe('Testing Sulfuras', function(){
  it("Testing if Sulfuras' quality changes", function(){
      item = new Item ("Sulfuras, Hand of Ragnaros", 5, 80)
      unique_inventory = new Unique([item])
       updated_item = unique_inventory.updateSulfuras()
        expect(updated_item[0].quality).toEqual(80)
  })
    it("Testing if Sulfuras' sellin date changes", function(){
    item = new Item ("Sulfuras, Hand of Ragnaros", 5, 80)
    unique_inventory = new Unique([item])
    updated_item = unique_inventory.updateSulfuras()
    expect(updated_item[0].sellIn).toEqual(5)
  })
})


describe('Testing Backstage Passes', function(){
  it('Checks if its quality increases as sellIn date apporaches', function(){
        item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 45)
        unique_inventory = new Unique([item])
        updated_item = unique_inventory.updatePasses();
        updated_item = unique_inventory.updatePasses();
        expect(updated_item[0].quality).toEqual(47)
  })
    it('Checks if its quality doubles when there are 10 or less days until the concert', function(){
         item = new Item("Backstage passes to a TAFKAL80ETC concert", 9, 40)
        unique_inventory = new Unique([item])
        updated_item = unique_inventory.updatePasses();
        updated_item = unique_inventory.updatePasses();
        expect(updated_item[0].quality).toEqual(44)
  })
      it('Checks if its quality triples when there are 5 or less days until the concert', function(){
        item = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 40)
        unique_inventory = new Unique([item])
        updated_item = unique_inventory.updatePasses();
        updated_item = unique_inventory.updatePasses();
        expect(updated_item[0].quality).toEqual(46)
  })
        it('Checks if its quality drops to 0 after the concert', function(){
        item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)
        unique_inventory = new Unique([item])
        updated_item = unique_inventory.updatePasses();
        updated_item = unique_inventory.updatePasses();
        expect(updated_item[0].quality).toEqual(0)
  })
})


