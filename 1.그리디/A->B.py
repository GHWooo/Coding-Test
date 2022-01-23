import sys

A, B = map(int, sys.stdin.readline().split())
count = 1

while True:
    if B == A:
        break
    elif (B % 2 == 1 and B % 10 != 1) or B < A:
        count = -1
        break
    else:
        if B % 2 == 0:
            B = int(B / 2)
            count += 1
        else:
            B = int(B / 10)
            count += 1

print(count) 