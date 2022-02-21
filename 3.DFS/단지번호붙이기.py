# BFS, DFS 둘 다 풀이가 가능합니다
# DFS 풀이인 재귀함수로 풀었습니다

import sys

# 지도의 크기 입력
N = int(sys.stdin.readline())

# 지도를 저장할 리스트, 결과 값을 저장할 리스트 생성
Map = []
result = []

# 지도의 요소 입력
for _ in range(N):
    Map.append(list(map(int, sys.stdin.readline().rstrip())))

# 탐색을 위한 방향 값
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

# 재귀함수
def Quest(i, j):

    # Map의 범위 밖이라면 False 반환
    if i < 0 or i >= N or j < 0 or j >= N:
        return False

    # Map의 요소가 1이라면
    if Map[i][j] == 1:
        # 전역 변수로 받아와 단지수 +1
        global count
        count += 1
        # 확인한 위치이라면 0으로 초기화
        Map[i][j] = 0

        # 상하좌우를 확인하며 재귀함수 호출
        for k in range(4):
            ni = i + dx[k]
            nj = j + dy[k]
            Quest(ni, nj)

        return True

    return False

# 이어진 단지수를 입력 받기 위한 변수
count = 0

# Map의 요소를 하나씩 확인
for i in range(N):
    for j in range(N):
        # Map의 요소가 1이라면
        if Quest(i, j) == True:
            # 재귀함수를 통해 반환된 단지수를 결과 리스트에 입력
            result.append(count)
            # 다음 단지 수를 입력 받기 위해 0으로 초기화
            count = 0

# 오름차순으로 정렬
result.sort()
# 결과 출력
print(len(result))
for i in result:
    print(i)