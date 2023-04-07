//solved
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dfs = (connected, start, queue) => {
    while(connected[start].length > 0){
        const temp = connected[start].shift();
        if(queue.includes(temp)) continue;
        queue.push(temp);
        dfs(connected, temp, queue);
    }
}
const bfs = (connected, start, queue) => {
    while(connected[start].length > 0){
        const temp = connected[start].shift();
        if(queue.includes(temp)) continue;
        queue.push(temp);
    }
    queue.map(x => {
        if(connected[x].length > 0) bfs(connected, x, queue);
    });
}
const search = (input) => {
    [nmv, ...graph] = input;
    nmv = nmv.split(' ').map(x => {
        return parseInt(x);
    });
    graph = graph.map(x => x.split(' ').map(y => {
        return parseInt(y);
    }));

    const connected = Array.from({length: nmv[0]+1}, ()=>[]);
    graph.map(([x, y]) => {
        connected[x].push(y); connected[y].push(x);
    });
    connected.map(x => {
        x.sort((a, b) => {
            return a - b;
        });
    })

    const dfsConnected = connected.map(x=> {
        return x.slice();
    })
    const bfsConnected = connected.map(x=> {
        return x.slice();
    })

    let queue = [nmv[2]];
    dfs(dfsConnected, nmv[2], queue);
    for(i of queue) process.stdout.write(i + ' ');
    process.stdout.write('\n');

    queue = [nmv[2]];
    bfs(bfsConnected, nmv[2], queue);
    for(i of queue) process.stdout.write(i + ' ');
}
search(input);