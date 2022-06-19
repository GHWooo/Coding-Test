# bfs로 풀이
# 정해진 map 안에서 너비 우선 탐색으로 해결하면 되는 문제
# 최단 거리를 출력해야 하기 때문에 map에 마킹 할 때 거리로 마킹

import sys
from collections import deque

# map의 크기를 입력 받음
N, M = map(int, sys.stdin.readline().split())

# Map 리스트
Map = []

# 행 개수 만큼 열들을 입력 받음
for i in range(N):
    Map.append(list(map(int, sys.stdin.readline().rstrip())))

# 상하좌우를 확인하기 위한 방향 값
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

# 너비 우선 탐색
def bfs():
    # deque를 생성하고 시작 노드인 (0, 0)을 넣어줌
    dq = deque()
    dq.append([0, 0])

    # deque의 요소가 존재 할 때까지 반복
    while dq:
        # 시작 노드의 x, y 좌표를 변수로 받아주고 삭제
        # 요소에 들어가는 좌표 순서와 
        # 우리가 인지하는 x, y 좌표의 순서는 반대이기 때문에 주의
        x = dq[0][1]
        y = dq[0][0]
        dq.popleft()

        # 만약 목적지 노드에 도착 했다면
        if x == M-1 and y == N-1:
            # 결과를 출력하고 반복문 탈출
            print(Map[y][x])
            break
        # 목적지 노드가 아니라면
        else:
            # 상하좌우 중 갈수 있는 노드를 확인
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                # 만약 가려는 노드가 범위에 충족되고 아직 마킹하지 않은 노드라면
                if 0 <= nx < M and 0 <= ny < N and Map[ny][nx] == 1:
                    # 최단 거리를 계산하기 위해 '전에 왔던 거리 +1' 의 값을 방문할 노드에 마킹 해줌
                    Map[ny][nx] = Map[y][x] + 1
                    # 마킹한 노드를 deque에 넣어줌
                    dq.append([ny, nx])

# 실행
bfs() 