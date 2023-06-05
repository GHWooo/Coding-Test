// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let inputCursor = 0;
const scoreBoard = {
  3: 1,
  4: 1,
  5: 2,
  6: 3,
  7: 5,
  8: 11,
};

const w = Number(input[inputCursor++]);
const dictionary = {};

for (let i = 0; i < w; i++) {
  const word = input[inputCursor++];

  if (dictionary[word[0]]) dictionary[word[0]].push(word);
  else dictionary[word[0]] = [word];
}
inputCursor++;

const b = Number(input[inputCursor++]);
const result = [];

let maxScore, longWord, countWord, findCheck, board;

const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

const searchWord = (count, x, y, goal) => {
  if (count === goal.length) {
    if (!findCheck[goal]) {
      maxScore += scoreBoard[goal.length] ? scoreBoard[goal.length] : 0;
      countWord++;
      findCheck[goal] = true;

      if (longWord.length < goal.length) longWord = goal;
      else if (longWord.length === goal.length) {
        const answer = [longWord, goal].sort()[0];

        longWord = answer;
      }
    }

    return;
  }

  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= 4 || ny >= 4) continue;

    if (board[nx][ny] === goal[count]) {
      board[nx][ny] = false;
      searchWord(count + 1, nx, ny, goal);
      board[nx][ny] = goal[count];
    }
  }
};

for (let i = 0; i < b; i++) {
  maxScore = 0;
  longWord = '';
  countWord = 0;
  findCheck = {};
  board = [];

  for (let j = 0; j < 4; j++) {
    board.push(input[inputCursor++].split(''));
  }
  inputCursor++;

  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      const start = board[j][k];

      if (dictionary[start]) {
        dictionary[start].forEach((dicWord) => {
          if (!findCheck[dicWord]) {
            board[j][k] = false;
            searchWord(1, j, k, dicWord);
            board[j][k] = start;
          }
        });
      }
    }
  }

  result.push(`${maxScore} ${longWord} ${countWord}`);
}

console.log(result.join('\n'));
