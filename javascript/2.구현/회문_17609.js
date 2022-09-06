const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
[t, ...palindromes] = input

const doubleCheck = (left, right, string) => {
    while(left < right){
        if(string[left] !== string[right]) return false;
        left++; right--;
    }
    return true;
}
const check = (string) => {
    let left = 0;
    let right = string.length-1;
    let result = 0;
    while(left < right && result < 2){
        if(string[left] !== string[right]){
            result++;
            const temp1 = doubleCheck(left+1, right, string);
            const temp2 = doubleCheck(left, right-1, string);
            if(!temp1 && !temp2) result++;
            break;
        }
        left++; right--;
    }
    return result;
}
const implement = (palindromes) => {
    for(let i = 0; i < palindromes.length; i++){
        console.log(check(palindromes[i]));
    }
}
implement(palindromes);