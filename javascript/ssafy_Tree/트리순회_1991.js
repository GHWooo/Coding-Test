// solved

const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tree = {};
input.forEach(line => {
	const [parent, left, right] = line.split(' ');
	
	tree[parent] = {"left": left, "right": right};
});

const result = ['', '', ''];

const preorder = (current) => {
	result[0] += current;
	if(tree[current].left !== '.') preorder(tree[current].left);
	if(tree[current].right !== '.') preorder(tree[current].right);
}

const inorder = (current) => {
	if(tree[current].left !== '.') inorder(tree[current].left);
	result[1] += current;
	if(tree[current].right !== '.') inorder(tree[current].right);
}

const postorder = (current) => {
	if(tree[current].left !== '.') postorder(tree[current].left);
	if(tree[current].right !== '.') postorder(tree[current].right);
	result[2] += current;
}

preorder('A');
inorder('A');
postorder('A');

console.log(result.join('\n'));