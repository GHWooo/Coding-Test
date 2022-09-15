//solved
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const search = (input) =>{
    const n = parseInt(input.shift());
    const k = parseInt(input.shift());

    let queue = [];
    queue.push([n, 0]);
    let vistied = Array.from({length: 100000}, ()=>0);
    vistied[n] = 1;

    while(queue.length){
        const [current, scope] = queue.shift();
        if(current === k) {
            console.log(scope); process.exit();
        }
        const move = [current-1, current+1, current*2];
        for(m of move){
            if(!vistied[m] && m >= 0 && m <= 100000){
                vistied[m] = 1; queue.push([m, scope+1]);
            }
        }
    }
}
search(input);