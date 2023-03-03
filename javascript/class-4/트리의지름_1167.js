// solved

const fs = require('fs');
[v, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
v = Number(v);
const linked = Array.from({length: v + 1}, () => []);

input.forEach((line) => {
	const [p, ...c] = line.split(' ').map(Number);
	
	let cursor = 0;
	
	while(true) {
		const node = c[cursor++];
		if(node === -1) break;
		
		const weight = c[cursor++];
		
		linked[p].push([node, weight]);
	}
});

let visited = Array(v + 1).fill(false);
let temp_node = [-1, -1];

const search = (current, sum) => {
	let end = true;

	for(let i = 0; i < linked[current].length; i++) {
		const [next, weight] = linked[current][i];
		
		if(!visited[next]) {
			end = false;
			
			visited[next] = true;
			search(next, sum + weight);
			visited[next] = false;
		}
	}
	
	if(end && sum > temp_node[1]) {
		temp_node[0] = current;
		temp_node[1] = sum;
	} 
}

visited[1] = true;
search(1, 0);
visited[1] = false;

const next_node = temp_node[0];
temp_node = [-1, -1];

visited[next_node] = true;
search(next_node, 0);

console.log(temp_node[1]);