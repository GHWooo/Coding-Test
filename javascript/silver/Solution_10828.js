//solved
const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>{
    if(x.length > 5) return x.split(' ');
    return x;
});

class Stack{
    constructor(){
        this.stack = [];
        this.result = [];
    }
    push(num){
        this.stack.push(num);
    }
    pop(){
        let temp;
        this.stack.length > 0?temp = this.stack.pop():temp = -1;
        this.result.push(temp);
    }
    size(){
        this.result.push(this.stack.length);
    }
    empty(){
        this.stack.length > 0?this.result.push(0):this.result.push(1);
    }
    top(){
        this.stack.length > 0?this.result.push(this.stack[this.stack.length-1]):this.result.push(-1);
    }
}
let stackFun = new Stack();

for(com of input){
    if(com[0] === 'push') stackFun.push(parseInt(com[1]));
    if(com === 'pop') stackFun.pop();
    if(com === 'size') stackFun.size();
    if(com === 'empty') stackFun.empty();
    if(com === 'top') stackFun.top();
}
console.log(stackFun.result.join('\n'));