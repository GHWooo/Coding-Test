//solved
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
for(i of input){
    if(i === '0') break;
    let list = i.split('');
    let left = 0;
    let right = list.length - 1;
    let state = 'yes';
    while(left <= right){
        if(list[left] !== list[right]){
            state = 'no'; break;
        }
        left++; right--;
    }
    result.push(state);
}
console.log(result.join('\n'));