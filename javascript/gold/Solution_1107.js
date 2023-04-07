// solved

const fs = require('fs');
const [n, m, break_btn] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const goal_ch = Number(n);

const break_list = break_btn ? break_btn.split(' ') : [];

let min = Math.abs(goal_ch - 100);

for(let i = 0; i <= 999_900; i++) {
    let enter_possible = true;

    for(let j = 0; j < break_list.length; j++) {
        if(`${i}`.includes(break_list[j])) {
            enter_possible = false;
            break;
        }
    }

    if(enter_possible) {
        const move_count = `${i}`.length + Math.abs(goal_ch - i);
        if(min > move_count) min = move_count
    } 
}

console.log(min);