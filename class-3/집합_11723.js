// impossible with js
// memory overflow
const fs = require('fs');
[m, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>{
    if(x.split(' ').length === 1) return [x, 0];
    [a, b] = x.split(' ');
    return [a, parseInt(b)];
});

class Set{
    constructor(){
        this.set = [];
        this.result = [];
    }
    add(x){
        if(!this.set.includes(x)) this.set.push(x);
    }
    remove(x){
        this.set = this.set.map(temp => {
            if(temp !== x) return temp;
        });
    }
    check(x){
        if(this.set.includes(x)) this.result.push(1);
        else this.result.push(0);
    }
    toggle(x){
        let end = false;
        this.set = this.set.map(temp => {
            if(temp !== x) return temp;
            else end = true;
        });
        if(end) return;
        this.set.push(x);
    }
    all(){
        this.set = [];
        for(let i = 1; i <= 20; i++) this.set.push(i);
    }
    empty(){
        this.set = [];
    }
}
const setFunc = new Set();

for([com, num] of input){
    if(com === 'add') setFunc.add(num);
    if(com === 'remove') setFunc.remove(num);
    if(com === 'check') setFunc.check(num);
    if(com === 'toggle') setFunc.toggle(num);
    if(com === 'all') setFunc.all();
    if(com === 'empty') setFunc.empty();
}

console.log(setFunc.result.join('\n'));