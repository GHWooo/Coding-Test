//solved
const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = [];
let stack = [];
let numbers = [];
for(let i = 1; i <= n; i++) numbers.push(i);

let index = 0;
for(num of numbers){
    if(input[index] === num){
        result.push('+'); result.push('-');
        index++;
    }
    else{
        if(stack.length > 0){
            while(stack[stack.length - 1] === input[index]){
                stack.pop();
                result.push('-');
                index++;
            }
            stack.push(num);
            result.push('+');
        }
        else{
            stack.push(num);
            result.push('+');   
        }
    }
}
while(stack.length > 0){
    if(stack[stack.length - 1] === input[index]){
        stack.pop();
        result.push('-');
        index++;
    }
    else break;
}
stack.length > 0?console.log('NO'):console.log(result.join('\n'));
