// solved

const fs = require('fs');
let [n, inorder, postorder] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(n);

postorder = postorder.split(' ').map(Number);
const root = postorder[n - 1];
let root_index;

inorder = inorder.split(' ').map((node, index) => {
	const int_node = Number(node);
	if(int_node === root) root_index = index;
	
	return int_node;
});

let result = [];

const solution = (sin, ein, spost, epost, croot_index) => {
	result.push(inorder[croot_index]);
	
	if(croot_index > sin) {
		const new_root = postorder[croot_index - (sin - spost + 1)];
		let new_root_index;
		
		for(let i = 0; i < ein + 1; i++) {
			if(new_root === inorder[i]) new_root_index = i;
		}
		
		const new_sin = sin;
		const new_ein = croot_index - 1;
		const new_spost = spost;
		const new_epost = croot_index - (sin - spost + 1);
		
		solution(new_sin, new_ein, new_spost, new_epost, new_root_index);
	}
	if(croot_index < ein) {
		const new_root = postorder[epost - 1];
		let new_root_index;
		
		for(let i = croot_index + 1; i <= ein; i++) {
			if(new_root === inorder[i]) new_root_index = i;
		}
		
		const new_sin = croot_index + 1;
		const new_ein = ein;
		const new_spost = croot_index - (sin - spost);
		const new_epost = epost - 1;
		
		solution(new_sin, new_ein, new_spost, new_epost, new_root_index);
	}
}

solution(0, n - 1, 0, n - 1, root_index);

console.log(result.join(' '));
