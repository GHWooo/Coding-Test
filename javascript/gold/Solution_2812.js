// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NK, number] = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [N, K] = NK.split(" ").map(Number);

const stack = [];

for (let i = 0; i < N; i++) {
  const current = Number(number[i]);

  while (stack.length > 0 && K > 0 && stack[stack.length - 1] < current) {
    stack.pop();
    K--;
  }

  stack.push(current);
}

while (K > 0) {
  stack.pop();
  K--;
}

console.log(stack.join(""));
