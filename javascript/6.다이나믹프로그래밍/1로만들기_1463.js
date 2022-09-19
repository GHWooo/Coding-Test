// solved
const fs = require('fs');
n = fs.readFileSync('/dev/stdin').toString().trim();

let index = parseInt(n);
let visited = [];
visited[index] = 1;
let queue = [[index, 0]];

while(queue.length > 0){
    [q, s] = queue.shift();
    if(q === 1){ 
        console.log(s); break;
    }
    if(q % 3 === 0 && parseInt(q / 3) > 0){
        if(!visited[q / 3]){
            visited[q / 3] = 1;
            queue.push([q / 3, s + 1]);
        }
    }
    if(q % 2 === 0 && parseInt(q / 2) > 0){
        if(!visited[q / 2]){
            visited[q / 2] = 1;
            queue.push([q / 2, s + 1]);
        }
    }
    if(q - 1 > 0){
        if(!visited[q - 1]){
            visited[q - 1] = 1;
            queue.push([q - 1, s + 1]);
        }
    }
}
