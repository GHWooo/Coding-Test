const fs = require('fs');
[_, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

class AbsHeap {
    constructor() {
      this.heap = [];
    }
  
    empty() {
      if (this.heap.length == 0) {
        return true;
      }
      return false;
    }
  
    swap(arr, x, y) {
      let temp = arr[x];
      arr[x] = arr[y];
      arr[y] = temp;
      return;
    }
  
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
  
    bubbleUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[parentIndex][0] < this.heap[currentIndex][0]
          || (this.heap[parentIndex][0] == this.heap[currentIndex][0] && this.heap[parentIndex][1] < this.heap[currentIndex][1])
        ) {
          break;
        }
        this.swap(this.heap, parentIndex, currentIndex)
        currentIndex = parentIndex;
      }
    }
  
  
    extractMin() {
      if (this.heap.length == 1) {
        return this.heap.pop();
      }
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      return min
    }
  
    bubbleDown(index) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      const length = this.heap.length;
      let smallestIndex = index;
  
      if (leftIndex < length && (this.heap[leftIndex][0] < this.heap[smallestIndex][0]
        || (this.heap[leftIndex][0] == this.heap[smallestIndex][0]) && this.heap[leftIndex][1] < this.heap[smallestIndex][1])
      ) {
        smallestIndex = leftIndex;
      }
      if (rightIndex < length && (this.heap[rightIndex][0] < this.heap[smallestIndex][0]
        || (this.heap[rightIndex][0] == this.heap[smallestIndex][0]) && this.heap[rightIndex][1] < this.heap[smallestIndex][1])
      ) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex !== index) {
        this.swap(this.heap, index, smallestIndex);
        this.bubbleDown(smallestIndex)
      }
    }
  }

const absHeap = new AbsHeap();

const result = [];
input.forEach((number) => {
    if(number !== 0) absHeap.insert([Math.abs(number), number]);
    else result.push(absHeap.empty() ? 0 : absHeap.extractMin()[1]);

});

console.log(result.join('\n'));
