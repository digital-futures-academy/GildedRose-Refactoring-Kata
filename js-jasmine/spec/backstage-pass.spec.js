const BackstagePass = require("../src/backstage-pass");

class ItemDouble {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

describe("Checking the requirements of backstage pass:\n", function() {

    it("should increase the quality by 1", function() {
        let itemDouble = new ItemDouble('Backstage',12,48)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.update()
  
      expect(item[0].quality).toEqual(49);
    });

    it("should keep the quality at 50", function() {
        let itemDouble = new ItemDouble('Backstage',12,50)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.update() 
  
      expect(item[0].quality).toEqual(50);
    });

    it("should increase the quality by 2", function() {
        let itemDouble = new ItemDouble('Backstage',9,46)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.update()
  
      expect(item[0].quality).toEqual(48);
    });

    it("should keep the quality at 50", function() {
        let itemDouble = new ItemDouble('Backstage',8,50)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.update() 
  
      expect(item[0].quality).toEqual(50);
    });

    it("should increase the quality by 3", function() {
        let itemDouble = new ItemDouble('Backstage',5,30)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.update()
  
      expect(item[0].quality).toEqual(33);
    });

    it("should keep the quality at 50", function() {
        let itemDouble = new ItemDouble('Backstage',3,50)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.update() 
  
      expect(item[0].quality).toEqual(50);
    });

    it("Quality should be 0", function() {
        let itemDouble = new ItemDouble('Backstage',0,48)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.update()
  
      expect(item[0].quality).toEqual(0);
    });

    it("sell in should decrease by 1", function() {
        let itemDouble = new ItemDouble('Backstage',12,50)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.update() 
  
      expect(item[0].sellIn).toEqual(11);
    });

    it("should never start with a quality more than 50", function() {
        let itemDouble = new ItemDouble('Backstage',2,55)
        const backstagePass = new BackstagePass(itemDouble)
        let item = backstagePass.update()  
  
      expect(item[0].quality).toEqual(50);
    });
  
    it("should never start with a negative quality", function() {
      let itemDouble = new ItemDouble('Backstage',2,-3)
      const backstagePass = new BackstagePass(itemDouble)
      let item = backstagePass.update()  
  
    expect(item[0].quality).toEqual(1);
    });

});