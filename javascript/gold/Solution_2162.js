// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...lines] = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(N);

const linesObj = {};
lines = lines.map((line, index) => {
  linesObj[index] = line.split(" ").map(Number);
});

const ccw = (x1, y1, x2, y2, x3, y3) => {
  const result = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
  if (result > 0) return 1;
  else if (result < 0) return -1;
  else return 0;
};

let parents = Array(N);
for (let i = 0; i < N; i++) parents[i] = i;

const checkConnection = (line1, line2) => {
  const [x1, y1, x2, y2] = line1;
  const [x3, y3, x4, y4] = line2;

  const ccw1 = ccw(x1, y1, x2, y2, x3, y3);
  const ccw2 = ccw(x1, y1, x2, y2, x4, y4);
  const ccw3 = ccw(x3, y3, x4, y4, x1, y1);
  const ccw4 = ccw(x3, y3, x4, y4, x2, y2);

  if (ccw1 * ccw2 === 0 && ccw3 * ccw4 === 0) {
    if (
      Math.min(x1, x2) <= Math.max(x3, x4) &&
      Math.min(x3, x4) <= Math.max(x1, x2) &&
      Math.min(y1, y2) <= Math.max(y3, y4) &&
      Math.min(y3, y4) <= Math.max(y1, y2)
    ) {
      return true;
    } else {
      return false;
    }
  } else if (ccw1 * ccw2 <= 0 && ccw3 * ccw4 <= 0) {
    return true;
  } else {
    return false;
  }
};

const find = (u) => {
  if (parents[u] !== u) return find(parents[u]);
  return u;
};

const union = (u1, u2) => {
  u1 = find(u1);
  u2 = find(u2);

  if (u1 < u2) parents[u2] = u1;
  else parents[u1] = u2;
};

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (find(i) === find(j)) continue;

    if (checkConnection(linesObj[i], linesObj[j])) union(i, j);
  }
}

parents = parents.map((p) => find(p));

let max = 0;
let count = 0;

const resultObj = {};

for (let i = 0; i < N; i++) {
  let current = parents[i];

  if (resultObj[current]) {
    resultObj[current]++;
  } else {
    resultObj[current] = 1;
    count++;
  }

  max = Math.max(max, resultObj[current]);
}

console.log([count, max].join("\n"));
