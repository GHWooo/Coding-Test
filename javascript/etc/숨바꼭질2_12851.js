// solved

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
  
class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    isEmpty() {
        if(this.size === 0) return true;
        return false;
    }

    add(item) {
        const node = new Node(item);

        if (this.front === null) this.front = node;
        else this.back.next = node;

        this.back = node;
        this.size++;
    }

    poll() {
        const answer = this.front.item;

        this.front = this.front.next;
        this.size--;

        return answer;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', function (line) {
    input = line.split(' ').map(Number);
})
  .on('close', function () {
    solution(input);
    process.exit();
});

function solution(input) {
    const [n, k] = input;

    let minTime = Infinity;
    let count = 0;

    const queue = new Queue();
    queue.add([n, 0]);

    const visited = Array(100_001).fill(false);

    while (!queue.isEmpty()) {
        const [current, time] = queue.poll();

        if(time > minTime) break; 
    
        if (current === k) {
            if(minTime === Infinity) minTime = time;

            count++;
        }
        
        visited[current] = true;

        if (current > 0 && !visited[current - 1]) {
            queue.add([current - 1, time + 1]);
        }
        if (current * 2 <= 100_000 && !visited[current * 2]) {
            queue.add([current * 2, time + 1]);
        }
        if (current < 100_000 && !visited[current + 1]) {
            queue.add([current + 1, time + 1]);
        }
    }

    console.log(`${minTime}\n${count}`);
}