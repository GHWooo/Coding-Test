// solved
const fs = require('fs'); 
[t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
t = parseInt(t);
input = input.map(x=>x.split(' '));
let index = 0;
let result = [];
while(t > 0){
    t--;
    const n = parseInt(input[index][0]);
    let dress = new Map();
    for(let i = index+1; i <= index + n; i++){
        if(!dress.has(input[i][1])) dress.set(input[i][1], [0, input[i][0]]);
        else dress.get(input[i][1]).push(input[i][0]);
    }
    let multi = 1;
    for([x, xlist] of dress.entries()){
        multi *= xlist.length;
    }
    result.push(multi - 1);
    index += n + 1;
}
console.log(result.join('\n'));