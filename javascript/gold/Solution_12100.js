// solved

const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(n);
input = input.map(line => line.split(' ').map(Number));

const queue = [];
queue.push([input, 1]);

let max_result = 0;

const moveLeft = (board) => {
    const move_board = Array.from({length: n}, () => []);

    for(let i = 0; i < n; i++) {
        let temp_number = 0;
        let temp_list = [];

        for(let j = 0; j < n; j++) {
            if(board[i][j]) {
                if(temp_number) {
                    if(temp_number === board[i][j]) {
                        temp_list.push(temp_number + board[i][j]);
                        temp_number = 0;
                    } else {
                        temp_list.push(temp_number);
                        temp_number = board[i][j];
                    }
                } else {
                    temp_number = board[i][j];
                }
            }
        }
        if(temp_number) temp_list.push(temp_number);

        max_result = Math.max(max_result, ...temp_list);

        const t_len = temp_list.length

        for(let j = 0; j < n - t_len; j++) {
            temp_list.push(0);
        }   
        
        move_board[i] = temp_list;
    }

    return move_board;
}

const moveRight = (board) => {
    const move_board = Array.from({length: n}, () => []);

    for(let i = 0; i < n; i++) {
        let temp_number = 0;
        let temp_list = [];

        for(let j = n - 1; j > -1; j--) {
            if(board[i][j]) {
                if(temp_number) {
                    if(temp_number === board[i][j]) {
                        temp_list.push(temp_number + board[i][j]);
                        temp_number = 0;
                    } else {
                        temp_list.push(temp_number);
                        temp_number = board[i][j];
                    }
                } else {
                    temp_number = board[i][j];
                }
            }
        }
        if(temp_number) temp_list.push(temp_number);

        max_result = Math.max(max_result, ...temp_list);

        const t_len = temp_list.length

        for(let j = 0; j < n - t_len; j++) {
            temp_list.push(0);
        }   

        temp_list.reverse();

        move_board[i] = temp_list;
    }

    return move_board;
}

const moveUp = (board) => {
    const move_board = Array.from({length: n}, () => []);

    for(let i = 0; i < n; i++) {
        let temp_number = 0;
        let temp_list = [];

        for(let j = 0; j < n; j++) {
            if(board[j][i]) {
                if(temp_number) {
                    if(temp_number === board[j][i]) {
                        temp_list.push(temp_number + board[j][i]);
                        temp_number = 0;
                    } else {
                        temp_list.push(temp_number);
                        temp_number = board[j][i];
                    }
                } else {
                    temp_number = board[j][i];
                }
            }
        }
        if(temp_number) temp_list.push(temp_number);

        max_result = Math.max(max_result, ...temp_list);

        const t_len = temp_list.length

        for(let j = 0; j < n - t_len; j++) {
            temp_list.push(0);
        }   

        for(let j = 0; j < n; j++) {
            move_board[j][i] = temp_list[j];
        }
    }

    return move_board;
}

const moveDown = (board) => {
    const move_board = Array.from({length: n}, () => []);
    
    for(let i = 0; i < n; i++) {
        let temp_number = 0;
        let temp_list = [];

        for(let j = n - 1; j > -1; j--) {
            if(board[j][i]) {
                if(temp_number) {
                    if(temp_number === board[j][i]) {
                        temp_list.push(temp_number + board[j][i]);
                        temp_number = 0;
                    } else {
                        temp_list.push(temp_number);
                        temp_number = board[j][i];
                    }
                } else {
                    temp_number = board[j][i];
                }
            }
        }
        if(temp_number) temp_list.push(temp_number);

        max_result = Math.max(max_result, ...temp_list);

        const t_len = temp_list.length

        for(let j = 0; j < n - t_len; j++) {
            temp_list.push(0);
        }   

        temp_list.reverse();

        for(let j = 0; j < n; j++) {
            move_board[j][i] = temp_list[j];
        }
    }
    
    return move_board;
}

while(queue.length) {
    const [board, count] = queue.shift();

    for(let i = 0; i < 4; i++) {
        let new_board;

        if(i === 0) new_board = moveLeft(board);
        else if(i === 1) new_board = moveRight(board);
        else if(i === 2) new_board = moveUp(board);
        else new_board = moveDown(board);

        if(count < 5) queue.push([new_board, count + 1]);
    }
}

console.log(max_result);
