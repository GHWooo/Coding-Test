//solved
const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
if(n >= 90) console.log('A');
else if(n >= 80) console.log('B');
else if(n >= 70) console.log('C');
else if(n >= 60) console.log('D');
else console.log('F');