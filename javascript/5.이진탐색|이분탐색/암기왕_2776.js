// solved
const fs = require('fs');
[t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
t = parseInt(t);
let index = 0;
let result = [];
while(t > 0){
    t--;
    let n = parseInt(input[index]);
    let nlist = input[index+1].split(' ').map(x=>+x).sort((a, b)=>a-b);
    let mlist = input[index+3].split(' ').map(x=>+x);
    for(let i = 0; i < mlist.length; i++){
        let left = 0; right = n-1;
        let found;
        while(left <= right){
            const mid = parseInt((left+right) / 2);
            if(nlist[mid] === mlist[i]){found = 1; break;}
            if(nlist[mid] > mlist[i]) right = mid -1;
            if(nlist[mid] < mlist[i]) left = mid + 1;
        }
        if(found) result.push(1);
        else result.push(0);
    }
    index += 4;
}
console.log(result.join('\n'));