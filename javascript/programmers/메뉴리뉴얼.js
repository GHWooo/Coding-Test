// solved

function solution(orders, course) {
  const answer = [];
  const answerObj = {};

  const vaildCount = Array(11).fill(false);

  course.forEach((num) => (vaildCount[num] = true));

  const search = (ary, index, result) => {
    if (vaildCount[result.length]) {
      const resultMenu = result.sort().join("");

      if (answerObj[resultMenu]) answerObj[resultMenu]++;
      else answerObj[resultMenu] = 1;
    }

    if (index === ary.length - 1) return;

    for (let i = index + 1; i < ary.length; i++) {
      result.push(ary[i]);
      search(ary, i, result);
      result.pop();
    }
  };

  orders.forEach((order) => {
    const orderAry = order.split("").sort();

    for (let i = 0; i < orderAry.length - 1; i++) {
      const result = [orderAry[i]];

      search(orderAry, i, result);
    }
  });

  const maxLen = Array(11).fill(2);
  const answerOfLen = Array.from({ length: 11 }, () => []);

  for (let key in answerObj) {
    if (maxLen[key.length] === answerObj[key]) answerOfLen[key.length].push(key);
    else if (maxLen[key.length] < answerObj[key]) {
      maxLen[key.length] = answerObj[key];
      answerOfLen[key.length] = [key];
    }
  }

  answerOfLen.forEach((last) => {
    last.forEach((l) => answer.push(l));
  });

  answer.sort();

  return answer;
}
