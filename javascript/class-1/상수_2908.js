//solved
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
for(let i = 0; i < input.length; i++){
    let temp = '';
    for(let j = input[i].length-1; j > -1; j--){
        temp += input[i][j];
    }
    input[i] = parseInt(temp);
}   
console.log(Math.max(...input));