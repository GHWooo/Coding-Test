// solved

const fs = require("fs");
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const result = [];

const solution = (start, end) => {
  const visited = Array.from({ length: 10000 }, () => false);
  visited[start] = true;
  
  const queue = [[start, ""]];

  while (queue.length) {
    let [current, path] = queue.shift();
    
    if (current === end) {
      result.push(path);
      return;
    }

    const answer_D = (current * 2) % 10000;
    if (!visited[answer_D]) {
      visited[answer_D] = true;
      queue.push([answer_D, path + "D"]);
    }

    const answer_S = current === 0 ? 9999 : current - 1;
    if (!visited[answer_S]) {
      visited[answer_S] = true;
      queue.push([answer_S, path + "S"]);
    }

    const answer_L = (current % 1000) * 10 + Math.floor(current / 1000);
    if (!visited[answer_L]) {
      visited[answer_L] = true;
      queue.push([answer_L, path + "L"]);
    }

    const answer_R = (current % 10) * 1000 + Math.floor(current / 10);
    if (!visited[answer_R]) {
      visited[answer_R] = true;
      queue.push([answer_R, path + "R"]);
    }
  }
};

input.forEach(element => {
	const [start, end] = element.split(" ").map(Number);
	solution(start, end);
})

console.log(result.join("\n"));