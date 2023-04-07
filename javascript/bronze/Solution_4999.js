// solved

const fs = require("fs");
const [a, q] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = a.length >= q.length ? "go" : "no";

console.log(answer);
