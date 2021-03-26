class Shop {
  

}

module.exports = Shop;

//   updateQuality() {
//     for (var i = 0; i < this.items.length; i++) {
//       //Loops through array of items in the shop
//       if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//         //If the current item name is not Aged Brie and is not Backstage passes to a TAFKAL80ETC concert
//         if (this.items[i].quality > 0) {
//           //And if the quality of the item is more than zero (quality is never negative)
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             //And if the items name is not Sulfuras, Hand of Ragnaros
//             this.items[i].quality -= 1;
//             //Then take away one from items quality 
//           }
//         }
//       } else {
//         if (this.items[i].quality < 50) {
//           //If the quality is less than 50 
//           this.items[i].quality += 1;
//           //Then increase the quality of the item by 1
//           if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//           //Else if the items name is Backstage passes to a TAFKAL80ETC concert
//             if (this.items[i].sellIn < 11) {
//             //And the items sellin value is less than 11
//               if (this.items[i].quality < 50) {
//               //And the items quality is less than 50? - already checked this
//                 this.items[i].quality += 1;
//                 // Then increase the quality of the item by 1
//               }
//             } 
//             if (this.items[i].sellIn < 6) {
//               //Else if the sellin value is less than 6
//               if (this.items[i].quality < 50) {
//                 //and the quality is less than 50 
//                 this.items[i].quality += 1;
//                 //Then increase the quality of the item by 1
//               }
//             }
//           }
//         }
//       }
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         //If the item is not 'Sulfuras, Hand of Ragnaros'
//         this.items[i].sellIn -= 1;
//         //Then decrease the sellIn value by 1
//       }
//       if (this.items[i].sellIn < 0) {
//         //If the sellIn value is less than 0 
//         if (this.items[i].name != 'Aged Brie') {
//           //And the item is not Aged Brie
//           if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//             //And the item is not 'Backstage passes to a TAFKAL80ETC concert'
//             if (this.items[i].quality > 0) {
//               //And if the quality of the item is more than 0 
//               if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//                 //And if the item is not 'Sulfuras, Hand of Ragnaros'
//                 this.items[i].quality -= 1;
//                 //Then decrease the quality of the item by 1
//               }
//             }
//           } else {
//             //The item is 'Backstage passes to a TAFKAL80ETC concert'
//             this.items[i].quality = 0;
//             //Take away items quality from its quality - quality equals zero after the concert
//           }
//         } else {
//           //The item is Aged Brie
//           if (this.items[i].quality < 50) {
//             //If its quality is less than 50 
//             this.items[i].quality += 1;
//             //Add one to the quality value
//           }
//         }
//       }
//     }

//     return this.items;
//   }

