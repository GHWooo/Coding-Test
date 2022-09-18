// solved
const fs = require('fs');
[n, requests, budget] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n); budget = parseInt(budget);
requests = requests.split(' ').map(Number).sort((a, b)=>a-b);
let left = 1;
let right = requests[n - 1];
while(left <= right){
    const mid = parseInt((left+right)/2);
    let sum = 0;
    for(r of requests){
        if(r < mid) sum += r;
        else sum += mid;
    }
    if(budget >= sum) left = mid+1;
    else if(budget < sum) right = mid-1;
}
console.log(right);