// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, nodes, D] = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(N);
let top;
const linked = Array.from({ length: N + 1 }, () => []);

nodes.split(" ").forEach((parent, node) => {
  parent = Number(parent);

  if (parent === -1) top = node;
  else linked[parent].push(node);
});
D = Number(D);

let count = 0;

const search = (current) => {
  if (current === D) return;

  if (!linked[current].length) {
    count++;
    return;
  }

  let deleteCnt = 0;
  let childCnt = 0;

  linked[current].forEach((next) => {
    if (next === D) {
      deleteCnt++;
    } else {
      childCnt++;
      search(next);
    }
  });

  if (!childCnt && deleteCnt) count++;
};

search(top);

console.log(count);
