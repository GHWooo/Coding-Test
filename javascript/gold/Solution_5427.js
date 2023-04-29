// solved

class Node {
  constructor(x, y, minute, state) {
    this.x = x;
    this.y = y;
    this.minute = minute;
    this.state = state;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    if (this.front === null) return true;
    return false;
  }

  add(x, y, minute, state) {
    const node = new Node(x, y, minute, state);

    if (!this.isEmpty()) this.back.next = node;
    else this.front = node;

    this.back = node;
  }

  poll() {
    const answer = this.front;
    this.front = this.front.next;

    return answer;
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let inputCursor = 0;

const testCase = input[inputCursor++];

let result = [];

for (let tc = 0; tc < testCase; tc++) {
  const [w, h] = input[inputCursor++].split(" ").map(Number);
  const visited = Array.from({ length: h }, () => Array(w).fill(false));
  const board = [];

  const queue = new Queue();
  let initPosi;

  for (let i = 0; i < h; i++) {
    board[i] = input[inputCursor++].split("").map((element, j) => {
      if (element === "*") queue.add(i, j, 0, "fire");
      if (element === "@") initPosi = [i, j, 0, "person"];
      if (element !== ".") visited[i][j] = true;

      return element;
    });
  }

  queue.add(...initPosi);

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let answer = "IMPOSSIBLE";
  let endFlag = false;

  while (!queue.isEmpty()) {
    const { x, y, minute, state } = queue.poll();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= h || ny < 0 || ny >= w) {
        if (state === "person") {
          answer = minute + 1;
          endFlag = true;

          break;
        }
        continue;
      }

      if (state === "fire") {
        if (board[nx][ny] === ".") {
          board[nx][ny] = minute;

          queue.add(nx, ny, minute + 1, "fire");
        }
      } else {
        if (visited[nx][ny] || (typeof board[nx][ny] === "number" && board[nx][ny] <= minute))
          continue;

        visited[nx][ny] = true;

        queue.add(nx, ny, minute + 1, "person");
      }
    }

    if (endFlag) break;
  }

  result.push(answer);
}

console.log(result.join("\n"));
