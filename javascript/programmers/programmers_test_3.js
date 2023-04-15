function solution(chocolate, n) {
  const h = chocolate.length;
  const w = chocolate[0].length;

  let max = 0;
  let min = Infinity;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const visited = Array.from({ length: h }, () => Array(w).fill(false));

  let tempMax = -1;

  const search = (x, y, count, state) => {
    if (count === n) {
      if (state === "a") {
        tempMax = -1;

        for (let i = 0; i < h; i++) {
          for (let j = 0; j < w; j++) {
            if (!visited[i][j]) {
              visited[i][j] = true;
              search(i, j, 1, chocolate[i][j]);
              visited[i][j] = false;
            }
          }
        }

        if (tempMax !== -1) {
          if (max < tempMax) max = tempMax;
          if (min > tempMax) min = tempMax;
        }
      } else {
        if (tempMax < state) tempMax = state;
      }

      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= h || ny < 0 || ny >= w) continue;

      if (!visited[nx][ny]) {
        visited[nx][ny] = true;

        if (state === "a") search(nx, ny, count + 1, state);
        else search(nx, ny, count + 1, state + chocolate[nx][ny]);

        visited[nx][ny] = false;
      }
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      visited[i][j] = true;
      search(i, j, 1, "a");
      visited[i][j] = false;
    }
  }

  return [min, max];
}
