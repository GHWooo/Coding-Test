//해결
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const {exit} = require('process');
const bracketList = input
const stack = [];

const end = () =>{
    console.log(0);
    exit();
}
const checkStack = (bracket) =>{
    const bracketScore = bracket===')'?2:3;
    if(typeof stack[stack.length-1] === 'number'){
        if(stack.length === 1) end();
        if(stack[stack.length-2] === '(' && bracketScore === 2){
            const temp = stack.pop();
            stack[stack.length-1] = temp * 2;
        }
        else if(stack[stack.length-2] === '[' && bracketScore === 3){
            const temp = stack.pop();
            stack[stack.length-1] = temp * 3;
        }
        else end();
    }
    else{
        if(stack[stack.length-1] === '(' && bracketScore === 2){
            stack[stack.length-1] = 2;
        }
        else if(stack[stack.length-1] === '[' && bracketScore === 3){
            stack[stack.length-1] = 3;
        }
        else end();
    }
}
const implement = () =>{
    for(let i = 0; i < bracketList.length; i++){
        if(bracketList[i] === '(' || bracketList[i] === '[') stack.push(bracketList[i]);
        else{
            if(stack.length === 0) end();
            checkStack(bracketList[i]);
        }
        if(typeof stack[stack.length-1] === 'number' && typeof stack[stack.length-2] === 'number'){
            const temp = stack.pop();
            stack[stack.length-1] += temp;
        }
    }
    if(stack.length !== 1 || typeof stack[0] !== 'number'){
        end();
    }
    console.log(stack[0]);
}
implement();