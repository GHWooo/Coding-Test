// solved

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

class Node {
	constructor(item) {
		this.item = item;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(root) {
		const root_node = new Node(root);
		this.root = root_node;
		this.result = '';
	}
	
	add(item) {
		const node = new Node(item);
		
		const cursor = this.root;
		this.down(node, cursor);
	}
	
	down(node, cursor) {
		if(node.item < cursor.item) {
			if(cursor.left) this.down(node, cursor.left);
			else cursor.left = node;
		} else {
			if(cursor.right) this.down(node, cursor.right);
			else cursor.right = node;
		}
	}
	
	postorder() {
		this.traverse(this.root);
		
		return this.result;
	}
	
	traverse(cursor) {
		if(cursor.left) this.traverse(cursor.left);
		if(cursor.right) this.traverse(cursor.right);
		
		this.result += (cursor.item + '\n');
	}
}

const tree = new Tree(input[0]);

for(let i = 1; i < input.length; i++) tree.add(input[i]);

console.log(tree.postorder());