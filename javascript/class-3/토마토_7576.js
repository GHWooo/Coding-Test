const fs = require('fs');
[mn, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [m, n] = mn.split(' ').map(Number);
input = input.map(x => x.split(' ').map(Number));

class Node{
    constructor(item) {
        this.item = item;
        this.prev = null;
        this.next = null;
    }
}

class Deque{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.result = 0;
    }

    push_back(item) {
        const node = new Node(item);

        if(this.size() === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node; 
        }

        this.length +=1;
    }

    pop_front() {
        if(this.size() === 0) return -1;
        const popItem = this.head;
        this.head = this.head.next;

        if(this.size() === 1) {
            this.head = null;
        } else {
            this.head.prev = null;
        }

        this.length -=1;
        if(popItem.item[2] > this.result) this.result = popItem.item[2];
        return popItem.item;
    }

    size() {
        return this.length;
    }

    empty() {
        if(this.length === 0) return false;
        return true;
    }
}

const deque = new Deque();

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let stage = 0;

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(input[i][j] != -1) stage += 1;
        if(input[i][j] === 1) deque.push_back([i, j, 0]);
    }
}

while(deque.empty()) {
    [i, j, count] = deque.pop_front();
    stage -= 1;

    for(let k = 0; k < 4; k++) {
        const ti = i + dx[k];
        const tj = j + dy[k];

        if(ti >= n || ti < 0 || tj >= m || tj < 0) continue;
        if(input[ti][tj] === 0) {
            input[ti][tj] = 1;
            deque.push_back([ti, tj, count + 1]);
        }
    }
}

console.log(stage === 0 ? deque.result : -1);
