// 해결
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[nmr, ...array] = input;
nmr = nmr.split(' ');
for(let i = 0; i < array.length; i++){
    array[i] = array[i].split(' ');
}
const createIndex = (n, m) => {
    const limit = Math.min(n, m) / 2;
    const array = Array.from({length: limit}, ()=>[]);

    for(let i = 0; i < limit; i++){
        let x = i, y = i;
        while(y < m-i-1){
            array[i].push([x, y++]);
        }
        while(x < n-i-1){
            array[i].push([x++, y]);
        }
        while(y > i){
            array[i].push([x, y--]);
        }
        while(x > i){
            array[i].push([x--, y]);
        }
    }
    return array;
}
const changeIndex = (r, index) => {
    const uptIndex = index.slice();
    for(let i = 0; i < uptIndex.length; i++){
        const ary = uptIndex[i].slice();

        const rSize = r / ary.length;
        const sliceNum = rSize > 0?r%ary.length:r;

        if(sliceNum === 0) continue;
        const temp = ary.splice(0, sliceNum);
        ary.push(...temp);
        uptIndex[i] = ary;
    }
    return uptIndex;
}
const implement = (nmr, array) => {
    const n = nmr[0], m = nmr[1], r = nmr[2]; 
    const result = Array.from({length: n}, ()=>[]);

    const index = createIndex(n, m);
    const afterIndex = changeIndex(r, index);

    for(let i = 0; i < index.length; i++){
        for(let j = 0; j < index[i].length; j++){
            const value = array[afterIndex[i][j][0]][afterIndex[i][j][1]];
            result[index[i][j][0]][index[i][j][1]] = value;
        }
    }
    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result[i].length; j++){
            process.stdout.write(result[i][j]+' ');
        }
        process.stdout.write('\n');
    }
}
implement(nmr, array);