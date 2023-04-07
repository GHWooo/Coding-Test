// solved
const fs = require('fs');
[n, nList, m, mList] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
nList = nList.split(' ').map(Number).sort((a, b)=>a-b);
mList = mList.split(' ').map(Number);
let result = [];

for(m of mList){
    let left = 0, right = nList.length;
    let state = 0;
    while(1){
        let mid = parseInt((left+right)/2);
        if(nList[mid] === m){ state = 1; break;} 
        if(nList[mid] < m){
            if(left === mid){
                if(nList[mid+1] === m) state = 1;
                break;
            }
            left = mid;
        }
        if(nList[mid] > m){
            if(right === mid){
                if(nList[mid-1] === m) state = 1;
                break;
            }
            right = mid;
        }
    }
    result.push(state);
}
console.log(result.join('\n'));