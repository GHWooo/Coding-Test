// solved

const fs = require('fs');
let n = Number(fs.readFileSync('/dev/stdin').toString().trim());

if(n <= 3) {
	console.log('moo'[n - 1]);
}
else {
	let result;
	
	let k = 0;
	let s_len = 3;
	
	while(s_len < n) {
		k++;
		s_len = (k + 3) + (s_len * 2);
	}
	
	while(k >= 0) {
		let possible_s = ((s_len - (k + 3)) / 2) + 1;
		let possible_e = possible_s + (k + 2);
		
		if(possible_s <= n && possible_e >= n) {
			let mid = 'moo';
			for(let i = 0; i < k; i++) mid += 'o';
			
			console.log(mid[n - possible_s]);
			break;
		}
		
		if(n > possible_e) n -= possible_e;
		
		k--;
		s_len = possible_s - 1;
	}
}