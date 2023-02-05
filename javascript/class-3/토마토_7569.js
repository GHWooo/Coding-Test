// solved

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

        if(popItem.item[3] > this.result) this.result = popItem.item[3];
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

const fs = require('fs');
[mnh, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [m, n, h] = mnh.split(' ').map(Number);

const deque = new Deque();

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

let zero_count = 0;
const tomatoes = Array.from({length: h}, () => []);

let cursor = 0;

for(let i = 0; i < h; i++) {
    for(let j = 0; j < n; j++) {
        const tomatoes_line = input[cursor++].split(' ');

        for(let k = 0; k < m; k++) {
            if(tomatoes_line[k] === '1') deque.push_back([i, j, k, 0]);
            if(tomatoes_line[k] === '0') zero_count += 1;
        }

        tomatoes[i].push(tomatoes_line);
    }
}

if(zero_count === 0) console.log(0);
else {
    while(deque.empty()) {
        [z, y, x, count] = deque.pop_front();
    
        for(let i = 0; i < 6; i++) {
            const tx = x + dx[i];
            const ty = y + dy[i];
            const tz = z + dz[i];
    
            if(tx < 0 || tx >= m || ty < 0 || ty >= n || tz < 0 || tz >= h) continue;
            if(tomatoes[tz][ty][tx] === '0') {
                tomatoes[tz][ty][tx] = '1';
                deque.push_back([tz, ty, tx, count + 1]);
                zero_count -= 1;
            }
        }
    }
    
    console.log(zero_count === 0 ? deque.result : -1);
}
