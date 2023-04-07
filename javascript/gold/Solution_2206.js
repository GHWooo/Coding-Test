// solved

class Node {
    constructor(x, y, c, w) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.w = w;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.back = null;
    }
  
    isEmpty() {
      return this.front === null && this.back === null;
    }
    
    add(x, y, c, w) {
      const node = new Node(x, y, c, w);
      
      if (this.isEmpty()) this.front = node;
      else this.back.next = node;
  
      this.back = node;
    }
  
    poll() {
      if (this.isEmpty()) return false;
      
      const answer = this.front;
      this.front = this.front.next;
      
      if(this.front === null) this.back = null;
      
      return answer;
    }
  }
  
  const fs = require('fs');
  [nm, ...board] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, m] = nm.split(' ').map(Number);
  
  board = board.map(line => line.split('').map(Number));
  
  let min;
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => Array(2).fill(false)));
  
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  
  const bfs = () => {
      const queue = new Queue();
      queue.add(0, 0, 1, true);
      
      visited[0][0][0] = true;
      
      while(!queue.isEmpty()) {
          const cur = queue.poll();
          const [x, y, cnt, broken] = [cur.x, cur.y, cur.c, cur.w];
          
          if(x === n - 1 && y === m - 1) {
              min = cnt;
              return;
          }
          
          if(visited[x][y][broken]) continue;
          visited[x][y][broken] = true;
          
          for(let i = 0; i < 4; i++) {
              const nx = x + dx[i];
              const ny = y + dy[i];
              let nBroken = broken;
              
              if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
              
              if(board[nx][ny]) {
                  if(nBroken) nBroken = false;
                  else continue;
              }
              
              queue.add(nx, ny, cnt + 1, nBroken);
          }
      }
  }
  
  bfs();
  
  console.log(!min ? -1 : min);