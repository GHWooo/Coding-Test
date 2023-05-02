// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [K, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let inputCursor = 0;

const result = [];

for (let tc = 0; tc < +K; tc++) {
  const [V, E] = input[inputCursor++].split(" ").map(Number);

  const linked = Array.from({ length: V + 1 }, () => []);

  for (let l = 0; l < E; l++) {
    const [u, v] = input[inputCursor++].split(" ").map(Number);

    linked[u].push(v);
    linked[v].push(u);
  }

  const visited = Array(V + 1).fill(0);

  let endFlag = false;

  for (let i = 1; i <= V; i++) {
    if (visited[i] !== 0) continue;

    const queue = [[i, 1]];
    let queueCursor = 0;

    while (queueCursor < queue.length) {
      const [current, check] = queue[queueCursor++];

      for (let j = 0; j < linked[current].length; j++) {
        const next = linked[current][j];

        if (visited[next] === 0) {
          visited[next] = -check;
          queue.push([next, visited[next]]);
        } else {
          if (check === visited[next]) {
            endFlag = true;
            break;
          }
        }
      }

      if (endFlag) break;
    }
    if (endFlag) break;
  }

  result.push(endFlag ? "NO" : "YES");
}

console.log(result.join("\n"));
