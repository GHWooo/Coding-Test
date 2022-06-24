// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const N = Number(input[0].split(' ')[0]);
// const K = Number(input[0].split(' ')[1]);

// let C_array = [];
// for(let i=N+1; i<=N+K; i++){
//     C_array.push(Number(input[i]));
// }
// C_array.sort(function(a, b){
//     return a - b;
// });

// let M_V_array = [];
// for(let i=1; i<=N; i++){
//     const M = Number(input[i].split(' ')[0]);
//     const V = Number(input[i].split(' ')[1]);
//     M_V_array.push([M, V]);
// }
// M_V_array.sort(function(a, b){
//     return a[0] - b[0];
// })
// readline으로 풀어볼것

let result = 0;
let valid_gem = []
let start_index = 0;

for(let i=0; i< C_array.length; i++){
    const bag_capacity = C_array[i];

    for(let k=start_index; k < M_V_array.length; k++){
        if(M_V_array[k][0] > bag_capacity){
            start_index = k;
            break;
        }
        else{
            valid_gem.push(M_V_array[k]);
        }
    }
    valid_gem.sort(function(a, b){
        return a[1] - b[1];
    })

    max_gem = valid_gem.pop()[1];
    result+= max_gem;
}

console.log(result);