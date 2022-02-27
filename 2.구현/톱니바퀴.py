# ing...

import sys

list = [list(sys.stdin.readline().rstrip('\n')) for _ in range(4)]

K = int(sys.stdin.readline())

count = 0

def clock(L):
    x = L[7]
    del L[7]
    L.insert(0, x)

def unclock(L):
    x = L[0]
    del L[0]
    L.append(x)

def left_check(a, b, L):

    while a > 1:
        if L[a-1][6] != L[a-2][2]:
            if b == 1:
                unclock(L[a-2])
                b = -1
            else:
                clock(L[a-2])
                b = 1

            a -= 1

        else:
            break


def right_check(a, b, L):

    while a < 4:
        if L[a-1][2] != L[a][6]:
            if b == 1:
                unclock(L[a])
                b = -1
            else:
                clock(L[a])
                b = 1

            a += 1
        else:
            break


for _ in range(K):
    a, b = map(int, sys.stdin.readline().split())

    left_check(a, b, list)
    right_check(a, b, list)

    if b == 1:
        clock(list[a-1])
    else:
        unclock(list[a-1])

for i in range(4):
    if list[i][0] == '1':
        count += pow(2, i)

print(count)