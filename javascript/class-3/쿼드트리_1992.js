// solved
const fs = require('fs');
[n, ...frame] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = Number(n);
frame = frame.map(element => {
    return element.split('').map(e => Number(e));
});

const split = (len, frame) => {
    const tempFrame = frame.slice();
    const mid = len / 2;
    const splitList = [[], [], [], []];
    for(let i = 0; i < len; i++) {
        const flist = tempFrame[i].splice(0, mid);
        
        if(i < mid) {
            splitList[0].push(flist);
            splitList[1].push(tempFrame[i]);
        } else {
            splitList[2].push(flist);
            splitList[3].push(tempFrame[i]);
        }
    }

    return splitList;
}

const compression = (len, frame) => {
    let tempResult = [];
    let standard = frame[0].reduce((sum, currValue) => sum + currValue, 0);
    if(standard === len || standard === 0) {
        for(let i = 1; i < len; i++) {
            if(standard !== frame[i].reduce((sum, currValue) => sum + currValue, 0)) {
                standard = false;
                break;
            }
        }
    } else standard = false;

    if(standard === false) {
        const splitList = split(len, frame);
        splitList.forEach((list) => {
            tempResult.push(compression(len / 2, list));
        })
    } else tempResult = standard === len ? 1 : 0;

    return tempResult;
}

let result = compression(n, frame);
result = JSON.stringify(result).replace(/\[/g, '(').replace(/\]/g, ')').replace(/,/g, '');

console.log(result);