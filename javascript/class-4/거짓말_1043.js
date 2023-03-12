// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[nm, acquaintance, ...parties] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);
const [k, ...acqu] = acquaintance.split(" ").map(Number);

const linked = Array.from({ length: n + 1 }, () => []);

parties = parties.map((line) => {
  const [v, ...people] = line.split(" ").map(Number);

  const standard = people[0];

  for (let i = 1; i < v; i++) {
    linked[standard].push(people[i]);
    linked[people[i]].push(standard);
  }

  return [v, ...people];
});

const impossible = Array(n + 1).fill(false);

const search = (current) => {
  linked[current].forEach((next) => {
    if (!impossible[next]) {
      impossible[next] = true;
      search(next);
    }
  });
};

acqu.forEach((person) => {
  impossible[person] = true;
  search(person);
});

let count = 0;

for (let i = 0; i < m; i++) {
  let end = false;

  for (let j = 1; j <= parties[i][0]; j++) {
    if (impossible[parties[i][j]]) {
      end = true;
      break;
    }
  }

  if (!end) count++;
}

console.log(count);
