// out of memory

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class DoubleHeap {
    constructor(compare_func) {
        this.heap = [];
        this.compare_func = compare_func;
    }

    empty() {
        return this.heap.length === 0;
    }

    front() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this.boubleUp();
    }

    boubleUp() {
        let current_index = this.heap.length - 1;
        const current_value = this.heap[current_index];

        while(current_index > 0) {
            const parent_index = Math.floor((current_index - 1) / 2);
            const parent_value = this.heap[parent_index];

            if(this.compare_func(parent_value, current_value)) break;

            this.heap[current_index] = parent_value;
            current_index = parent_index;
        }

        this.heap[current_index] = current_value;
    }

    pop() {
        const last_index = this.heap.length - 1;
        this.heap[0] = this.heap[last_index];
        this.heap.pop();

        if(this.heap.length > 0) this.boubleDown();
    }

    boubleDown() {
        let current_index = 0;
        const current_value = this.heap[current_index];

        while(current_index < this.heap.length) {
            const left_child_index = current_index * 2 + 1;
            const right_child_index = current_index * 2 + 2;

            if(left_child_index >= this.heap.length) break;

            const left_child_value = this.heap[left_child_index];
            const right_child_value = right_child_index < this.heap.length 
            ? this.heap[right_child_index] : null;

            const best_index = right_child_value !== null && this.compare_func(right_child_value, left_child_value) 
            ? right_child_index : left_child_index;

            const best_value = this.heap[best_index];

            if(this.compare_func(current_value, best_value)) break;

            this.heap[current_index] = best_value;
            current_index = best_index;
        }

        this.heap[current_index] = current_value;
    }
}

let index = 0;
const t = input[index++];

const result = [];

for(let i = 0; i < +t; i++) {
    const k = input[index++];

    const maxHeap = new DoubleHeap((a, b) => a > b);
    const minHeap = new DoubleHeap((a, b) => a < b);

    const visited = {};

    for(let j = 0; j < k; j++) {
        const [calculate, num] = input[index++].split(' ');

        if(calculate === 'I') {
            maxHeap.push(+num);
            minHeap.push(+num);

            if(visited[+num]) visited[+num]++;
            else visited[+num] = 1;
        } else if(+num === 1) {
            while(!maxHeap.empty()) {
                const max = maxHeap.front();
                maxHeap.pop();

                if(visited[max] > 0) {
                    visited[max]--;
                    break;
                }
            }
        } else if(+num === -1) {
            while(!minHeap.empty()) {
                const min = minHeap.front();
                minHeap.pop();

                if(visited[min] > 0) {
                    visited[min]--;
                    break;
                }
            }
        }
    }

    while(!maxHeap.empty() && visited[maxHeap.front()] === 0) maxHeap.pop();
    while(!minHeap.empty() && visited[minHeap.front()] === 0) minHeap.pop();

    if(minHeap.empty() && maxHeap.empty()) result.push("EMPTY");
    else result.push(`${maxHeap.front()} ${minHeap.front()}`);
}

console.log(result.join('\n'));
