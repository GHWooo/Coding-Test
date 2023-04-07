//solved
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const changeBomb = (table, r, c) => {
    const checkTable = table.map(x=>x.split(''));;
    for(let i = 0; i < r; i++){
        for(let j = 0; j < c; j++){
            if(table[i][j] === 'O'){
                checkTable[i][j] = 'b';
                if(i-1 > -1 && table[i-1][j] === '.') checkTable[i-1][j] = 'b';
                if(i+1 < r && table[i+1][j] === '.') checkTable[i+1][j] = 'b';
                if(j-1 > -1 && table[i][j-1] === '.') checkTable[i][j-1] = 'b';
                if(j+1 < c && table[i][j+1] === '.') checkTable[i][j+1] = 'b';
            }
        }
    }
    for(let i = 0; i < r; i++){
        let str = '';
        for(j of checkTable[i]){
            str += j;
        }
        str = str.replace(/\./g, 'O');
        str = str.replace(/b/g, '.');
        checkTable[i] = str;
    }
    return checkTable;
}
const end = (table) =>{
    for(i of table) console.log(i);
}
const implement = (input) => {
    [rcn, ...table] = input;
    rcn = rcn.split(' ');
    const r = parseInt(rcn[0]);
    const c = parseInt(rcn[1]);
    const n = parseInt(rcn[2]);
    if(n === 1){
        end(table); return;
    }
    if(n%2 === 0){
        let bomb = 'O';
        for(let i = 1; i < c; i++) bomb += 'O';
        for(let i = 0; i < r; i++) console.log(bomb);
        return;
    }
    let checkTable = changeBomb(table, r, c);
    if((n%4)===3){
        end(checkTable); return;
    }
    end(changeBomb(checkTable, r, c));
}
implement(input);