// solved

class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}
  
class Stack{
    constructor(){
        this.topOfStack = null;
        this.length = 0;
    }

    push(item){
        const node = new Node(item);
        
        if(this.topOfStack !== null){
	        node.next = this.topOfStack; 
        }
        
        this.topOfStack = node;
        this.length += 1;
    }

    pop(){
        if(this.length === 0) return -1;
        
        const popItem = this.topOfStack;
        this.topOfStack = popItem.next;
        this.length -= 1;

        return popItem.item
    }

    empty(){
        if(this.length === 0) return true;
        else return false;
    }

    top(){
        if(this.length === 0) return false;
        return this.topOfStack.item; 
    }
}

const fs = require('fs');
[n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = Number(n);
input = input.split(' ').map(Number);

const result = Array.from({length: n}, () => -1);

const stack = new Stack();
stack.push(input[n - 1]);

for(let i = n - 2; i > -1; i--) {
	while(!stack.empty()) {
		if(input[i] < stack.top()) {
			result[i] = stack.top();
			break;
		} else {
			stack.pop();
		}
	}
	
	stack.push(input[i]);
}

console.log(result.join(' '));