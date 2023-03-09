// solved

const fs = require('fs');
const n = BigInt(fs.readFileSync('/dev/stdin').toString());
const mod = BigInt(1_000_000_007);

const multiply = (a, b) => {
    const size = a.length;
    const res = new Array(size);

    for (let i = 0; i < size; i++) {
        res[i] = new Array(size);

        for (let j = 0; j < size; j++) {
            res[i][j] = BigInt(0);

            for (let k = 0; k < size; k++) {
                res[i][j] += a[i][k] * b[k][j];
            }

            res[i][j] %= mod;
        }
    }
    return res;
}

const pow = (matrix, n) => {
    if (n === BigInt(1)) return matrix;

    const half = pow(matrix, n / BigInt(2));
    const temp = multiply(half, half);

    if (n % BigInt(2) === BigInt(0)) return temp;
    else return multiply(temp, matrix);
}

const base = [[BigInt(1), BigInt(1)], [BigInt(1), BigInt(0)]];
const res = pow(base, n);

console.log(Number(res[0][1] % mod));