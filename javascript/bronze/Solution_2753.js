//solved
const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
if((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) console.log(1);
else console.log(0);