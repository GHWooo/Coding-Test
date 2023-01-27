// solved

const fs = require('fs');
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
input = input.map(element => element.split(' ').map(Number));

const max_len = input.length;

const visited = Array.from({length: Number(n)}, () => []);

const search = (v_index, h_index) => {
    let max_sum = input[v_index][h_index];

    if(v_index === max_len - 1) {
        visited[v_index][h_index] = max_sum;
        return max_sum;
    }

    const temp_1 = visited[v_index + 1][h_index] ? visited[v_index + 1][h_index] : search(v_index + 1, h_index);
    const temp_2 = visited[v_index + 1][h_index + 1] ? visited[v_index + 1][h_index + 1] : search(v_index + 1, h_index + 1);

    max_sum += temp_1 >= temp_2 ? temp_1 : temp_2;

    visited[v_index][h_index] = max_sum;
    return max_sum;
}

console.log(search(0, 0));