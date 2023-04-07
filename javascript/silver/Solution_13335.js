//solved
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sumArray = (bridge) => {
    const result = bridge.reduce(function add(sum, currValue){
        return sum + currValue;
    }, 0);
    return result;
}
const implement = (input) => {
    const [n, w, l] = input[0].split(' ');
    const temp = input[1].split(' ');
    const truks = temp.map(x => parseInt(x));
    const bridge = Array.from({length: w}, ()=>0);
    let count = 0;
    while(truks.length > 0 || sumArray(bridge) > 0){
        bridge.shift();
        const next = truks.length?truks[0]:0
        if(sumArray(bridge)+next<=l && next !== 0)bridge.push(truks.shift());
        else bridge.push(0);
        count++;
    }
    console.log(count);
}
implement(input);