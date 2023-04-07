// solved

const fs = require('fs');
[a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

const solution = (exponent) => {
	if(exponent === BigInt(1)) {
		return a % c;
	}
	
	const next = solution(exponent / BigInt(2)) % c;
	
	if(exponent % BigInt(2) === BigInt(0)) {
		return (next * next) % c;
	} 
	
	return (next * next * (solution(BigInt(1)) % c)) % c;
}

console.log(String(solution(b) % c));