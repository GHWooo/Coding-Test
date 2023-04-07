// solved
const fs = require('fs'); 
[nm, nlist, ...mlist] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
nlist = nlist.split(' ').map(Number);
mlist = mlist.map(x=>x.split(' ').map(Number));
let result = [];
let sum = [nlist[0]];
for(let i = 1; i < n; i++){
    sum[i] = nlist[i] + sum[i-1];
}
for([i, j] of mlist){
    const temp1 = sum[j - 1];
    const temp2 = i - 2 >= 0?sum[i - 2]:0;
    result.push(temp1 - temp2);
}
console.log(result.join('\n'));