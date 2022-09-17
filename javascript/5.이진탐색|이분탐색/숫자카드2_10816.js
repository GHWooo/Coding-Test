// solved
const fs = require('fs');
[n, nList, m, mList] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
nList = nList.split(' ').map(Number).sort((a, b)=>a-b);
let positive = [];
let negative = [];
nList.map(x=>{
    if(x > -1) positive[x]?positive[x]++:positive[x]=1;
    else negative[-x]?negative[-x]++:negative[-x]=1;
})
mList = mList.split(' ').map(Number);
let result = [];
for(i of mList){
    let left = 0, right = nList.length-1;
    let end;
    while(left <= right){
        const mid = parseInt((left+right)/2);
        if(nList[mid] === i){
            result.push(i > -1?positive[i]:negative[-i]);
            end = 1;
            break;
        }
        if(nList[mid] < i) left = mid+1;
        if(nList[mid] > i) right = mid-1;
    }
    if(!end) result.push(0);
}
console.log(result.join(' '));