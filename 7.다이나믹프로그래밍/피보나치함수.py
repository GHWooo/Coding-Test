import sys
from collections import deque

T = int(sys.stdin.readline())

Nlist = [int(sys.stdin.readline()) for _ in range(T)]

def dynamic(Nlist):
    for i in Nlist:
        if i == 0:
            print(1, 0)
        elif i == 1:
            print(0, 1)
        else:
            dq = deque()
            dq.append([1, 0])
            dq.append([0, 1])

            while i > 1:
                zero = dq[0][0] + dq[1][0]
                one = dq[0][1] + dq[1][1]

                sublist3 = [zero, one]
                dq.append(sublist3)
                dq.popleft()

                i -= 1

            print(dq[1][0], dq[1][1])

dynamic(Nlist)


# def fibonacci(n, zero, one):
#     if n == 0:
#         zero += 1
#     elif n == 1:
#         one += 1
#     else:
#         subzero1, subone1 = fibonacci(n-1, zero, one)
#         subzero2, subone2 = fibonacci(n-2, zero, one)
#         zero += (subzero1 + subzero2)
#         one += (subone1 + subone2)

#     return zero, one


# for i in Nlist:
#     zero = 0
#     one = 0

#     resultZero, resultOne = fibonacci(i, zero, one)
#     print(resultZero, resultOne)