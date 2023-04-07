# bfs로 풀이
# 런타임 에러로 애먹고 해결하니 틀렸습니다로 애먹었던 문제
# 너비 우선 탐색으로 가까운 노드부터 하나씩 확인하여 풀이
# 최단 시간도 구해야 하기 때문에 해당 노드를 확인했다는 마킹을 할 때 횟수도 알 수 있게 해줌

import sys
from collections import deque

# 시작 노드와 목적지 노드 입력
N, K = map(int, sys.stdin.readline().split())

def bfs(N):
    # deque를 선언하고 시작노드를 넣어줌
    dq = deque()
    dq.append(N)
    # 최대치인 100000을 max로 설정
    Max = 10 ** 5
    # max값만큼의 마킹을 위한 리스트 생성
    vist = [0] * (Max + 1)
    # 시작노드의 위치를 마킹
    vist[N] = 1

    # dq의 요소가 있을 동안 반복
    while dq:
        # 가장 왼쪽의 요소를 삭제함과 동시에 반환하여 Num 변수에 넣어줌
        Num = dq.popleft()
        # 만약 Num이 목적지 노드라면
        if Num == K:
            # 마킹을 해줬던 해당 위치의 값을 반환하고 종료
            # 시작 노드가 들어감과 동시에 1부터 마킹되기 때문에 마지막에는 1을 빼줌
            print(vist[Num]-1)
            break
        # Num이 목적지 노드가 아니라면
        else:
            # 갈수 있는 세가지 경우를 확인
            for nNum in (Num - 1, Num + 1, Num * 2):
                # 갈수 있는 노드가 범위 안에 포함되어 있고, 아직 마킹되어 있지 않다면
                if 0 <= nNum <= Max and vist[nNum] == 0:                 # 틀렸습니다는 범위지정 때문에 발생
                    # 최단 횟수를 구하기 위해 전의 횟수에서 1을 더한 값으로 마킹       # -> 생각 없이 양끝 범위를 제외한 0 < nNum < Max로 했더니 틀렸다고 출력
                    vist[nNum] = vist[Num] + 1                           # 런타임 에러의 원인은 소스코드의 순서인듯
                    # deque에 넣어줌                                        # 왜인지 정확한 이유는 알지 못했지만 소스 코드를 수정하기 전에는
                    dq.append(nNum)                                       # 40번 라인과 42번 라인의 코드의 순서가 바뀌어져 있었음
                                                                          # 추측해 보자면 deque에 넣기전에 마킹을 하는게 우선인듯..?
# 실행           
bfs(N) 