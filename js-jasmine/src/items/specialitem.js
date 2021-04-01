const agedBrie = require('./agedBrie');
const concertTickets = require('./concertTickets');
const Conjured = require('./conjured');
const Hand = require('./hand');

class specialItem{
    constructor(agedbrie = new agedBrie(), concerttickets = new concertTickets(), conjured = new Conjured(), hand = new Hand()){
        this.agedbrie = agedbrie
        this.concerttickets = concerttickets;
        this.conjured = conjured;
        this.hand = hand;
    }
    check(item){
        if(item.name === 'Aged Brie'){
            return this.agedbrie.update(item);
        }
        else if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
            return this.concerttickets.update(item);
        }
        else if(item.name === 'Conjured'){
            return this.conjured.update(item);
        }
        else{
            return this.hand.update(item);
        }
    }
}

module.exports = specialItem;