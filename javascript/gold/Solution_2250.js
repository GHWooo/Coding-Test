// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(N);
const tree = Array.from({length: N + 1}, () => Array(3).fill(-1));

input.forEach((cur) => {
    const [p, l, r] = cur.split(' ');

    tree[p][1] = l;
    tree[p][2] = r;

    if(l > 0) tree[l][0] = p;
    if(r > 0) tree[r][0] = p;
});

let parent = 1;
let temp = tree[1][0];

while(temp !== -1) {
    parent = temp;
    temp = tree[parent][0];
}

const treeBoard = Array(N).fill(false);

let count = 0;
let maxLevel = 1;

const search = (current, level) => {
    maxLevel = Math.max(maxLevel, level);
    
    if(tree[current][1] > 0) search(tree[current][1], level + 1);

    treeBoard[count++] = level;

    if(tree[current][2] > 0) search(tree[current][2], level + 1);
}

search(parent, 1);

const depth = Array.from({length: maxLevel + 1}, () => []);

let cursor = 0;

while(cursor < N) {
    const curLevel = treeBoard[cursor++];

    if(!depth[curLevel].length) depth[curLevel].push(cursor - 1);
    else depth[curLevel][1] = cursor - 1;
}

let result = [0, 0];

for(let i = 1; i <= maxLevel; i++) {
    const answer = (depth[i][1] ? depth[i][1]: depth[i][0]) - depth[i][0] + 1;

    if(result[1] < answer) result = [i, answer];
}

console.log(result.join(' '));