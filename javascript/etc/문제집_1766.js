// solved

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
        this.pre = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        if(this.front === null) return true;
        return false;
    }

    add(item) {
        const node = new Node(item);

        if(!this.isEmpty()) {
            this.back.next = node;
            node.pre = this.back;
        } else {
            this.front = node;
        }

        this.back = node;

        this.up(node);
    }

    up(node) {
        while(node.pre !== null) {
            const preNode = node.pre;
            if(preNode.item < node.item) break;

            if(node.next !== null) node.next.pre = preNode;
            if(preNode.pre !== null) preNode.pre.next = node;

            node.pre = preNode.pre;
            preNode.pre = node;

            preNode.next = node.next;
            node.next = preNode;

            if(this.front === preNode) this.front = node;
            if(this.back === node) this.back = preNode;
        }
    }

    poll() {
        if(this.isEmpty()) return false;

        const answer = this.front.item;
        this.front = this.front.next;

        if(this.front !== null) this.front.pre = null;
        
        return answer;
    }
}

const fs = require('fs');
[nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);

const line = Array(n + 1).fill(0);
const linked = Array.from({length: n + 1}, () => []);

input.forEach(element => {
    const [s, e] = element.split(' ').map(Number);

    line[e]++;
    linked[s].push(e);
});

const queue = new Queue();

for(let i = 1; i <= n; i++) {
    if(line[i] === 0) {
        queue.add(i);
    }
}

const result = [];

while(!queue.isEmpty()) {
    const current = queue.poll();
    for(let i = 0; i < linked[current].length; i++) {
        const next = linked[current][i];
        if(line[next] > 0) {
            line[next]--;

            if(line[next] === 0) {
                queue.add(next);
            }
        }
    }

    result.push(current);
}

console.log(result.join(' '));