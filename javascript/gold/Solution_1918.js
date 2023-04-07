// solved

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.top = null;
    }

    isEmpty() {
        if(this.size == 0) return true;
        return false;
    }

    isTop() {
        if(this.size == 0) return false;
        return this.top.item;
    }

    add(item) {
        const node = new Node(item);

        if(this.size > 0) node.next = this.top;
            
        this.top = node;
        this.size++;
    }

    poll() {
        if(this.size == 0) return false;

        const answer = this.top.item;

        this.top = this.top.next;
        this.size--;

        return answer;
    }
}

const fs = require('fs');
const formula = fs.readFileSync('/dev/stdin').toString().trim().split('');

let result = '';
const stack = new Stack();

for(let i = 0; i < formula.length; i++) {
    const current = formula[i];

    if(current >= "A" && current <= "Z") {
        result += current;
    }
    else if(current === '(') stack.add(current);
    else if(current === ')') {
        while(!stack.isEmpty() && stack.isTop() !== '(') {
            result += stack.poll();
        }
        stack.poll();
    }
    else if(current === '+' || current === '-') {
        while(!stack.isEmpty() && stack.isTop() !== '(') {
            result += stack.poll();
        }
        stack.add(current);
    }
    else if(current === '*' || current === '/') { 
        while(!stack.isEmpty() && (stack.isTop() === '*' || stack.isTop() === '/')) {
            result += stack.poll();
        }
        stack.add(current);
    }
}

while(!stack.isEmpty()) {
    result += stack.poll();
}

console.log(result);