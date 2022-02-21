# BFS, DFS 둘 다 가능
# DFS 풀이인 재귀함수를 이용하여 풀이

import sys
# 런타임 에러를 잡기 위해 재귀 깊이를 설정
sys.setrecursionlimit(10000)

# 케이스의 수 입력
T = int(sys.stdin.readline())

# 결과 값을 받을 리스트 생성
result = []

# 탐색을 위한 방향 값
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

# 재귀함수
def Quest(x, y):
    # x, y 값이 Map의 범위 밖이라면 False 반환
    if x < 0 or x > M-1 or y < 0 or y > N-1:
        return False

    # 해당 된 위치에 배추가 있다면
    if Map[y][x] == 1:
        # 한번 탐색한 위치는 0으로 변경
        Map[y][x] = 0

        # 상하좌우를 확인하며 재귀함수에 해당된 위치 값 전달
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            Quest(nx, ny)
        
        return True
    
    return False

# 필요한 지렁이 마리수를 카운트 하기 위한 변수
count = 0

# 케이스의 수만큼 반복
for _ in range(T):
    # 밭의 가로 값, 세로 값, 배추의 개수를 차례로 입력
    M, N, K = map(int, sys.stdin.readline().split())

    # 밭의 요소를 입력할 리스트 생성
    Map = [[0] * M for _ in range(N)]

    # 배추의 개수만큼 반복하여 배추의 위치를 입력 받고, 해당되는 Map의 요소를 1로 설정
    for _ in range(K):
        x, y = map(int, sys.stdin.readline().split())

        Map[y][x] = 1

    # Map의 모든 요소를 확인
    for y in range(N):
        for x in range(M):
            # 해당된 위치의 요소가 1이라면
            if Quest(x, y) == True:
                # 재귀함수를 통해 이어진 배추들의 위치까지 전부 0으로 하고 지렁이 마리수 +1
                count += 1

    # 한 케이스의 탐색이 끝났다면 총 지렁이 마리 수 를 결과 값에 추가 후 변수 초기화
    result.append(count)
    count = 0

# 결과 값 출력
for i in result:
    print(i)