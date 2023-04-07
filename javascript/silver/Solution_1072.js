// solved
const fs = require('fs');
[x, y] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
if(x === y) console.log(-1);
else{
    let left = 1;
    let right = 1000000000;
    let rate = Math.floor(100 * y / x );
    if(rate === 99) console.log(-1);
    else{
        while(left <= right){
            const mid = Math.floor((left+right)/2);
            const nx = x + mid, ny = y + mid;
            const nrate = Math.floor(100 * ny / nx);
            if(nrate !== rate) right = mid - 1;
            else left = mid + 1;
        }
        console.log(right+1);
    }
}