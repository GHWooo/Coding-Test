// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [init, bomb] = fs.readFileSync(filePath).toString().trim().split("\n");

const stack = [];
const compare = bomb[bomb.length - 1];

init.split("").forEach((char) => {
  if (char === compare) {
    let same = true;

    let stack_index = stack.length - 1;
    let bomb_index = bomb.length - 2;

    while (bomb_index >= 0) {
      if (stack_index < 0) {
        same = false;
        break;
      }
      if (stack[stack_index] !== bomb[bomb_index]) {
        same = false;
        break;
      }

      stack_index--;
      bomb_index--;
    }

    if (same) {
      for (let i = 0; i < bomb.length - 1; i++) stack.pop();
    } else {
      stack.push(char);
    }
  } else {
    stack.push(char);
  }
});

console.log(stack.length ? stack.join("") : "FRULA");
