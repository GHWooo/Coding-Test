// solved

function solution(men, women) {
  let answer = 0;

  const vaildMen = Array(men.length).fill(true);
  const vaildWomen = Array(women.length).fill(true);

  const menLovePoint = Array.from({ length: men.length }, () => Array(women.length).fill(0));
  const womenLovePoint = Array.from({ length: women.length }, () => Array(men.length).fill(0));

  men.forEach(([mPoint, mState], i) => {
    women.forEach(([wPoint, wState], j) => {
      const tempPoint = Math.abs(mPoint - wPoint);

      menLovePoint[i][j] = mState === 1 ? 1000 - tempPoint : tempPoint;
      womenLovePoint[j][i] = wState === 1 ? 1000 - tempPoint : tempPoint;
    });
  });

  const menChoice = Array(men.length).fill(-1);
  const womenChoice = Array(women.length).fill(-1);

  while (true) {
    let tempCount = 0;

    vaildMen.forEach((state, i) => {
      if (state) {
        let max = 0;

        menLovePoint[i].forEach((point, j) => {
          if (max < point && vaildWomen[j]) {
            max = point;
            menChoice[i] = j;
          }
        });
      }
    });

    vaildWomen.forEach((state, i) => {
      if (state) {
        let max = 0;

        womenLovePoint[i].forEach((point, j) => {
          if (max < point && vaildMen[j]) {
            max = point;
            womenChoice[i] = j;
          }
        });
      }
    });

    vaildMen.forEach((state, i) => {
      if (state && vaildWomen[menChoice[i]]) {
        if (i === womenChoice[menChoice[i]]) {
          vaildMen[i] = false;
          vaildWomen[menChoice[i]] = false;

          womenChoice[menChoice[i]] = -1;
          menChoice[i] = -1;

          tempCount++;
        }
      }
    });

    if (tempCount) {
      answer += tempCount;
    } else break;
  }

  return answer;
}
