// solved

const fs = require('fs');
[nm, ...board] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);

const home = [];
const store = [];

for(let i = 0; i < n; i++) {
	const line = board[i].split(' ');
	
	for(let j = 0; j < n; j++) {
		if(line[j] === '1') home.push([i, j]);
		if(line[j] === '2') store.push([i, j]);
	}
}

const getMin = () => {
  let sum = 0;
  
  home.forEach(([hx, hy]) => {
    let min = Infinity;
    
    store.forEach(([cx, cy], index) => {
      if (check[index] === true) {
        
        min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
    });
    
    sum += min;
  });
  
  return sum;
};

const check = new Array(store.length).fill(false);
let result = Infinity;

const solution = (index, count) => {
  if (count === m) {
    result = Math.min(result, getMin());
    return;
  } 
  else {
    for (let i = index; i < store.length; i++) {
      if (check[i] === true) continue;
      
      check[i] = true;
      solution(i, count + 1);
      check[i] = false;
    }
  }
};

solution(0, 0);
console.log(result);
