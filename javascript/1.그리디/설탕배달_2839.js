// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on("line", function(line){
//     greedy(line);
//     rl.close();
// });

// function greedy(N){
//     let total_count = Number(N);
//     let count_three = 0;

//     while(1){
//         if(total_count % 5 === 0){
//             console.log(total_count / 5 + count_three);
//             break;
//         }

//         total_count -= 3;
//         count_three++;
//         if (total_count < 3 && total_count === 0){
//             console.log(count_three);
//             break
//         }
//         else if(total_count < 3 && total_count !== 0){
//             console.log(-1);
//             break
//         }
//     }
// }

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