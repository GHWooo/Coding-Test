//solved
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const meeting = [];

for(let i = 1; i <= input[0]; i++){
    meeting.push(input[i].split(' '));
}
meeting.sort(function(a, b){
    if(a[1] === b[1]){
        return a[0] - b[0];
    }
    return a[1] - b[1];
});

let end_time = 0;
let result = 0;

for(let i = 0; i < input[0]; i++){
    if(end_time <= Number(meeting[i][0])){
        end_time = Number(meeting[i][1]);
        result ++;
    }
}

console.log(result);