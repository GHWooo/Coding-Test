# 리스트를 통해 이미 갔었던 정수를 표시하며 해결하면 되는 문제
# 너비 우선 탐색과 같은 방식
# 정수 N크기의 리스트를 만들어, 
# 아직 가지 않은 곳은 0, 간곳은 전의 요소 +1로 횟수를 삽입
# 가장 먼저 1을 찾았을 때 그때의 횟수가 최소값

import sys
from collections import deque

# 정수 N 입력
N = int(sys.stdin.readline())

# N개의 크기만큼의 리스트 생성
list = [0] * (N+1)

# 너비 우선 탐색을 위해 가야할 원소를 저장할 deque 생성
st = deque()
# N부터 시작하므로 deque에 삽입
st.append(N)

# 시작부터 횟수를 카운트 하므로 1을 리스트에 삽입
list[N] = 1

# 반복문으로 너비 우선 탐색을 하는 함수
def dynamic(list, st):
    # deque의 원소가 있을동안 반복
    while st:
        # deque의 가장 왼쪽 원소를 받아온다.
        subst = st.popleft()

        # 원소가 3으로 나누어지고 그 값에 아직 가본적 없다면
        if subst % 3 == 0 and list[subst // 3] == 0:
            # 나눈 값이 1이라면
            if subst // 3 == 1:
                # 횟수를 출력하고 종료
                print(list[subst])
                break 
            # 1이 아니라면
            else:
                # 횟수 + 1 값을 저장하고, deque에 다음으로 갈 원소로 삽입
                list[subst // 3] = list[subst] + 1
                st.append(subst // 3)
        
        # 원소가 2로 나누어지고 그 값에 아직 가본적 없다면
        if subst % 2 == 0 and list[subst // 2] == 0:
            # 나눈 값이 1이라면
            if subst // 2 == 1:
                # 횟수를 출력하고 종료
                print(list[subst])
                break
            # 1이 아니라면
            else:
                # 횟수 + 1 값을 저장하고, deque에 다음으로 갈 원소로 삽입
                list[subst // 2] = list[subst] + 1
                st.append(subst // 2)
        
        # 원소를 1로 뺀 값이 아직 가본적 없다면
        if list[subst - 1] == 0:
            # 그 값이 1이라면
            if subst - 1 == 1:
                # 횟수를 출력하고 종료
                print(list[subst])
                break
            # 1이 아니라면
            else:
                # 횟수 + 1 값을 저장하고, deque에 다음으로 갈 원소로 삽입
                list[subst -1] = list[subst] + 1
                st.append(subst -1)

# 만약 N이 1이라면 갈 수 없는 경우이기 때문에 0 출력
if N == 1:
    print(0)
# 아니라면 함수 실행
else:
    dynamic(N, list, st)