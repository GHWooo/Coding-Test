// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [rcm, ...sharks] = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C, M] = rcm.split(" ").map(Number);

const boards = Array.from({ length: R + 1 }, () => Array(C + 1).fill(0));

let sharksInfo = [];

sharks.forEach((shark) => {
  const [r, c, s, d, z] = shark.split(" ").map(Number);

  boards[r][c] = [s, d - 1, z];
  sharksInfo.push([r, c, s, d - 1, z]);
});

let angler = 0;
let caught = 0;

while (angler < C) {
  angler++;

  for (let i = 1; i <= R; i++) {
    if (boards[i][angler] !== 0) {
      caught += boards[i][angler][2];
      boards[i][angler] = 0;
      break;
    }
  }

  const newSharksInfo = [];

  sharksInfo.forEach(([r, c, s, d, z]) => {
    if (boards[r][c] !== 0) {
      let tr = r;
      let tc = c;
      let ts = s;
      let td = d;

      while (ts > 0) {
        switch (td) {
          case 0:
            if (ts >= tr) {
              ts -= tr;
              tr = 2;
              td = 1;
            } else {
              tr -= ts;
              ts = 0;
            }
            break;
          case 1:
            if (ts > R - tr) {
              ts -= R - tr + 1;
              tr = R - 1;
              td = 0;
            } else {
              tr += ts;
              ts = 0;
            }
            break;
          case 2:
            if (ts > C - tc) {
              ts -= C - tc + 1;
              tc = C - 1;
              td = 3;
            } else {
              tc += ts;
              ts = 0;
            }
            break;
          case 3:
            if (ts >= tc) {
              ts -= tc;
              tc = 2;
              td = 2;
            } else {
              tc -= ts;
              ts = 0;
            }
            break;
        }
      }

      boards[r][c] = 0;
      newSharksInfo.push([tr, tc, s, td, z]);
    }
  });

  newSharksInfo.forEach(([r, c, s, d, z]) => {
    if (boards[r][c] === 0) {
      boards[r][c] = [s, d, z];
    } else {
      boards[r][c] = boards[r][c][2] > z ? boards[r][c] : [s, d, z];
    }
  });

  sharksInfo = [];

  boards.forEach((line, i) => {
    line.forEach((info, j) => {
      if (info !== 0) {
        sharksInfo.push([i, j, ...info]);
      }
    });
  });
}

console.log(caught);
