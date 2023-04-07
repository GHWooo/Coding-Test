// solved

class MinHeap {
  constructor() {
    this.heap = [];
  }

  empty() {
    if (this.heap.length == 0) return true;
    return false;
  }

  swap(arr, x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  insert(x, y, day) {
    this.heap.push([x, y, day]);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex][2] <= this.heap[currentIndex][2]) break;

      this.swap(this.heap, parentIndex, currentIndex);

      currentIndex = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length == 1) return this.heap.pop();

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }

  bubbleDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;

    let smallestIndex = index;

    if (leftIndex < length && this.heap[leftIndex][2] < this.heap[smallestIndex][2]) {
      smallestIndex = leftIndex;
    }

    if (rightIndex < length && this.heap[rightIndex][2] < this.heap[smallestIndex][2]) {
      smallestIndex = rightIndex;
    }

    if (smallestIndex !== index) {
      this.swap(this.heap, index, smallestIndex);
      this.bubbleDown(smallestIndex);
    }
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [RC, ...board] = fs.readFileSync(filePath).toString().split("\n");

const [R, C] = RC.split(" ").map(Number);

const queue = [];
let startSwan;
let endSwan;

board = board.map((line, i) => {
  return line.split("").map((element, j) => {
    if (element === ".") {
      queue.push([i, j, 0]);
    }
    if (element === "L") {
      if (startSwan) endSwan = [i, j];
      else startSwan = [i, j];

      queue.push([i, j, 0]);

      return ".";
    }

    return element;
  });
});

let queueCursor = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (queue.length > queueCursor) {
  const [x, y, value] = queue[queueCursor++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

    if (board[nx][ny] === "X") {
      board[nx][ny] = value + 1;
      queue.push([nx, ny, value + 1]);
    }
  }

  if (board[x][y] === ".") board[x][y] = 0;
}

const heap = new MinHeap();
heap.insert(startSwan[0], startSwan[1], 0);
board[startSwan[0]][startSwan[1]] = -1;

let end = false;

while (!heap.empty()) {
  const [x, y, day] = heap.extractMin();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

    if (board[nx][ny] === -1) continue;

    if (nx === endSwan[0] && ny === endSwan[1]) {
      console.log(day);
      end = true;
      break;
    }

    if (board[nx][ny] === ".") {
      heap.insert(nx, ny, day);
    } else {
      if (board[nx][ny] > day) heap.insert(nx, ny, board[nx][ny]);
      else heap.insert(nx, ny, day);
    }

    board[nx][ny] = -1;
  }

  if (end) break;
}
