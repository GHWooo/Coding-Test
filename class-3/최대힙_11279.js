//solved
const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = [];

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    swap(arr, x, y){
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
        return;
    }

    empty() {
        if (this.heap.length == 0) {
            return true;
        }
        return false;
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

    extractMax() {
        if (this.heap.length == 1) {
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);

        return max;
    }

    bubbleDown(index) {
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;
        const length = this.heap.length;
        let largestIndex = index;

        if (leftIndex < length && this.heap[leftIndex] > this.heap[largestIndex]) {
            largestIndex = leftIndex;
        }

        if (rightIndex < length && this.heap[rightIndex] > this.heap[largestIndex]) {
            largestIndex = rightIndex;
        }

        if (largestIndex !== index) {
            this.swap(this.heap, largestIndex, index);
            this.bubbleDown(largestIndex);
        }
    }
}
const myheap = new MaxHeap();

for(i of input){
    if(i === 0) result.push(myheap.heap.length > 0?myheap.extractMax():0);
    else myheap.insert(i);
}
console.log(result.join('\n'));