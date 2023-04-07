//solved
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

let Num = '';
let positive = 0;
let negative = 0;
let positive_end = 0;

for(let i = 0; i < input.length; i++){
    if(input[i] !== '+' && input[i] !== '-'){
        Num += input[i];

        if(i === input.length - 1){
            if(positive_end === 0){
                positive += Number(Num);
            }
            else{
                negative += Number(Num);
            }
        }
    }
    else{
        if(positive_end === 0){
            positive += Number(Num);
            Num = ''
        }
        else{
            negative += Number(Num);
            Num = ''
        }

        if(input[i] === '-' && positive_end === 0){
            positive_end = 1;
        }
    }
}

console.log(positive - negative);