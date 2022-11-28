// solved
const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let list = [];
let temp = 1;
while(temp ** 2 <= n){
    if(temp ** 2 === n){ console.log(1);  process.exit(); }
    list.push(temp ** 2);
    temp++;
}
for(let i = 0; i < list.length; i++){
    for(let j = 0; j < list.length; j++){
        if(list[i] + list[j] === n){ console.log(2); process.exit(); }
    }
}
for(let i = 0; i < list.length; i++){
    for(let j = 0; j < list.length; j++){
        for(let k = 0; k < list.length; k++){
            if(list[i] + list[j] + list[k] === n){ console.log(3); process.exit(); }
        }
    }
}
console.log(4);