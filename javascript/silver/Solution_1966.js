//solved
const fs = require('fs');
[t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];

for(let i = 0; i < t * 2; i+=2){
    [n, m] = input[i].split(' ').map(Number);
    let docu = input[i+1].split(' ').map(Number);
    let print = [];

    for(let i = 0; i < n; i++) print.push([i, docu[i]]);
    let index = 0;

    while(index < n){
        let state = true;
        for(let j = index + 1; j < n; j++){
            if(print[index][1] < print[j][1]){
                [temp] = print.splice(index, 1);
                print.push(temp);
                state = false;
                break;
            }
        }
        if(state) index++;
    }
    for(let i = 0; i < n; i++){
        if(print[i][0] === m){ result.push(i + 1); break; }
    }
}
console.log(result.join('\n'));