// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const cnt = new Array(n + 1).fill(0);
const graph = Array.from(Array(n + 1), () => []);

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

const dfs = (v, visited) => {
  visited[v] = true;
  cnt[v] += 1;

  for (let i = 0; i < graph[v].length; i++) {
    const next = graph[v][i];

    if (!visited[next]) {
      dfs(next, visited);
    }
  }
};

for (let i = 1; i <= n; i++) {
  const visited = new Array(n + 1).fill(false);
  dfs(i, visited);
}

const max = Math.max(...cnt);

const result = [];
for (let i = 1; i <= n; i++) {
  if (cnt[i] === max) {
    result.push(i);
  }
}

console.log(result.join(" "));
