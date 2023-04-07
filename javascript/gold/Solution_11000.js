// timeout
// js로 최소힙을 직접 구현해야 하는 문제
// https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-HEAP
// js 문법을 좀 더 배운뒤 다시 도전
const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n);
input = input.map(x=>x.split(' ').map(Number));
input.sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
})