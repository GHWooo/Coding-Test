// solved
const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const check_prime = (number) => {
    if(number % 2 === 0) return false;

    const sqrt = parseInt(Math.sqrt(number));

    for(let i = 3; i <= sqrt; i += 2) {
        if(number % i === 0) return false;
    }
    return true;
}

if(N === 1) console.log(0);
else if(N === 2 || N === 3) console.log(1);
else {
    let result = 0;
    let point = 2;

    const prime = [];
    prime[2] = true;
    prime[3] = true;

    while(point <= N) {
        if(prime[point] === false) {
            point += 1;
            continue;
        }
        if(prime[point] === undefined && !check_prime(point)) {
            prime[point] = false;
            continue;
        } 

        let sum = point;

        for(let i = point + 1; i <= N; i++) {
            if(prime[i] === false) continue;
            else if(prime[i] === undefined) {
                if(check_prime(i)) {
                    prime[i] = true;
                    sum += i;
                }
                else prime[i] = false;
            } 
            else {
                sum += i;
            }

            if(sum >= N) break;
        }

        if(sum === N) result += 1;

        point += 1;
    }

    console.log(result);
}