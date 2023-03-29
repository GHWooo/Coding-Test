// solved

const fs = require("fs");
[n, sequence] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n = Number(n);
sequence = sequence.split(" ").map(Number);

const dpL = Array(n),
  dpR = Array(n);

for (let i = 0; i < n; i++) {
  const standard = sequence[i];
  let sequenceLen = 1;

  for (let j = 0; j < i; j++) {
    const current = sequence[j];

    if (standard > current) {
      sequenceLen = Math.max(sequenceLen, dpL[j] + 1);
    }
  }

  dpL[i] = sequenceLen;
}

let max = 0;

for (let i = n - 1; i >= 0; i--) {
  const standard = sequence[i];
  let sequenceLen = 1;

  for (let j = i; j < n; j++) {
    const current = sequence[j];

    if (standard > current) {
      sequenceLen = Math.max(sequenceLen, dpR[j] + 1);
    }
  }

  dpR[i] = sequenceLen;

  max = Math.max(max, dpL[i] + dpR[i] - 1);
}

console.log(max);
