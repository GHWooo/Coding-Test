//solved
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase().split('').sort();
let result = [[input.shift(), 1]];
for(i of input){
    [char, count] = result[result.length-1];
    char === i?result[result.length-1] = [char, count+1]:result.push([i, 1]);
}
result.sort((a, b)=>b[1]-a[1]);
if(result.length > 1 && result[0][1] === result[1][1]) console.log('?');
else console.log(result[0][0]);