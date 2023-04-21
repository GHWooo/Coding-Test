// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, buildings] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const stack = [];
const result = [];

buildings.split(" ").forEach((height, index) => {
  height = Number(height);

  let answerIndex = 0;

  while (stack.length) {
    const [curHeight, curIndex] = stack.pop();

    if (curHeight >= height) {
      answerIndex = curIndex;

      if (curHeight > height) stack.push([curHeight, curIndex]);

      break;
    }
  }

  result.push(answerIndex);

  stack.push([height, index + 1]);
});

console.log(result.join(" "));
