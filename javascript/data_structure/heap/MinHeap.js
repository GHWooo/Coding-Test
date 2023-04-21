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
    this.size++;

    this.heap.push(item);
    this.bubbleUp();
  }

  poll() {
    if (this.size === 1) {
      this.size--;

      return this.heap.pop();
    }

    this.size--;

    const answer = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

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
