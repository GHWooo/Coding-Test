//solved
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>x.split(' ').reduce((a, b)=>a + b));
input.pop();
let result = [];
for(char of input){
    let brackets = [];
    let state = 'yes'
    for(let i = 0; i < char.length; i++){
        if(char[i] === '(') brackets.push('(');
        if(char[i] === ')'){
            const temp = brackets.pop();
            if(temp !== '('){
                state = 'no'; break;
            } 
        } 
        if(char[i] === '[') brackets.push('[');
        if(char[i] === ']'){
            const temp = brackets.pop();
            if(temp !== '['){
                state = 'no'; break;
            } 
        } 
    }
    if(brackets.length > 0) state = 'no';
    result.push(state);
}
console.log(result.join('\n'));