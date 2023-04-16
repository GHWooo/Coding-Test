// solved

class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  isEmpty() {
    if (!this.heap.length) return true;
    return false;
  }

  add(item) {
    this.heap.push(item);
    this.bubbleUp();

    this.size++;
  }

  poll() {
    if (this.size === 1) {
      this.size--;

      return this.heap.pop();
    }

    const answer = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    this.size--;

    return answer;
  }

  swap(p, c) {
    const temp = this.heap[p];
    this.heap[p] = this.heap[c];
    this.heap[c] = temp;
  }

  bubbleUp() {
    let currentIndex = this.size - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[currentIndex]) return;

      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  bubbleDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.size;

    let smallestIndex = index;

    if (leftIndex < length && this.heap[leftIndex] < this.heap[smallestIndex]) {
      smallestIndex = leftIndex;
    }

    if (rightIndex < length && this.heap[rightIndex] < this.heap[smallestIndex]) {
      smallestIndex = rightIndex;
    }

    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.bubbleDown(smallestIndex);
    }
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...cards] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const solution = () => {
  if (N === 1) {
    console.log(0);
    return;
  }

  const heap = new MinHeap();
  cards.forEach((card) => heap.add(card));

  let result = 0;

  while (!heap.isEmpty()) {
    const first = heap.poll();

    if (heap.isEmpty()) {
      console.log(result);
      return;
    }

    const second = heap.poll();

    result += first + second;

    heap.add(first + second);
  }
};

solution();
