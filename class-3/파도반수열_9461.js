const fs = require('fs');
[t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let p = [1, 1, 1, 2, 2];
let index = 5;
let result = [];
for(num of input){
    if(num - 1 < index) result.push(p[num - 1]);
    else{
        for(let i = index; i < num; i++){
            p[i] = p[i - 1] + p[i - 5];
        }
        result.push(p[num - 1]);
    }
}
console.log(result.join('\n'));