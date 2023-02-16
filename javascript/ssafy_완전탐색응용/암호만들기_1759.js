// solved

const fs = require('fs');
[lc, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [l, c] = lc.split(' ').map(Number);
input = input.split(' ').sort();

const result = [];
const vowel = ['a', 'e', 'i', 'o', 'u'];

const solution = (current, vowel_count, index) => {
	if(current.length === l) {
		if(vowel_count > 0) result.push(current);
	}
	
	for(let i = index + 1; i < c; i++) {
		const next = input[i];
		const next_vowel_count = vowel.includes(next) ? vowel_count + 1 : vowel_count;
		
		if(next_vowel_count <= l - 2) solution(current + next, next_vowel_count, i);
	}
}

for(let i = 0; i < c; i++) {
	const init = input[i];
	const vowel_count = vowel.includes(init) ? 1 : 0;
	
	solution(init, vowel_count, i);
}

console.log(result.join('\n'));