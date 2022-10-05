//solved
const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>{
    if(x.includes(' ')) return x.split(' ');
    return x;
});

class Deck{
    constructor(){
        this.deck = [];
        this.result = [];
    }
    push_front(num){
        this.deck.unshift(num);
    }
    push_back(num){
        this.deck.push(num);
    }
    pop_front(){
        let temp;
        this.deck.length > 0?temp = this.deck.shift():temp = -1;
        this.result.push(temp);
    }
    pop_back(){
        let temp;
        this.deck.length > 0?temp = this.deck.pop():temp = -1;
        this.result.push(temp);
    }
    size(){
        this.result.push(this.deck.length);
    }
    empty(){
        this.deck.length > 0?this.result.push(0):this.result.push(1);
    }
    front(){
        this.deck.length > 0?this.result.push(this.deck[0]):this.result.push(-1);
    }
    back(){
        this.deck.length > 0?this.result.push(this.deck[this.deck.length-1]):this.result.push(-1);
    }
}
let deckFunc = new Deck();

for(com of input){
    if(com[0] === 'push_front') deckFunc.push_front(parseInt(com[1]));
    if(com[0] === 'push_back') deckFunc.push_back(parseInt(com[1]));
    if(com === 'pop_front') deckFunc.pop_front();
    if(com === 'pop_back') deckFunc.pop_back();
    if(com === 'size') deckFunc.size();
    if(com === 'empty') deckFunc.empty();
    if(com === 'front') deckFunc.front();
    if(com === 'back') deckFunc.back();
}
console.log(deckFunc.result.join('\n'));