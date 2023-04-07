//solved
const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let x = 1;
let result = Array.from({length: n}, ()=>x++);
console.log(result.join('\n'));