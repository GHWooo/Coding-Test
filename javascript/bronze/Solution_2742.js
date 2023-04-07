//solved
const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let result = Array.from({length: n}, ()=>n--);
console.log(result.join('\n'));