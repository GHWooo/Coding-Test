function solution(x, y, pays) {
  let answer = [];
  answer = [0, 0, 0, 0];

  const plan = Array.from({ length: 41 }, () => []);

  pays.forEach((info) => {
    const [day, time, action] = info.split(" ");

    plan[Number(day)].push(Number(action));
  });

  for (let day = 1; day <= 30; day++) {
    const actions = plan[day];

    actions.forEach((action) => {
      if (typeof action === typeof "") {
        answer[3] += Number(action);
      } else {
        if (action > 0) {
          if (answer[2] + answer[3] < action) {
            let money = action - (answer[2] + answer[3]);
            let addMoney = 0;

            while (addMoney < money) {
              addMoney += x;
            }

            answer[0] += addMoney;
            answer[2] = addMoney - money;
            answer[3] = 0;
          } else {
            let money = action - answer[3];

            if (money > 0) {
              answer[3] = 0;
              answer[2] -= money;
            } else {
              answer[3] = Math.abs(money);
            }
          }

          plan[day + y].unshift(`${action / 10}`);
        } else {
          const tAction = Math.abs(action);

          if (answer[2] < tAction) {
            answer[1] += answer[2];
            answer[2] = 0;
          } else {
            answer[2] -= tAction;
            answer[1] += tAction;
          }
        }
      }
    });
  }

  return answer;
}
