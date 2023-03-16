// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[nmk, minsu, cheolsu] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, k] = nmk.split(" ").map(Number);
const haved = Array(n + 1).fill(false);

let max = 0;

minsu.split(" ").forEach((element) => {
  const num = Number(element);

  haved[num] = true;
  if (max < num) max = num;
});

const parents = Array(n + 1);
for (let i = 1; i <= n; i++) parents[i] = i;

const find = (num) => {
  if (parents[num] === num) return num;
  return (parents[num] = find(parents[num]));
};

const union = (num1, num2) => {
  const p1 = find(num1);
  const p2 = find(num2);
  if (p1 > p2) return (parents[p2] = p1);
  else return (parents[p1] = p2);
};

let parent = max;

for (let i = max - 1; i > 0; i--) {
  if (haved[i]) parent = i;

  union(parent, i);
}

const result = [];

cheolsu.split(" ").forEach((element) => {
  let current = Number(element);
  if (haved[current]) current++;

  const findParent = find(current);
  result.push(findParent);

  union(findParent, findParent + 1);
});

console.log(result.join("\n"));
