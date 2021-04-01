const Item = require ('../src/item.js')
const AgedBrie= require ('../src/agedbrie.js')

describe('Tests for Aged Brie Class',function(){
    it('Checks if its quality increases as days go by ',function(){
       item =  new Item("Aged Brie", 5, 8)
       agedbrie = new AgedBrie(item)
       updated_aged_brie =agedbrie.update()
       updated_aged_brie =agedbrie.update()
       result = updated_aged_brie
      expect(result.quality).toEqual(10)
    })
      it('Checks if its quality is not more than 50', function(){
      item = new Item("Aged Brie", 5, 49)
      agedbrie = new AgedBrie(item)
      updated_aged_brie =agedbrie.update()
       updated_aged_brie =agedbrie.update()
       result = updated_aged_brie
      expect(result.quality).toEqual(50)

  })

})