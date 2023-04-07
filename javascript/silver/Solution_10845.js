//solved
const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>{
    if(x.length > 5) return x.split(' ');
    return x;
});

class Queue{
    constructor(){
        this.queue = [];
        this.result = [];
    }
    push(num){
        this.queue.push(num);
    }
    pop(){
        let temp;
        this.queue.length > 0?temp = this.queue.shift():temp = -1;
        this.result.push(temp);
    }
    size(){
        this.result.push(this.queue.length);
    }
    empty(){
        this.queue.length > 0?this.result.push(0):this.result.push(1);
    }
    front(){
        this.queue.length > 0?this.result.push(this.queue[0]):this.result.push(-1);
    }
    back(){
        this.queue.length > 0?this.result.push(this.queue[this.queue.length-1]):this.result.push(-1);
    }
}
let queueFunc = new Queue();

for(com of input){
    if(com[0] === 'push') queueFunc.push(parseInt(com[1]));
    if(com === 'pop') queueFunc.pop();
    if(com === 'size') queueFunc.size();
    if(com === 'empty') queueFunc.empty();
    if(com === 'front') queueFunc.front();
    if(com === 'back') queueFunc.back();
}
console.log(queueFunc.result.join('\n'));