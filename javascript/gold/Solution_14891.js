// solved

class Pole {
  constructor(item) {
    this.item = item;
    this.left = null;
    this.right = null;
  }
}

class Gear {
  constructor(poles) {
    let current;

    poles.split("").forEach((pole, index) => {
      pole = Number(pole);

      const newPole = new Pole(pole);

      if (index === 0) {
        this.top = newPole;
        current = newPole;
      } else {
        current.right = newPole;
        newPole.left = current;
        current = newPole;

        if (index === 2) this.rightEnd = newPole;
        if (index === 6) this.leftEnd = newPole;
      }

      if (index === 7) {
        current.right = this.top;
        this.top.left = current;
      }
    });
  }

  spin(direc) {
    if (direc === 1) {
      this.leftEnd = this.leftEnd.left;
      this.rightEnd = this.rightEnd.left;
      this.top = this.top.left;
    } else {
      this.leftEnd = this.leftEnd.right;
      this.rightEnd = this.rightEnd.right;
      this.top = this.top.right;
    }
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let cursor = 0;

const gears = [];

for (let i = 0; i < 4; i++) {
  const gear = new Gear(input[cursor++]);
  gears[cursor] = gear;
}

const n = Number(input[cursor++]);

const leftCheck = (index, direc) => {
  if (index > 1) {
    if (gears[index].leftEnd.item !== gears[index - 1].rightEnd.item) {
      leftCheck(index - 1, -direc);
    }
  }

  gears[index].spin(direc);
};

const rightCheck = (index, direc) => {
  if (index < 4) {
    if (gears[index].rightEnd.item !== gears[index + 1].leftEnd.item) {
      rightCheck(index + 1, -direc);
    }
  }

  gears[index].spin(direc);
};

for (let i = 0; i < n; i++) {
  const [index, direc] = input[cursor++].split(" ").map(Number);

  if (index > 1) {
    if (gears[index].leftEnd.item !== gears[index - 1].rightEnd.item) {
      leftCheck(index - 1, -direc);
    }
  }
  if (index < 4) {
    if (gears[index].rightEnd.item !== gears[index + 1].leftEnd.item) {
      rightCheck(index + 1, -direc);
    }
  }

  gears[index].spin(direc);
}

let score = 0;

for (let i = 0; i < 4; i++) {
  if (gears[i + 1].top.item === 1) score += Math.pow(2, i);
}

console.log(score);
