let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let result = 0;

while (n > 0) result += n--;

console.log(result);
