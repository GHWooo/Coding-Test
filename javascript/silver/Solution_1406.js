// solved

const fs = require('fs');
[s, m, ...question] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
s = s.split('');
const left_stack = [];
const right_stack = [];
 
s.forEach(item => {
	left_stack.push(item);
})
 
question.forEach(element => {
	if(element.length === 1) {
		if(element === 'L' && left_stack.length) {
			right_stack.push(left_stack.pop());
		}
		if(element === 'D' && right_stack.length) {
			left_stack.push(right_stack.pop());
		}
		if(element === 'B' && left_stack.length) {
			left_stack.pop();
		}
	} else {
		[func, item] = element.split(' ');
		left_stack.push(item);
	}
})

right_stack.reverse();
 
console.log(`${left_stack.join('')}${right_stack.join('')}`);