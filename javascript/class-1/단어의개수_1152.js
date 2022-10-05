//solved
const fs = require('fs');
let cases = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
if(cases.length === 1 && cases[0] === '') console.log(0);
else console.log(cases.length); 