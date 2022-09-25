const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
for(char of input){
    let state = 'YES'
    let brackets = [];
    for(let i = 0; i < char.length; i++){
        if(char[i] === '(') brackets.push('(');
        if(char[i] === ')'){
            if(brackets.length < 1){
                state = 'NO'; break;
            }
            const temp = brackets.pop();
            if(temp !== '('){
                state = 'NO'; break;
            }
        }
    }
    if(brackets.length > 0) state = 'NO';
    result.push(state);
}
console.log(result.join('\n'));