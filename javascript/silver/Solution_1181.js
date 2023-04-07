const fs = require('fs');
[n, ...char] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
char = char.sort((a, b) => {
    if(a.length !== b.length) return a.length - b.length;
    else{
        if(a > b) return 1;
        if(a < b) return -1;
    }
})
char = char.filter((item, idx, array) => !idx || item !== array[idx-1])
console.log(char.join('\n'));