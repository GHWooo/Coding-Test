const fs = require('fs');
[nm, ...city] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
let chicken = [];
let house = [];
let result = {};
city = city.map((x, y)=>x.split(' ').map((a, b) => {
    if(a === '2') {
        chicken.push([parseInt(y), parseInt(b)]);
        result[y + '' + b] = 0;
    } 
    if(a === '1') house.push([parseInt(y), parseInt(b)]);
    return parseInt(a);
}));
for([hx, hy] of house){
    let len = [];
    for([cx, cy] of chicken){
        len.push([Math.abs(hx - cx) + Math.abs(hy - cy), [cx, cy]]);
    }
    len.sort((a, b) => a[0] - b[0]);
    result[len[0][1][0] + '' + len[0][1][1]] += len[0][0];
}
result.filter(x=>console.log(x));