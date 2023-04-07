// solved
const fs = require('fs');
[n, a] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n);
a = a.split(' ').map(x=>+x);

let index = 1;
let result = [1];
while(index < n){
    let max = 0;
    for(let i = 0; i < index; i++){
        if(a[i] < a[index] && max < result[i]){
            max = result[i]
        }
    }
    result[index] = max+1;
    index++;
}
console.log(Math.max(...result));