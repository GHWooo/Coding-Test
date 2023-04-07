// solved

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});

let cursor = 0;

function solution(input) {
    const [n, m] = input.shift().split(" ").map(Number);
    const test_case = input.map((line) => line.split(" ").map(Number));
    const number_set = Array.from({length: n + 1}, () => -1);
    
    const result = [];

	const search = (c) => {
		if(number_set[c] < 0) return c;
		number_set[c] = search(number_set[c]);
		return number_set[c];
	}
	
	const union = (a, b) => {
		const pa = search(a);
		const pb = search(b);
		
		if(pa !== pb) number_set[pa] = pb;
	}
	
	test_case.forEach(([f, a, b]) => {
		if(f === 0) {
			union(a, b);
		} else {
			if(search(a) === search(b)) result.push("YES");
			else result.push("NO");
		}
	})
	
	console.log(result.join('\n'));
}