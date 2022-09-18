// solved
const fs = require('fs');
[nm, lectures] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(x=>+x);
lectures = lectures.split(' ').map(x=>+x);
let left = 0;
let right = lectures.reduce((a, b)=>a + b, 0);
let answer = Infinity;
while(left <= right){
    const mid = Math.floor((left+right)/2);
    let sum = 0;
    let count = 1;
    for(l of lectures){
        if(l > mid){
            count = Infinity; break;
        } 
        if(sum + l <= mid) sum += l;
        else{
            count++;
            sum = l;
        }
    }
    if(count > m) left = mid + 1;
    else{
        right  = mid - 1;
        answer = Math.min(answer, mid);
    }
}
console.log(answer);