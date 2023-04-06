// solved

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  empty() {
    if (this.heap.length === 0) {
      return true;
    }
    return false;
  }

  swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;

      this.swap(this.heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  extract() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const answer = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return answer;
  }

  bubbleDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;

    let smallestIndex = index;

    if (leftIndex < length && this.heap[leftIndex] > this.heap[smallestIndex]) {
      smallestIndex = leftIndex;
    }
    if (rightIndex < length && this.heap[rightIndex] > this.heap[smallestIndex]) {
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
let [NK, ...input] = fs.readFileSync(filePath).toString().split("\n");

const [N, K] = NK.split(" ").map(Number);
const jewel = [];
const bag = [];

let cursor = 0;

for (let i = 0; i < N; i++) {
  jewel.push(input[cursor++].split(" ").map(Number));
}
jewel.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < K; i++) {
  bag.push(Number(input[cursor++]));
}
bag.sort((a, b) => a - b);

const maxHeap = new MaxHeap();

let result = 0n;
let jewelIndex = 0;

for (let i = 0; i < K; i++) {
  while (jewelIndex < N && jewel[jewelIndex][0] <= bag[i]) {
    maxHeap.insert(jewel[jewelIndex][1]);
    jewelIndex++;
  }

  if (!maxHeap.empty()) result += BigInt(maxHeap.extract());
}

console.log(`${result}`);
