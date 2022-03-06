# 양끝 인덱스의 값도 이어진 것으로 보기 때문에
# 격차가 최소가 되려면 가운데 부터 정렬해야 함
# 나는 내림차순으로 가운데 정렬을 할것이고
# 좌우로 추가를 해줘야 하는데, 시간복잡도 면에서
# 리스트 보단 deque가 적절하기에 deque 사용

import sys
from collections import deque

# 케이스 개수 입력
T = int(sys.stdin.readline())
# 케이스 마다 결과를 입력 할 리스트
result = []

# 케이스 마다 입력
for _ in range(T):
    # 통나무 개수
    N = int(sys.stdin.readline())

    # 우선 통나무를 입력 받고 오름차순으로 정렬
    L = list(map(int, sys.stdin.readline().split()))
    L.sort()

    # 통나무를 좌우로 넣기 위해 deque 생성
    case = deque()
    # 우선 가장 큰 통나무를 하나 삭제하고 deque에 삽입
    case.append(L.pop())
    # 좌우를 결정할 변수
    t = 0
    # 최소 격차를 저장할 변수
    r = 0

    # 가장 큰 통나무 하나는 이미 삽입 했으므로 N-1번 반복
    for _ in range(N-1):
        # t가 짝수라면 오른쪽 삽입
        if t % 2 == 0:
            # 남아있는 통나무중 가장 큰 것을 삭제 후 변수에 입력
            l_1 = L.pop()
            # 넣기 전 가장 오른쪽에 있는 통나무와의 격차가 최소인지 확인
            if r < (case[-1] - l_1):
                # 최소라면 최소값 갱신
                r = (case[-1] - l_1)
            # deque 오른쪽 삽입
            case.append(l_1)
            # 좌우 변경을 위해 +1
            t += 1
        # 방향을 제외하고는 위의 과정과 동일
        else:
            l_2 = L.pop()
            if r < (case[0] - l_2):
                r = (case[0] - l_2)
            case.appendleft(l_2)
            t += 1

    # 최소치를 결과 리스트에 삽입
    result.append(r)

# 결과 출력
for i in result:
    print(i)