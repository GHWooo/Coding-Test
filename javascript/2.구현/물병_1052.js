// 해결
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const createBottle = (n) => {
    let liter = n;
    const bottles = [];
    let temp = 1;
    while(liter > 0){
        if(temp * 2 > liter && liter >= temp){
            liter -= temp;
            bottles.push(temp);
            temp /= 2;
        }
        else if(temp * 2 > liter) temp /= 2;
        else temp *= 2;
    }
    return bottles;
}
const increase = (bottles, k) => {
    let result = 0;
    while(bottles.length > k){
        if(bottles[bottles.length-2] === bottles[bottles.length-1]){
            const temp = bottles.pop();
            bottles[bottles.length-1] += temp;
        }
        else{
            result += bottles[bottles.length-1];
            bottles[bottles.length-1] *= 2;
        }
    }
    return result;
}
const implement = (input) => {
    const n = parseInt(input[0]);
    const k = parseInt(input[1]);
    if(n <= k){
        console.log(0); return;
    }
    const bottles = createBottle(n);
    if(bottles.length <= k){
        console.log(0); return;
    }
    console.log(increase(bottles, k));
}
implement(input);