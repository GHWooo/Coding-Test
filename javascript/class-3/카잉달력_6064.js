// solved
const fs = require('fs');
[t, ...caseList] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
caseList = caseList.map(list => list.split(' ').map(Number));
const result = [];

const gcd = (num1, num2) => {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let remainder;
    while(min) {
        remainder = max % min;
        max = min;
        min = remainder;
    }
    return max;
};

for (list of caseList) {
    let maxYear = (list[0] * list[1]) / gcd(list[0], list[1]);
    let year;

    for(let i = list[2]; i <= maxYear; i += list[0]) {
        if((i - 1) % list[1] + 1 === list[3]) {
            year = i;
            break;
        }
    }
    result.push(year ? year : -1);
}

console.log(result.join('\n'));