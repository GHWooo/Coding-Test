import sys

# 입력값 입력
N, D = map(int, sys.stdin.readline().split())

shortcutList = []

for _ in range(N):
    shortcutList.append(list(map(int, sys.stdin.readline().split())))

# 1킬로미터 단위로 해당 거리까지 갈 수 있는 최솟값을 저장하기 위한 리스트
location = []

for i in range(D+1):
    location.append(i)

# 0부터 D까지 반복
for i in range(D+1):
    # i가 0이 아니라면
    if i > 0:
        # 1킬로미터 전의 최소값과 현재 최소값 중 작은 값을 현재 인덱스에 저장
        location[i] = min(location[i], location[i-1]+1)
    # 지름길을 저장한 리스트의 요소를 반복
    for s, e, d in shortcutList:
        # 현재 확인하는 거리와 시작값이 같고, 도착값이 D보다 작고, 
        # 현재 위치에서 지름길로 갔을 경우의 거리가 도착 지점의 값보다 작다면
        if i == s and e <= D and location[i]+d < location[e]:
            # 도착 지점의 요소를 지름길로 갔을경우의 값으로 변경
            location[e] = location[i]+d

# 결과 출력
print(location[D])