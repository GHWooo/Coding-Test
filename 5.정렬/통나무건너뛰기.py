import sys
from collections import deque

T = int(sys.stdin.readline())
result = []

for _ in range(T):
    N = int(sys.stdin.readline())

    L = list(map(int, sys.stdin.readline().split()))
    L.sort()

    case = deque()
    case.append(L.pop())
    t = 0
    r = 0

    for _ in range(N-1):
        if t % 2 == 0:
            l_1 = L.pop()
            if r < (case[-1] - l_1):
                r = (case[-1] - l_1)
            case.append(l_1)
            t += 1
        else:
            l_2 = L.pop()
            if r < (case[0] - l_2):
                r = (case[0] - l_2)
            case.appendleft(l_2)
            t += 1

    result.append(r)


for i in result:
    print(i)