const fs = require('fs');
let N = fs.readFileSync('/dev/stdin').toString().trim();
let count_three = 0;

while(1){
    if(N % 5 === 0){
        console.log(N / 5 + count_three);
        break;
    }

    N -= 3;
    count_three++;
    if (N < 3 && N === 0){
        console.log(count_three);
        break
    }
    else if(N < 3 && N !== 0){
        console.log(-1);
        break
    }
}