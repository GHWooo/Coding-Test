// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = Number(require('fs').readFileSync(filePath).toString().trim());

let result = '';

const search = (answer, count) => {
  if (count >= 2) {
    let startPoint = count % 2 === 0 ? 0 : 1;
    let mid = count % 2 === 0 ? count / 2 : Math.floor(count / 2) + 1;
    let symmetry = true;

    while (startPoint < count) {
      symmetry = true;

      for (let i = startPoint; i < mid; i++) {
        if (answer[i] !== answer[mid + i - startPoint]) {
          symmetry = false;
          break;
        }
      }

      if (symmetry) break;

      startPoint += 2;
      mid++;
    }

    if (symmetry) return;
  }

  if (count === N) {
    result = answer;
    return;
  }

  const pre = Number(answer[count - 1]);

  for (let i = 1; i <= 3; i++) {
    if (pre !== i) {
      answer += `${i}`;
      search(answer, count + 1);

      if (result !== '') return;

      answer = answer.slice(0, -1);
    }
  }
};

for (let i = 1; i <= 3; i++) {
  if (result === '') {
    search(`${i}`, 1);
  }
}

console.log(result);
