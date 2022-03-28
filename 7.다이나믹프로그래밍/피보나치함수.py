# 반복되는 규칙을 찾아서 풀었다.
# (0, 0)에서 첫번째 원소가 0의 개수, 두번째 개수가 1의 개수라고 한다면
# 0 -> (1, 0)
# 1 -> (0, 1)
# 2 -> (1, 1)
# 3 -> (1, 2)
# ...

# 2부터 그 뒤로는 하나의 규칙이 적용된다.
# 특정 원소의 값은 -1번째 값과 -2번째 값을 더한 값이다.
# ex) 4는, 2와 3의 원소를 더한 값이 나온다 -> (1, 1) + (1, 2) = (2, 3)

# 이점을 이용하여 deque를 통해 특정 값까지 더해주는 것을 반복하였다.

import sys
from collections import deque

# 케이스의 개수 입력
T = int(sys.stdin.readline())

# 케이스 개수 만큼 N입력
Nlist = [int(sys.stdin.readline()) for _ in range(T)]

# 0과 1의 개수를 출력하는 함수
def dynamic(Nlist):
    # N리스트에서 원소 하나씩 받아온다.
    for i in Nlist:
        # 만약 원소가 0이라면
        if i == 0:
            print(1, 0)
        # 만약 원소가 1이라면
        elif i == 1:
            print(0, 1)
        # 만약 원소가 0과 1이 아니라면
        else:
            # deque생성, 0과 1은 규칙에 적용되지 않으므로 미리 더해준다
            dq = deque()
            dq.append([1, 0])
            dq.append([0, 1])

            # 규칙은 2부터 적용되므로 i를 2까지 -1씩 빼줄것이기 때문에 해당 조건을 적용
            while i > 1:
                # -1번째 원소와 -2번째 원소를 더하여 0과 1의 개수를 구해준다
                zero = dq[0][0] + dq[1][0]
                one = dq[0][1] + dq[1][1]

                # 구한 0과 1의 개수를 deque에 넣어주고 필요없는 -3번째 원소를 삭제
                sublist3 = [zero, one]
                dq.append(sublist3)
                dq.popleft()

                i -= 1

            # 결과 출력
            print(dq[1][0], dq[1][1])

dynamic(Nlist)