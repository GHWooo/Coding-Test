// solved

const fs = require('fs');
[n, m, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(n);
m = Number(m);
plan = input.pop().split(' ').map(Number);

const linked = Array.from({length: n + 1}, () => -1);
for(let i = 1; i <= n; i++) linked[i] = i;

const find = (c) => {
    if(linked[c] === c) return c;
    linked[c] = find(linked[c]);
    return linked[c];
}

const union = (a, b) => {
    const pa = find(a);
    const pb = find(b);

    if(pa !== pb) linked[pb] = pa;
}

for(let i = 0; i < n; i++) {
    const current_line = input[i].split(' ').map(Number);

    for(let j = i; j < n; j++) {
        if(current_line[j]) {
            union(i + 1, j + 1);
        }
    }
}

let vaild = true;

for(let i = 1; i < m; i++) {
    if(find(plan[i - 1]) !== find(plan[i])) {
        vaild = false;
        break;
    }
}

console.log(vaild ? "YES" : "NO");