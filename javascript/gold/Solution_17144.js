// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [rct, ...boards] = fs.readFileSync(filePath).toString().trim().split("\n");

let [r, c, t] = rct.split(" ").map(Number);

const cleaner = [];
let dustPosi = [];

boards = boards.map((line, i) => {
  const newLine = line.split(" ").map((element, j) => {
    const dust = Number(element);

    if (dust === -1) {
      cleaner.push([i, j]);
    } else if (dust > 4) {
      dustPosi.push([i, j]);
    }

    return dust;
  });

  return newLine;
});

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const top = () => {
  let tx = cleaner[0][0];
  let ty = cleaner[0][1] + 2;

  let temp1;
  let temp2 = boards[tx][ty - 1];
  boards[tx][ty - 1] = 0;

  while (ty < c) {
    temp1 = boards[tx][ty];
    boards[tx][ty] = temp2;
    temp2 = temp1;

    ty++;
  }
  ty--;
  tx--;
  while (tx >= 0) {
    temp1 = boards[tx][ty];
    boards[tx][ty] = temp2;
    temp2 = temp1;

    tx--;
  }
  tx++;
  ty--;
  while (ty >= 0) {
    temp1 = boards[tx][ty];
    boards[tx][ty] = temp2;
    temp2 = temp1;

    ty--;
  }
  ty++;
  tx++;
  while (tx < cleaner[0][0]) {
    temp1 = boards[tx][ty];
    boards[tx][ty] = temp2;
    temp2 = temp1;

    tx++;
  }
};
const bottom = () => {
  let tx = cleaner[1][0];
  let ty = cleaner[1][1] + 2;

  let temp1;
  let temp2 = boards[tx][ty - 1];
  boards[tx][ty - 1] = 0;

  while (ty < c) {
    temp1 = boards[tx][ty];
    boards[tx][ty] = temp2;
    temp2 = temp1;

    ty++;
  }
  ty--;
  tx++;
  while (tx < r) {
    temp1 = boards[tx][ty];
    boards[tx][ty] = temp2;
    temp2 = temp1;

    tx++;
  }
  tx--;
  ty--;
  while (ty >= 0) {
    temp1 = boards[tx][ty];
    boards[tx][ty] = temp2;
    temp2 = temp1;

    ty--;
  }
  ty++;
  tx--;
  while (tx > cleaner[1][0]) {
    temp1 = boards[tx][ty];
    boards[tx][ty] = temp2;
    temp2 = temp1;

    tx--;
  }
};

while (t) {
  t--;

  const nextDust = [];

  dustPosi.forEach(([x, y]) => {
    const nd = Math.floor(boards[x][y] / 5);
    let spreadCnt = 0;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
      if (boards[nx][ny] === -1) continue;

      nextDust.push([nx, ny, nd]);
      spreadCnt++;
    }

    boards[x][y] -= nd * spreadCnt;
  });

  nextDust.forEach(([x, y, d]) => {
    boards[x][y] += d;
  });

  top();
  bottom();

  if (!t) break;

  const newDustPosi = [];

  boards.forEach((line, i) => {
    line.forEach((dust, j) => {
      if (dust > 4) newDustPosi.push([i, j]);
    });
  });

  dustPosi = newDustPosi;
}

let sum = 0;

boards.forEach((line) => {
  sum += line.reduce((a, b) => a + b);
});

console.log(sum + 2);
