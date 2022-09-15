//timeout

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

[n, ...arr] = input;
const N = Number(n.split(' ')[0]);
const K = Number(n.split(' ')[1]);
const gem = [];
const bag = [];

for(let i = 0; i < arr.length; i++){
    if(i < N){
        gem.push(arr[i].split(' ').map((v)=>Number(v)));
    }
    else{
        bag.push(Number(arr[i]));
    }
}

gem.sort(function(a, b){
    return a[0] - b[0];
})
bag.sort(function(a, b){
    return a - b;
})

function Element(price){
    this.price = price;
}
function PriorityQueue(){
    this.array = [];
}
PriorityQueue.prototype.enqueue = function(data){
    let element = new Element(data);
    let added = false;

    for(let i = 0; i < this.array.length; i++){
        if(element.price > this.array[i].price){
            this.array.splice(i, 0, element);
            added = true;
            break;
        }
    }
    if(!added){
        this.array.push(element);
    }
}
PriorityQueue.prototype.dequeue = function(){
    return this.array.shift();
}
PriorityQueue.prototype.front = function(){
    return this.array.length === 0 ? undefined : this.array[0];
}

let pq = new PriorityQueue();
let gem_pointer = 0;
let result = 0;

for(let i = 0; i < K; i++){
    result += bag_check(i);
}

console.log(result);

function bag_check(index){
    let max;

    while(gem_pointer < N && gem[gem_pointer][0] <= bag[index]){
        pq.enqueue(gem[gem_pointer++][1]);
    }
    
    if(pq.array.length === 0){
        return 0;
    }
    else{
        max = pq.front().price;
        pq.dequeue();
    }

    return max;
}