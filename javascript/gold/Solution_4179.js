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
let [RC, ...board] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [R, C] = RC.split(" ").map(Number);
const visited = Array.from({ length: R }, () => Array(C).fill(false));

const queue = new Queue();

let initPosi;

board = board.map((line, i) => {
  return line.split("").map((element, j) => {
    if (element === "F") queue.add(i, j, 0, "fire");
    if (element === "J") initPosi = [i, j, 0, "person"];
    if (element !== ".") visited[i][j] = true;

    return element;
  });
});

queue.add(...initPosi);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let result = "IMPOSSIBLE";
let endFlag = false;

while (!queue.isEmpty()) {
  const { x, y, minute, state } = queue.poll();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= R || ny < 0 || ny >= C) {
      if (state === "person") {
        result = minute + 1;
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

console.log(result);
