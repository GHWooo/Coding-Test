// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const G = Number(input[0]);
const P = Number(input[1]);

const gi = Array(P);

for (let i = 2; i < 2 + P; i++) {
  gi[i - 2] = Number(input[i]);
}

const union = Array(G + 1);
for (let i = 0; i <= G; i++) union[i] = i;

const getParent = (a) => {
  if (union[a] === a) return a;

  return (union[a] = getParent(union[a]));
};

const unionParent = (a, b) => {
  const p1 = getParent(a);
  const p2 = getParent(b);

  return p1 < p2 ? (union[p2] = p1) : (union[p1] = p2);
};

let result = P;

for (let i = 0; i < P; i++) {
  const gate = gi[i];
  const parentOfGate = getParent(gate);

  if (parentOfGate === 0) {
    result = i;
    break;
  } else {
    unionParent(parentOfGate, parentOfGate - 1);
  }
}

console.log(result);
