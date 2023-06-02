// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let inputCursor = 0;
let caseNumber = 0;

while (inputCursor < input.length - 1) {
  caseNumber++;
  const [n, m] = input[inputCursor++].split(' ').map(Number);

  const linked = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);

  for (let i = 0; i < m; i++) {
    const [s, e] = input[inputCursor++].split(' ').map(Number);

    linked[s].push(e);
    linked[e].push(s);
  }

  let countTree = 0;

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    if (linked[i].length === 0) {
      countTree++;
      continue;
    }

    let thisTree = true;

    const queue = [[i, 0]];
    let queueCursor = 0;

    visited[i] = true;

    while (queue.length > queueCursor) {
      const [cur, pre] = queue[queueCursor++];

      for (let j = 0; j < linked[cur].length; j++) {
        const next = linked[cur][j];

        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, cur]);
          continue;
        }

        if (next !== pre) {
          thisTree = false;
          break;
        }
      }

      if (!thisTree) break;
    }

    if (thisTree) countTree++;
  }

  switch (countTree) {
    case 0:
      console.log(`Case ${caseNumber}: No trees.`);
      break;
    case 1:
      console.log(`Case ${caseNumber}: There is one tree.`);
      break;
    default:
      console.log(`Case ${caseNumber}: A forest of ${countTree} trees.`);
  }
}
