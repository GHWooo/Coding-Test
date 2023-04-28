class PriorityQueue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  isEmpty() {
    if (this.size === 0) return true;
    return false;
  }

  add(item, next) {
    this.size++;
    this.queue.push([item, next]);

    this.up(this.size - 1);
  }

  up(index) {
    let parentsIndex = index - 1;

    while (parentsIndex >= 0) {
      if (this.queue[parentsIndex][1] >= this.queue[parentsIndex + 1][1]) break;

      const temp = this.queue[parentsIndex];
      this.queue[parentsIndex] = this.queue[parentsIndex + 1];
      this.queue[parentsIndex + 1] = temp;

      parentsIndex--;
    }
  }

  poll() {
    this.size--;

    return this.queue.shift();
  }

  search(item, next) {
    for (let i = 0; i < this.size; i++) {
      if (this.queue[i][0] === item) {
        this.queue[i][1] = next;
        this.up(i);
      }
    }
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NK, products] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = NK.split(" ").map(Number);

const chargingState = Array(K + 1).fill(false);
const numNext = Array(K + 1).fill(101);

products = products.split(" ").map(Number);

const nextPosi = {};

for (let i = K - 1; i >= 0; i--) {
  const curNum = products[i];

  if (nextPosi[curNum]) {
    numNext[i] = nextPosi[curNum];
  }

  nextPosi[curNum] = i;
}

const priorityQueue = new PriorityQueue();

let pollCount = 0;

for (let i = 0; i < K; i++) {
  const current = products[i];
  const next = numNext[i];

  if (chargingState[current]) {
    priorityQueue.search(current, next);
  } else {
    if (priorityQueue.size === N) {
      const pollItem = priorityQueue.poll();
      chargingState[pollItem[0]] = false;

      pollCount++;
    }

    priorityQueue.add(current, next);
    chargingState[current] = true;
  }
}

console.log(pollCount);
