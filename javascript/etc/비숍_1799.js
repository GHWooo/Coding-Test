// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);
const black = [];
const white = [];

const board = input.map((line, i) => {
  const newLine = line.split(" ").map((num, j) => {
    const integerNum = Number(num);

    if (integerNum == 1) {
      if ((i + j) % 2 === 0) black.push([i, j]);
      else white.push([i, j]);
    }
    return integerNum;
  });

  return newLine;
});

let count = 0;
let max = 0;

let saved = [];

const checkDiagonal = (x, y) => {
  for (let i = 0; i < saved.length; i++) {
    const [tx, ty] = saved[i];
    if (Math.abs(tx - x) === Math.abs(ty - y)) return false;
  }

  return true;
};

const search = (index, colorBox) => {
  if (index === colorBox.length) {
    max = Math.max(max, saved.length);
    return;
  }

  for (let i = index; i < colorBox.length; i++) {
    const [x, y] = colorBox[i];

    if (checkDiagonal(x, y)) {
      saved.push(colorBox[i]);
      search(i + 1, colorBox);
      saved.pop();
    }
  }
};

for (let i = 0; i < black.length; i++) {
  saved.push(black[i]);
  search(i + 1, black);
  saved.pop();
}

count += max;
max = 0;

for (let i = 0; i < white.length; i++) {
  saved.push(white[i]);
  search(i + 1, white);
  saved.pop();
}

count += max;

console.log(count);
